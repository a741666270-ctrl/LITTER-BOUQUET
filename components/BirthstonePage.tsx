"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { birthstones, flowers, flowerImages, flowerRingImages } from "@/data/flowers";
import { useBouquet } from "@/context/BouquetContext";
import { Flower, Birthstone } from "@/types";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function BirthstonePage() {
  const router = useRouter();
  const { addRing, isFull } = useBouquet();
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [selectedBirthstone, setSelectedBirthstone] = useState<Birthstone | null>(null);

  useEffect(() => {
    const flowerId = sessionStorage.getItem("selectedFlower");
    if (flowerId) {
      const flower = flowers.find((f) => f.id === flowerId);
      setSelectedFlower(flower || null);
    }
  }, []);

  const handleSelectBirthstone = (birthstone: Birthstone) => {
    setSelectedBirthstone(birthstone);
  };

  const handleConfirm = () => {
    if (selectedFlower && selectedBirthstone && !isFull) {
      const imageUrl = flowerRingImages[selectedFlower.id]?.[selectedBirthstone.month] || flowerImages[selectedFlower.id] || "";
      const ring = {
        id: `${selectedFlower.id}-${selectedBirthstone.id}-${Date.now()}`,
        flower: selectedFlower,
        birthstone: selectedBirthstone,
        metal: "yellow",
        timestamp: Date.now(),
        flowerImage: flowerImages[selectedFlower.id] || "",
        imageUrl: imageUrl,
      };
      addRing(ring);
      sessionStorage.removeItem("selectedFlower");
      router.push("/build-bouquet");
    }
  };

  const handleBack = () => {
    router.push("/choose-flower");
  };

  // Get the ring image based on selected flower and birthstone
  const ringImageSrc = selectedFlower && selectedBirthstone
    ? flowerRingImages[selectedFlower.id]?.[selectedBirthstone.month]
    : selectedFlower 
      ? flowerImages[selectedFlower.id]
      : null;

  if (!selectedFlower) {
    return (
      <main className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <p className="font-sans text-gray-500 tracking-wide mb-6">
            No flower selected. Please choose a flower first.
          </p>
          <Link 
            href="/choose-flower" 
            className="inline-block px-8 py-4 border border-gray-900 text-gray-900 font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            Choose Flower
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 bg-ivory/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="font-serif text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
          <div className="flex items-center gap-10">
            <Link 
              href="/build-bouquet" 
              className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-gray-900 transition-colors"
            >
              View Bouquet
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-40 pb-16 px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.35em] text-accent-gold uppercase mb-6">
            Step 02
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-8">
            Choose Your Birthstone
          </h1>
          <div className="w-12 h-px bg-accent-gold mx-auto mb-8" />
          <p className="font-serif text-lg italic text-gray-500 max-w-xl mx-auto">
            Every flower begins with a center. Choose the birthstone that represents a memory, a person, or a moment.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="pb-32 px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side - Ring Preview */}
            <div className="lg:sticky lg:top-32">
              {/* Selected Flower Info */}
              <div className="text-center mb-12">
                <p className="font-sans text-xs tracking-[0.25em] text-accent-gold uppercase mb-3">
                  Selected Flower
                </p>
                <h2 className="font-serif text-3xl text-gray-900 mb-2">
                  {selectedFlower.name}
                </h2>
                <p className="font-serif text-base italic text-gray-500">
                  {selectedFlower.meaning}
                </p>
              </div>

              {/* Large Ring Preview */}
              <div className="relative aspect-square bg-white flex items-center justify-center p-12 overflow-hidden">
                {ringImageSrc && (
                  <Image
                    src={ringImageSrc}
                    alt={`${selectedFlower.name} ring`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    unoptimized
                  />
                )}
                
                {/* Birthstone Gem Layer - overlaid on ring */}
                {selectedBirthstone && (
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundColor: selectedBirthstone.color,
                      mixBlendMode: 'multiply',
                      maskImage: 'url(/images/layer.png)',
                      maskSize: 'contain',
                      maskPosition: 'center',
                      maskRepeat: 'no-repeat',
                      WebkitMaskImage: 'url(/images/layer.png)',
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'center',
                      WebkitMaskRepeat: 'no-repeat',
                    }}
                  />
                )}
                {/* Decorative corners */}
                <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-accent-gold/40" />
                <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-accent-gold/40" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-accent-gold/40" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-accent-gold/40" />
              </div>

              {/* Selected Birthstone Preview */}
              {selectedBirthstone && (
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 border border-warm-200">
                    <div 
                      className="w-4 h-4 rounded-full shadow-sm"
                      style={{ backgroundColor: selectedBirthstone.color }}
                    />
                    <p className="font-sans text-sm text-gray-700 tracking-wide">
                      {selectedBirthstone.name}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Birthstone List */}
            <div>
              <div className="mb-10">
                <p className="font-sans text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">
                  Available Birthstones
                </p>
                <div className="w-8 h-px bg-accent-gold/30" />
              </div>

              {/* Luxury Birthstone List */}
              <div className="space-y-0">
                {birthstones.map((stone, index) => {
                  const isSelected = selectedBirthstone?.id === stone.id;
                  
                  return (
                    <button
                      key={stone.id}
                      onClick={() => handleSelectBirthstone(stone)}
                      className={`w-full group flex items-center justify-between py-5 px-6 border-b transition-all duration-300 ${
                        isSelected 
                          ? "border-accent-gold bg-accent-gold/5" 
                          : "border-warm-200 hover:border-accent-gold/50 hover:bg-warm-100/50"
                      } ${index === 0 ? "border-t" : ""}`}
                    >
                      <div className="flex items-center gap-5">
                        {/* Gemstone color dot */}
                        <div 
                          className={`w-5 h-5 rounded-full shadow-sm transition-transform duration-300 ${
                            isSelected ? "scale-125" : "group-hover:scale-110"
                          }`}
                          style={{ backgroundColor: stone.color }}
                        />
                        
                        {/* Month */}
                        <span className={`font-sans text-xs tracking-widest uppercase w-28 text-left transition-colors duration-300 ${
                          isSelected ? "text-accent-gold" : "text-gray-400 group-hover:text-gray-600"
                        }`}>
                          {monthNames[stone.month - 1]}
                        </span>
                        
                        {/* Stone name */}
                        <span className={`font-serif text-xl transition-colors duration-300 ${
                          isSelected ? "text-gray-900" : "text-gray-600 group-hover:text-gray-800"
                        }`}>
                          {stone.name}
                        </span>
                      </div>

                      {/* Selection indicator */}
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isSelected ? "bg-accent-gold scale-100" : "bg-gray-200 scale-0 group-hover:scale-100"
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Confirm Button */}
              <div className="mt-16">
                <button
                  onClick={handleConfirm}
                  disabled={!selectedBirthstone || isFull}
                  className={`w-full py-5 px-8 font-sans text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
                    selectedBirthstone && !isFull
                      ? "bg-gray-900 text-white hover:bg-accent-gold hover:text-gray-900"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isFull ? "Bouquet is Full" : "Confirm Flower + Birthstone"}
                </button>
                
                {/* Back link */}
                <div className="mt-6 text-center">
                  <button
                    onClick={handleBack}
                    className="font-sans text-xs tracking-widest text-gray-400 uppercase hover:text-gray-600 transition-colors"
                  >
                    ← Back to Flower Selection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-24 bg-ivory" />
    </main>
  );
}
