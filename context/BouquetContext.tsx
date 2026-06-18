"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { RingItem, Bouquet } from "@/types";

interface BouquetContextType {
  bouquet: Bouquet;
  addRing: (ring: RingItem) => void;
  removeRing: (id: string) => void;
  clearBouquet: () => void;
  isFull: boolean;
}

const BouquetContext = createContext<BouquetContextType | undefined>(undefined);

export function BouquetProvider({ children }: { children: React.ReactNode }) {
  const [bouquet, setBouquet] = useState<Bouquet>({ rings: [] });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("little-bouquet");
    if (saved) {
      try {
        setBouquet(JSON.parse(saved));
      } catch {
        setBouquet({ rings: [] });
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("little-bouquet", JSON.stringify(bouquet));
    }
  }, [bouquet, mounted]);

  const addRing = (ring: RingItem) => {
    if (bouquet.rings.length < 5) {
      setBouquet((prev) => ({
        rings: [...prev.rings, ring],
      }));
    }
  };

  const removeRing = (id: string) => {
    setBouquet((prev) => ({
      rings: prev.rings.filter((r) => r.id !== id),
    }));
  };

  const clearBouquet = () => {
    setBouquet({ rings: [] });
    localStorage.removeItem("little-bouquet");
  };

  const isFull = bouquet.rings.length >= 5;

  return (
    <BouquetContext.Provider
      value={{ bouquet, addRing, removeRing, clearBouquet, isFull }}
    >
      {children}
    </BouquetContext.Provider>
  );
}

export function useBouquet() {
  const context = useContext(BouquetContext);
  if (!context) {
    throw new Error("useBouquet must be used within a BouquetProvider");
  }
  return context;
}
