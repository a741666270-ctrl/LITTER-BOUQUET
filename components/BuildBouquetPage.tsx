"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBouquet } from "@/context/BouquetContext";
import { RingItem, Flower, Birthstone } from "@/types";

// Metal type (from ChooseBirthstonePage)
export interface Metal {
  id: string;
  name: string;
  color: string;
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Helper: Convert flower name to folder path
const getFlowerPath = (flower: Flower): string => {
  const map: Record<string, string> = {
    "Peach Blossom": "peach-blossom",
    "Daisy": "daisy",
    "Plum Blossom": "plum-blossom",
  };
  return map[flower.name] || flower.name.toLowerCase().replace(/\s+/g, "-");
};

// Helper: Convert metal to folder path
const getMetalPath = (metal: Metal | string | undefined): string => {
  if (!metal) return "yellow";
  
  // Handle Metal object
  if (typeof metal === 'object' && 'id' in metal) {
    const metalId = metal.id.toLowerCase();
    if (metalId.includes("rose")) return "rose";
    if (metalId.includes("white")) return "white";
    if (metalId.includes("yellow")) return "yellow";
  }
  
  // Handle string
  const metalStr = String(metal).toLowerCase();
  if (metalStr.includes("rose") || metalStr === "rose") return "rose";
  if (metalStr.includes("white") || metalStr === "white") return "white";
  if (metalStr.includes("yellow") || metalStr === "yellow") return "yellow";
  
  return "yellow";
};

// Helper: Get ring image path from ring data
const getRingImagePath = (ring: RingItem): string => {
  const flowerPath = getFlowerPath(ring.flower);
  const metalPath = getMetalPath(ring.metal);
  const monthNumber = String(ring.birthstone.month);
  
  return `/images/${flowerPath}/${metalPath}/${monthNumber}.png`;
};

// Helper to generate color description from hex
const getColorDescription = (color: string): string => {
  const colorMap: Record<string, string> = {
    "#7B1D3A": "Deep Wine Red",
    "#6B3FA0": "Royal Purple",
    "#7DD3E0": "Ocean Blue",
    "#E8E8E8": "Diamond White",
    "#1E8E6D": "Emerald Green",
    "#4A2C5A": "Alexandrite Violet",
    "#C41E3A": "Ruby Red",
    "#7BA05B": "Peridot Green",
    "#1C3D8F": "Sapphire Blue",
    "#FF69B4": "Rose Pink",
    "#E8A628": "Citrine Gold",
    "#3D2E8C": "Tanzanite Indigo",
  };
  return colorMap[color] || "Gemstone";
};

export default function BuildBouquetPage() {
  const router = useRouter();
  const { bouquet, removeRing, clearBouquet, isFull } = useBouquet();

  const handleStartOver = () => {
    if (confirm("Are you sure you want to start over? This will clear your entire bouquet.")) {
      clearBouquet();
      router.push("/choose-flower");
    }
  };

  const handleRemoveRing = (ringId: string) => {
    removeRing(ringId);
  };

  const handleAddAnotherFlower = () => {
    router.push("/choose-flower");
  };

  const handleContinueToStory = () => {
    router.push("/bouquet-story");
  };

  if (bouquet.rings.length === 0) {
    return (
      <main className="min-h-screen bg-ivory">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 bg-ivory/95 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <Link 
              href="/" 
              className="font-serif text-sm sm:text-base tracking-[0.25em] text-gray-900 uppercase"
            >
              Little Bouquet
            </Link>
          </div>
        </nav>

        {/* Empty State */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8">
          <div className="max-w-lg mx-auto text-center px-4">
            {/* Decorative Element */}
            <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-10 sm:mb-12 border border-accent-gold/30 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            
            <p className="font-sans text-xs tracking-[0.3em] text-accent-gold uppercase mb-4 sm:mb-6">
              Step 03
            </p>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-[1.1] mb-4 sm:mb-6">
              Build Your Bouquet
            </h1>
            
            <div className="w-12 h-px bg-accent-gold mx-auto mb-6 sm:mb-8" />
            
            <p className="font-serif text-base sm:text-lg italic text-gray-500 mb-8 sm:mb-12">
              Your bouquet is empty.
            </p>
            
            <button
              onClick={handleAddAnotherFlower}
              className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-gray-900 text-white font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-accent-gold hover:text-gray-900"
            >
              Choose Your First Flower
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 bg-ivory/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="font-serif text-sm sm:text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.35em] text-accent-gold uppercase mb-4 sm:mb-6">
            Step 03
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-6 sm:mb-8">
            Build Your Bouquet
          </h1>
          <div className="w-12 h-px bg-accent-gold mx-auto mb-6 sm:mb-8" />
          <p className="font-serif text-base sm:text-lg lg:text-xl italic text-gray-500 max-w-xl mx-auto">
            One flower tells a story. A bouquet tells your story.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">
            
            {/* LEFT SIDE - Ring Stacking Preview */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-4 sm:mb-6">
                <p className="font-sans text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">
                  Bouquet Preview
                </p>
                <div className="w-8 h-px bg-accent-gold/30" />
              </div>

              {/* Ring Stacking Container */}
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-3 sm:-inset-4 border border-accent-gold/10 pointer-events-none" />
                
                <div className="relative bg-white p-3 sm:p-4 lg:p-6">
                  {/* Stacked rings preview - single column */}
                  <div className="flex flex-col items-center">
                    {bouquet.rings.map((ring) => {
                      const imgSrc = getRingImagePath(ring);
                      return (
                        <Image
                          key={ring.id}
                          src={imgSrc}
                          alt={`${ring.flower.name} ring`}
                          width={300}
                          height={225}
                          className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain -mt-[100px] sm:-mt-[120px] first:mt-0"
                          unoptimized
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 sm:w-10 h-8 sm:h-10 border-l border-t border-accent-gold/30" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 border-r border-t border-accent-gold/30" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-8 sm:w-10 h-8 sm:h-10 border-l border-b border-accent-gold/30" />
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 border-r border-b border-accent-gold/30" />
              </div>

              {/* Bouquet count */}
              <div className="mt-4 text-center">
                <p className="font-sans text-xs tracking-widest text-gray-400 uppercase">
                  {bouquet.rings.length} {bouquet.rings.length === 1 ? "Ring" : "Rings"} in Your Bouquet
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - Your Bouquet List */}
            <div>
              <div className="mb-6 sm:mb-8">
                <p className="font-sans text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">
                  Your Selection
                </p>
                <div className="w-8 h-px bg-accent-gold/30" />
              </div>

              {/* Bouquet Items List */}
              <div className="space-y-4 sm:space-y-6">
                {bouquet.rings.map((ring, index) => {
                  const imgSrc = getRingImagePath(ring);
                  return (
                    <div
                      key={ring.id}
                      className="group relative bg-white border border-warm-200 p-6 sm:p-8 pt-10 sm:pt-12 transition-all duration-300 hover:border-accent-gold/50 hover:shadow-lg"
                    >
                      {/* Ring Number */}
                      <div className="absolute top-3 sm:top-4 left-6 sm:left-8 px-3 sm:px-4 py-1 bg-ivory">
                        <span className="font-sans text-xs tracking-widest text-accent-gold uppercase">
                          Flower {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Decorative top border */}
                      <div className="absolute top-0 left-8 right-8 h-px bg-accent-gold/20 group-hover:bg-accent-gold/50 transition-colors duration-300" />

                      <div className="flex items-start gap-4 sm:gap-6 pt-4 sm:pt-6">
                        {/* Ring Thumbnail */}
                        <div className="relative w-20 sm:w-24 h-20 sm:h-24 flex-shrink-0 bg-gradient-to-b from-warm-50 to-warm-100 rounded-full overflow-hidden border-2 border-white shadow-md">
                          <Image
                            src={imgSrc}
                            alt={`${ring.flower.name} ring`}
                            fill
                            className="object-contain p-2"
                            sizes="96px"
                            unoptimized
                          />
                        </div>

                        {/* Ring Details */}
                        <div className="flex-1 min-w-0 pt-2 sm:pt-4">
                          <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-1">
                            {ring.flower.name}
                          </h3>
                          <p className="font-serif text-sm sm:text-base italic text-gray-500 mb-3 sm:mb-4">
                            {ring.flower.meaning}
                          </p>

                          {/* Birthstone Info */}
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-sans text-xs sm:text-sm text-gray-500 tracking-wide">
                                {monthNames[ring.birthstone.month - 1]}
                              </span>
                              <span className="text-gray-300">—</span>
                              <span className="font-serif text-sm sm:text-base lg:text-lg text-gray-800">
                                {ring.birthstone.name}
                              </span>
                            </div>
                          </div>

                          {/* Birthstone Color Indicator */}
                          <div className="flex items-center gap-2 mt-2 sm:mt-3">
                            <div 
                              className="w-3 sm:w-4 h-3 sm:h-4 rounded-full shadow-sm"
                              style={{ backgroundColor: ring.birthstone.color }}
                            />
                            <span className="font-sans text-xs sm:text-sm text-gray-500 tracking-wide">
                              {getColorDescription(ring.birthstone.color)}
                            </span>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveRing(ring.id)}
                          className="flex-shrink-0 p-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
                          title="Remove from bouquet"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
                {/* Add Another Flower or Full Message */}
                {isFull ? (
                  <div className="text-center py-5 sm:py-6 border border-accent-gold/20 bg-accent-gold/5">
                    <p className="font-serif text-base sm:text-lg italic text-gray-700">
                      Your bouquet is complete.
                    </p>
                    <p className="font-sans text-xs tracking-widest text-gray-400 uppercase mt-2">
                      Maximum 5 rings reached
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={handleAddAnotherFlower}
                    className="w-full py-4 sm:py-5 px-6 sm:px-8 border border-gray-900 text-gray-900 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white min-h-[48px]"
                  >
                    Add Another Flower
                  </button>
                )}

                {/* Continue to Bouquet Story */}
                <button
                  onClick={handleContinueToStory}
                  className="w-full py-4 sm:py-5 px-6 sm:px-8 bg-accent-gold text-white font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-accent-gold-dark min-h-[48px]"
                >
                  Continue to Bouquet Story
                </button>

                {/* Start Over */}
                <div className="pt-3 sm:pt-4 text-center">
                  <button
                    onClick={handleStartOver}
                    className="font-sans text-xs tracking-widest text-gray-400 uppercase hover:text-red-500 transition-colors"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-16 sm:h-20 lg:h-24 bg-ivory" />
    </main>
  );
}
