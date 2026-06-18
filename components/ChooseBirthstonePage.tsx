// NEW VERSION 4 - Mobile-optimized compact layout
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useCallback, useState, useMemo, useRef } from "react";
import { birthstones, flowers, metals, MetalType } from "@/data/flowers";
import { useBouquet } from "@/context/BouquetContext";
import { Flower, Birthstone } from "@/types";

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DEFAULT_PREVIEW = "/images/daisy.png";

const flowerRingPlaceholders: Record<string, string> = {
  "peach-blossom": "/images/peach-blossom/white/4.png",
  "daisy": "/images/daisy/white/4.png",
  "plum-blossom": "/images/plum-blossom/white/4.png",
};

function DynamicPreview({ flowerId, metal, month }: { flowerId: string; metal?: MetalType | null; month?: number | null }) {
  const [imgError, setImgError] = useState(false);
  const candidatesRef = useRef<string[]>([]);

  const resolvedMetal = metal ?? "white";

  const srcCandidates = useMemo(() => {
    if (month) {
      return [
        `/images/${flowerId}/${resolvedMetal}/${month}.png`,
        `/images/${flowerId}/${resolvedMetal}/${month}.jpg`,
      ];
    }
    if (metal) {
      return [
        `/images/${flowerId}/${metal}/1.png`,
        `/images/${flowerId}/${metal}/1.jpg`,
      ];
    }
    return [];
  }, [flowerId, resolvedMetal, month, metal]);

  const flowerFallback = flowerRingPlaceholders[flowerId] || DEFAULT_PREVIEW;
  const src = imgError || srcCandidates.length === 0 ? flowerFallback : srcCandidates[0];

  useEffect(() => {
    candidatesRef.current = [...srcCandidates];
    setImgError(false);
  }, [flowerId, resolvedMetal, month, metal]);

  const handleError = useCallback(() => {
    if (candidatesRef.current.length > 1) {
      candidatesRef.current.shift();
    } else {
      setImgError(true);
    }
  }, []);

  return (
    <img
      src={src}
      alt="Ring preview"
      className="w-full h-full object-contain"
      onError={handleError}
    />
  );
}

