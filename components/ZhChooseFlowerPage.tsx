"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { flowers } from "@/data/flowers";
import { useBouquet } from "@/context/BouquetContext";
import LanguageSwitcher from "./LanguageSwitcher";

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

// Chinese display data for flowers
const flowerDisplayData: Record<string, { zhName: string; subtitle: string; meaningZh: string }> = {
  "peach-blossom": {
    zhName: "桃花 Peach Blossom",
    subtitle: "春日心意",
    meaningZh: "心花绽放",
  },
  "daisy": {
    zhName: "雏菊 Daisy",
    subtitle: "温柔相伴",
    meaningZh: "温柔相伴",
  },
  "plum-blossom": {
    zhName: "梅花 Plum Blossom",
    subtitle: "静默坚韧",
    meaningZh: "静默之力",
  },
};

export default function ZhChooseFlowerPage() {
  const router = useRouter();
  const { isFull } = useBouquet();
  const [hoveredFlower, setHoveredFlower] = useState<string | null>(null);

  const handleChooseFlower = (flowerId: string) => {
    if (!isFull) {
      sessionStorage.setItem("selectedFlower", flowerId);
      router.push("/zh/choose-birthstone");
    }
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 bg-cream/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/zh" 
            className="zh-brand text-sm sm:text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
          <div className="flex items-center gap-4 sm:gap-10">
            <LanguageSwitcher />
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <Link 
                href="/zh/build-bouquet" 
                className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-gray-900 transition-colors"
              >
                查看花束
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-accent-gold uppercase mb-4 sm:mb-6">
            第一步
          </p>
          <h1 className="zh-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
            选择你的花朵
          </h1>
          <div className="w-12 h-px bg-accent-gold mx-auto mb-6 sm:mb-8" />
          <p className="zh-serif text-base sm:text-lg lg:text-xl italic text-gray-600 max-w-2xl mx-auto px-4">
            每朵花都有独特的花语，每颗宝石都承载着时光的故事。选择那朵属于你的花。
          </p>
        </div>
      </section>

      {/* Flower Cards Section */}
      <section className="pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {flowers.map((flower) => {
              const images = flowerImages[flower.id as keyof typeof flowerImages];
              const display = flowerDisplayData[flower.id] || { zhName: flower.name, subtitle: flower.meaning };
              
              return (
                <div
                  key={flower.id}
                  className={`group relative ${isFull ? "opacity-50" : ""}`}
                  onMouseEnter={() => !isFull && setHoveredFlower(flower.id)}
                  onMouseLeave={() => setHoveredFlower(null)}
                >
                  <div className={`relative overflow-hidden transition-all duration-500 ${
                    isFull ? "cursor-not-allowed" : "cursor-pointer"
                  }`}>
                    <div className="relative aspect-[3/4]">
                      <div 
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          hoveredFlower === flower.id ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <Image
                          src={images.flower}
                          alt={display.zhName}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          unoptimized
                        />
                      </div>

                      <div 
                        className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                          hoveredFlower === flower.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={images.ring}
                          alt={display.zhName}
                          width={400}
                          height={533}
                          className="object-contain"
                          unoptimized
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-6 sm:p-8 bg-white">
                      <p className="zh-serif text-xs tracking-[0.25em] text-accent-gold uppercase mb-2 sm:mb-3">
                        {display.subtitle}
                      </p>
                      <h2 className="zh-heading text-2xl sm:text-3xl text-gray-900 mb-2">
                        {display.zhName}
                      </h2>
                      <p className="font-serif text-sm italic text-gray-400 mb-4 sm:mb-6">
                        {display.meaningZh}
                      </p>
                      <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {flower.description}
                      </p>

                      <button
                        onClick={() => handleChooseFlower(flower.id)}
                        disabled={isFull}
                        className={`w-full py-4 px-6 border transition-all duration-300 font-sans min-h-[48px] ${
                          isFull 
                            ? "border-gray-200 text-gray-400 cursor-not-allowed"
                            : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                        }`}
                      >
                        <span className="text-xs tracking-[0.2em] uppercase">
                          {isFull ? "花束已满" : "选择"}
                        </span>
                      </button>
                    </div>

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
            已有心意之选？
          </p>
          <Link 
            href="/zh/build-bouquet" 
            className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-gray-900 transition-colors border-b border-gray-300 pb-1 hover:border-gray-900"
          >
            查看我的花束
          </Link>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-16 sm:h-20 lg:h-24 bg-cream" />

      {/* Chinese Font Styles */}
      <style jsx global>{`
        .zh-heading {
          font-family: "Noto Serif SC", "Source Han Serif SC", "STSongti SC", serif;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        .zh-serif {
          font-family: "Noto Serif SC", "Source Han Serif SC", "STSongti SC", serif;
        }
        .zh-brand {
          font-family: "Noto Serif SC", "Source Han Serif SC", "STSongti SC", serif;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
