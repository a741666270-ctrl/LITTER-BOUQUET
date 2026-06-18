"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { flowers } from "@/data/flowers";
import { useBouquet } from "@/context/BouquetContext";

// Local flower images
const flowerImages = {
  "peach-blossom": {
    flower: "/images/peachblossom.png",
    ring: "/images/peach-blossom.png.png",
  },
  "daisy": {
    flower: "/images/daisyflower.png",
    ring: "/images/daisy.png",
  },
  "plum-blossom": {
    flower: "/images/plumblossom.png",
    ring: "/images/plum-blossom.png.png",
  },
};

export default function ChooseFlowerPage() {
  const router = useRouter();
  const { isFull } = useBouquet();
  const [hoveredFlower, setHoveredFlower] = useState<string | null>(null);

  const handleChooseFlower = (flowerId: string) => {
    if (!isFull) {
      sessionStorage.setItem("selectedFlower", flowerId);
      router.push("/choose-birthstone");
    }
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 bg-cream/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="font-serif text-sm sm:text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
          <div className="flex items-center gap-6 sm:gap-10">
            <Link 
              href="/build-bouquet" 
              className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-gray-900 transition-colors"
            >
              View Bouquet
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-accent-gold uppercase mb-4 sm:mb-6">
            Step 01
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
            Choose Your Flower
          </h1>
          <div className="w-12 h-px bg-accent-gold mx-auto mb-6 sm:mb-8" />
          <p className="font-serif text-base sm:text-lg lg:text-xl italic text-gray-600 max-w-2xl mx-auto">
            Each flower carries a different meaning. Choose the one that speaks to your story.
          </p>
        </div>
      </section>

      {/* Flower Cards Section */}
      <section className="pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {flowers.map((flower) => {
              const images = flowerImages[flower.id as keyof typeof flowerImages];
              
              return (
                <div
                  key={flower.id}
                  className={`group relative ${isFull ? "opacity-50" : ""}`}
                  onMouseEnter={() => !isFull && setHoveredFlower(flower.id)}
                  onMouseLeave={() => setHoveredFlower(null)}
                >
                  {/* Card Container */}
                  <div className={`relative overflow-hidden transition-all duration-500 ${
                    isFull ? "cursor-not-allowed" : "cursor-pointer"
                  }`}>
                    {/* Image Container with Fade Effect */}
                    <div className="relative aspect-[3/4]">
                      {/* Default Flower Image */}
                      <div 
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          hoveredFlower === flower.id ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <Image
                          src={images.flower}
                          alt={`${flower.name} photography`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          unoptimized
                        />
                      </div>

                      {/* Hover Ring Image */}
                      <div 
                        className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                          hoveredFlower === flower.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={images.ring}
                          alt={`${flower.name} ring`}
                          width={400}
                          height={533}
                          className="object-contain"
                          unoptimized
                        />
                      </div>

                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 bg-white">
                      <p className="font-sans text-xs tracking-[0.25em] text-accent-gold uppercase mb-2 sm:mb-3">
                        {flower.meaning}
                      </p>
                      <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4">
                        {flower.name}
                      </h2>
                      <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
                        {flower.description}
                      </p>

                      {/* Choose Button */}
                      <button
                        onClick={() => handleChooseFlower(flower.id)}
                        disabled={isFull}
                        className={`w-full py-4 px-6 border transition-all duration-300 text-xs tracking-[0.2em] uppercase font-sans min-h-[48px] ${
                          isFull 
                            ? "border-gray-200 text-gray-400 cursor-not-allowed"
                            : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                        }`}
                      >
                        Choose This Flower
                      </button>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Continue Link Section */}
      <section className="pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-cream">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="w-8 h-px bg-accent-gold/30 mx-auto mb-6 sm:mb-8" />
          <p className="font-sans text-sm text-gray-500 mb-3 sm:mb-4">
            Know what you&apos;re looking for?
          </p>
          <Link 
            href="/build-bouquet" 
            className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-gray-900 transition-colors border-b border-gray-300 pb-1 hover:border-gray-900"
          >
            Continue to Your Bouquet
          </Link>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-16 sm:h-20 lg:h-24 bg-cream" />
    </main>
  );
}