export default function ChooseBirthstonePage() {
  const router = useRouter();
  const { addRing, isFull } = useBouquet();
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [selectedMetal, setSelectedMetal] = useState<MetalType | null>(null);
  const [selectedBirthstone, setSelectedBirthstone] = useState<Birthstone | null>(null);

  useEffect(() => {
    const flowerId = sessionStorage.getItem("selectedFlower");
    if (flowerId) {
      const flower = flowers.find((f) => f.id === flowerId);
      setSelectedFlower(flower || null);
    }
  }, []);

  const handleConfirm = () => {
    if (!selectedFlower || !selectedBirthstone || !selectedMetal || isFull) {
      return;
    }

    const imageUrl = `/images/${selectedFlower.id}/${selectedMetal}/${selectedBirthstone.month}.png`;

    const ring = {
      id: `${selectedFlower.id}-${selectedBirthstone.id}-${selectedMetal}-${Date.now()}`,
      flower: selectedFlower,
      birthstone: selectedBirthstone,
      metal: selectedMetal,
      timestamp: Date.now(),
      flowerImage: selectedFlower.imagePlaceholder,
      imageUrl: imageUrl,
    };

    addRing(ring);
    sessionStorage.removeItem("selectedFlower");
    router.push("/build-bouquet");
  };

  const handleBack = () => {
    router.push("/choose-flower");
  };

  const canConfirm = Boolean(selectedFlower && selectedBirthstone && selectedMetal && !isFull);
  const selectedMetalLabel = selectedMetal ? metals.find((m) => m.id === selectedMetal)?.name ?? "—" : "—";

  if (!selectedFlower) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md text-center px-6">
          <p className="font-sans text-sm text-gray-500 tracking-wide mb-6">
            No flower selected. Please choose a flower first.
          </p>
          <Link
            href="/choose-flower"
            className="inline-block px-10 py-4 border border-gray-900 text-gray-900 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            Choose Flower
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* ── Mobile Header ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Go back"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="font-serif text-sm tracking-[0.1em] text-gray-900 uppercase">
              {selectedFlower.name}
            </span>
          </div>
          <Link
            href="/build-bouquet"
            className="font-sans text-[11px] tracking-[0.15em] text-gray-500 uppercase hover:text-gray-900 transition-colors"
          >
            View
          </Link>
        </div>
      </header>

      {/* ── Mobile: Sticky Preview ─────────────────────────────── */}
      <div className="sticky top-[53px] z-40 bg-white border-b border-gray-100 px-4 pt-3 pb-2">
        <div className="aspect-square max-h-[45vh] mx-auto bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
          {selectedFlower ? (
            <DynamicPreview
              flowerId={selectedFlower.id}
              metal={selectedMetal}
              month={selectedBirthstone?.month}
            />
          ) : (
            <p className="font-serif text-sm italic text-gray-400 text-center px-4">
              Select options to preview
            </p>
          )}
        </div>
        {/* Selection summary row */}
        <div className="flex items-center justify-center gap-1 mt-2 text-[10px] tracking-wide">
          <span className={`font-sans ${selectedMetal ? "text-gray-900" : "text-gray-400"}`}>
            {selectedMetalLabel}
          </span>
          <span className="text-gray-300">·</span>
          <span className={`font-sans ${selectedBirthstone ? "text-gray-900" : "text-gray-400"}`}>
            {selectedBirthstone ? selectedBirthstone.name : "—"}
          </span>
          <span className="text-gray-300">·</span>
          <span className={`font-sans ${selectedBirthstone ? "text-gray-900" : "text-gray-400"}`}>
            {selectedBirthstone ? monthNames[selectedBirthstone.month - 1] : "—"}
          </span>
        </div>
      </div>

      {/* ── Mobile: Configuration Steps ────────────────────────── */}
      <div className="flex-1 px-4 pt-4 pb-28 space-y-5">

        {/* Step 1: Metal */}
        <div>
          <p className="font-sans text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2">
            01 — Metal
          </p>
          <div className="flex gap-2">
            {metals.map((metal) => {
              const isSelected = selectedMetal === metal.id;
              return (
                <button
                  key={metal.id}
                  type="button"
                  onClick={() => setSelectedMetal(metal.id)}
                  className={`flex-1 py-3 px-2 border text-center transition-all duration-200 ${
                    isSelected
                      ? "border-accent-gold bg-accent-gold/[0.06] text-gray-900"
                      : "border-gray-200 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  <span className="font-sans text-[11px] tracking-wide block">{metal.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Birthstone */}
        <div>
          <p className="font-sans text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2">
            02 — Birthstone
          </p>
          <div className="grid grid-cols-4 gap-2">
            {birthstones.map((stone) => {
              const isSelected = selectedBirthstone?.id === stone.id;
              return (
                <button
                  key={stone.id}
                  type="button"
                  onClick={() => setSelectedBirthstone(stone)}
                  className={`flex flex-col items-center gap-1 py-3 border transition-all duration-200 ${
                    isSelected
                      ? "border-accent-gold bg-accent-gold/[0.06]"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full shadow-sm transition-transform duration-200 ${
                      isSelected ? "scale-125" : ""
                    }`}
                    style={{ backgroundColor: stone.color }}
                  />
                  <span className="font-sans text-[9px] text-gray-500 tracking-wide leading-tight">
                    {monthNames[stone.month - 1]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Stone details */}
        {selectedBirthstone && (
          <div className="pt-1">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-5 h-5 rounded-full shadow-sm flex-shrink-0"
                style={{ backgroundColor: selectedBirthstone.color }}
              />
              <div>
                <p className="font-serif text-base text-gray-900 leading-tight">
                  {selectedBirthstone.name}
                </p>
                <p className="font-sans text-[10px] text-gray-500 tracking-wide">
                  {monthNames[selectedBirthstone.month - 1]} · {selectedFlower.meaning}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile: Fixed Bottom CTA ───────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-3">
        <button
          type="button"
          onClick={handleConfirm}
          disabled={!canConfirm}
          className={`w-full py-4 font-sans text-[11px] tracking-[0.2em] uppercase transition-all duration-300 border min-h-[52px] ${
            canConfirm
              ? "border-gray-900 bg-gray-900 text-white hover:border-accent-gold hover:bg-accent-gold hover:text-gray-900"
              : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isFull ? "Bouquet is Full" : "Add to Bouquet →"}
        </button>
      </div>

      {/* ── Desktop: Full Layout ───────────────────────────────── */}
      <section className="hidden lg:block px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 pt-4 sm:pt-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-8">
            <p className="font-sans text-[11px] tracking-[0.3em] text-accent-gold uppercase mb-3">
              Step Two
            </p>
            <h1 className="font-serif text-4xl lg:text-[3.5rem] text-gray-900 leading-[1.1]">
              Select Birthstone
            </h1>
            <div className="w-10 h-px bg-accent-gold mx-auto mt-5 mb-5" />
            <p className="font-serif text-lg italic text-gray-500 max-w-xl mx-auto">
              Choose a metal and a birthstone to complete your ring.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Metal Selector */}
            <div className="xl:col-span-3 order-3 xl:order-1">
              <div className="bg-white border border-gray-200 p-6">
                <p className="font-sans text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-5 text-center">
                  Choose Metal
                </p>
                <div className="space-y-3">
                  {metals.map((metal) => {
                    const isSelected = selectedMetal === metal.id;
                    return (
                      <button
                        key={metal.id}
                        type="button"
                        onClick={() => setSelectedMetal(metal.id)}
                        className={`w-full flex items-center gap-4 py-5 px-5 border transition-all duration-300 min-h-[48px] ${
                          isSelected
                            ? "border-accent-gold bg-accent-gold/[0.08]"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] leading-none transition-all duration-300 flex-shrink-0 ${
                          isSelected
                            ? "border-accent-gold bg-accent-gold text-white"
                            : "border-gray-400 text-transparent"
                        }`}>●</span>
                        <span className={`font-sans text-sm tracking-wide transition-colors duration-300 ${
                          isSelected ? "text-gray-900" : "text-gray-700"
                        }`}>{metal.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Product Preview */}
            <div className="xl:col-span-6 order-1 xl:order-2">
              <div className="bg-white border border-gray-200 p-4">
                <p className="font-sans text-[11px] tracking-[0.25em] text-gray-400 uppercase mb-4 text-center">
                  Product Preview
                </p>
                <div className="aspect-[4/5] bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
                  {selectedFlower ? (
                    <DynamicPreview
                      flowerId={selectedFlower.id}
                      metal={selectedMetal}
                      month={selectedBirthstone?.month}
                    />
                  ) : (
                    <p className="font-serif text-base italic text-gray-400 text-center px-4">
                      Select options to preview your ring.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Selection Summary */}
            <div className="xl:col-span-3 order-2 xl:order-3">
              <div className="bg-white border border-gray-200 p-6">
                <p className="font-sans text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-5 text-center">
                  Your Selection
                </p>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.2em] text-gray-400 uppercase mb-1">Flower</p>
                    <p className="font-serif text-lg text-gray-900">{selectedFlower.name}</p>
                    <p className="font-serif text-sm italic text-gray-500 mt-1">{selectedFlower.meaning}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-sans text-[11px] tracking-[0.2em] text-gray-400 uppercase mb-1">Metal</p>
                    <p className="font-serif text-lg text-gray-900">{selectedMetalLabel}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-sans text-[11px] tracking-[0.2em] text-gray-400 uppercase mb-1">Birthstone</p>
                    <p className="font-serif text-lg text-gray-900">
                      {selectedBirthstone ? `${selectedBirthstone.name} / ${monthNames[selectedBirthstone.month - 1]}` : "—"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Birthstone Grid */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent-gold/40" />
              <p className="font-sans text-xs tracking-[0.25em] text-gray-500 uppercase">
                Choose Birthstone
              </p>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {birthstones.map((stone) => {
                const isSelected = selectedBirthstone?.id === stone.id;
                return (
                  <button
                    key={stone.id}
                    type="button"
                    onClick={() => setSelectedBirthstone(stone)}
                    className={`flex flex-col items-center justify-center gap-2 py-5 border transition-all duration-300 min-h-[80px] ${
                      isSelected
                        ? "border-accent-gold bg-accent-gold/[0.06]"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-full shadow-sm transition-transform duration-300 ${isSelected ? "scale-110" : ""}`} style={{ backgroundColor: stone.color }} />
                    <p className="font-serif text-sm text-gray-900 leading-tight">{stone.name}</p>
                    <p className="font-sans text-[10px] tracking-widest text-gray-500 uppercase leading-tight">
                      {monthNames[stone.month - 1]}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Desktop Bottom CTA ─────────────────────────────────── */}
      <div className="hidden lg:block border-t border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={handleConfirm}
            disabled={!canConfirm}
            className={`px-10 py-4 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 border min-h-[48px] ${
              canConfirm
                ? "border-gray-900 bg-gray-900 text-white hover:border-accent-gold hover:bg-accent-gold hover:text-gray-900"
                : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isFull ? "Bouquet is Full" : "Add to Bouquet"}
          </button>
        </div>
      </div>
    </main>
  );
}
