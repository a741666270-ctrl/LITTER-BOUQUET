// Chinese version of ChooseBirthstonePage
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useCallback, useState, useMemo } from "react";
import { birthstones, flowers, metals, MetalType } from "@/data/flowers";
import { useBouquet } from "@/context/BouquetContext";
import { Flower, Birthstone } from "@/types";
import LanguageSwitcher from "./LanguageSwitcher";

const DEFAULT_PREVIEW = "/images/daisy.png";

// Flower-specific ring placeholder images
const flowerRingPlaceholders: Record<string, string> = {
  "peach-blossom": "/images/peach-blossom/white/4.png",
  "daisy": "/images/daisy/white/4.png",
  "plum-blossom": "/images/plum-blossom/white/4.png",
};

// Chinese display data for birthstones
const birthstoneDisplayData: Record<string, { zhName: string; month: string }> = {
  "garnet": { zhName: "石榴石 Garnet", month: "一月" },
  "amethyst": { zhName: "紫水晶 Amethyst", month: "三月" },
  "aquamarine": { zhName: "海蓝宝 Aquamarine", month: "三月" },
  "diamond": { zhName: "钻石 Diamond", month: "四月" },
  "emerald": { zhName: "祖母绿 Emerald", month: "五月" },
  "alexandrite": { zhName: "亚历山大变石 Alexandrite", month: "六月" },
  "ruby": { zhName: "红宝石 Ruby", month: "七月" },
  "peridot": { zhName: "橄榄石 Peridot", month: "八月" },
  "sapphire": { zhName: "蓝宝石 Sapphire", month: "九月" },
  "tourmaline": { zhName: "粉碧玺 Pink Tourmaline", month: "十月" },
  "citrine": { zhName: "黄水晶 Citrine", month: "十一月" },
  "tanzanite": { zhName: "坦桑石 Tanzanite", month: "十二月" },
};

// Chinese display data for metals
const metalDisplayData: Record<string, { zhName: string }> = {
  "yellow": { zhName: "黄金 Yellow Gold" },
  "white": { zhName: "白金 White Gold" },
  "rose": { zhName: "玫瑰金 Rose Gold" },
};

// Flower display data
const flowerDisplayData: Record<string, { zhName: string; subtitle: string }> = {
  "peach-blossom": { zhName: "桃花 Peach Blossom", subtitle: "春日心意" },
  "daisy": { zhName: "雏菊 Daisy", subtitle: "温柔相伴" },
  "plum-blossom": { zhName: "梅花 Plum Blossom", subtitle: "静默坚韧" },
};

function DynamicPreview({ flowerId, metal, month }: { flowerId: string; metal?: MetalType | null; month?: number | null }) {
  const [imgError, setImgError] = useState(false);

  const resolvedMetal = metal ?? "white";

  const targetSrc = useMemo(() => {
    if (month) {
      return `/images/${flowerId}/${resolvedMetal}/${month}.png`;
    }
    return null;
  }, [flowerId, resolvedMetal, month]);

  const flowerFallback = flowerRingPlaceholders[flowerId] || DEFAULT_PREVIEW;
  const src = imgError || !targetSrc ? flowerFallback : targetSrc;

  useEffect(() => {
    setImgError(false);
  }, [flowerId, resolvedMetal, month]);

  const handleError = useCallback(() => {
    setImgError(true);
  }, []);

  return (
    <img
      src={src}
      alt="戒指预览"
      className="w-full h-full object-contain"
      onError={handleError}
    />
  );
}

export default function ZhChooseBirthstonePage() {
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
    router.push("/zh/build-bouquet");
  };

  const handleBack = () => {
    router.push("/zh/choose-flower");
  };

  const canConfirm = Boolean(selectedFlower && selectedBirthstone && selectedMetal && !isFull);

  // Get Chinese display data
  const flowerDisplay = selectedFlower ? flowerDisplayData[selectedFlower.id] || { zhName: selectedFlower.name, subtitle: selectedFlower.meaning } : null;
  const metalDisplay = selectedMetal ? metalDisplayData[selectedMetal] || { zhName: selectedMetal } : null;
  const birthstoneDisplay = selectedBirthstone ? birthstoneDisplayData[selectedBirthstone.id] || { zhName: selectedBirthstone.name, month: "" } : null;

  if (!selectedFlower) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md text-center px-6">
          <p className="font-sans text-sm text-gray-500 tracking-wide mb-6">
            还未选择花朵，请先选择一朵花。
          </p>
          <Link
            href="/zh/choose-flower"
            className="inline-block px-10 py-4 border border-gray-900 text-gray-900 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            选择花朵
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          <Link href="/zh" className="zh-brand text-lg tracking-[0.15em] text-gray-900">
            Little Bouquet
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/zh/build-bouquet"
              className="font-sans text-[11px] tracking-[0.15em] text-gray-500 uppercase hover:text-gray-900 transition-colors"
            >
              查看花束
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-gray-400">
          <span>选择花朵</span>
          <span className="text-gray-300">—</span>
          <span className="text-accent-gold font-medium">Step 02</span>
          <span className="text-gray-300">—</span>
          <span>你的花束</span>
        </div>
      </section>

      <section className="pt-8 sm:pt-10 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.3em] text-accent-gold uppercase mb-3 sm:mb-4">
            第二步
          </p>
          <h1 className="zh-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-gray-900 leading-[1.1]">
            选择生辰石
          </h1>
          <div className="w-10 h-px bg-accent-gold mx-auto mt-5 mb-5" />
          <p className="zh-serif text-base sm:text-lg italic text-gray-500 max-w-xl mx-auto leading-relaxed px-4">
            选择金属与生辰石，让戒指成为你的专属印记。
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 pt-4 sm:pt-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Metal Selection */}
            <div className="lg:col-span-12 xl:col-span-3 order-3 lg:order-1">
              <div className="bg-white border border-gray-200 p-4 sm:p-6">
                <p className="font-sans text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-4 sm:mb-5 text-center">
                  选择金属
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {metals.map((metal) => {
                    const isSelected = selectedMetal === metal.id;
                    const display = metalDisplayData[metal.id] || { zhName: metal.name };
                    return (
                      <button
                        key={metal.id}
                        type="button"
                        onClick={() => setSelectedMetal(metal.id)}
                        className={`w-full flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-4 sm:px-5 border transition-all duration-300 min-h-[48px] ${
                          isSelected
                            ? "border-accent-gold bg-accent-gold/[0.08]"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] leading-none transition-all duration-300 flex-shrink-0 ${
                            isSelected
                              ? "border-accent-gold bg-accent-gold text-white"
                              : "border-gray-400 text-transparent"
                          }`}
                        >
                          ●
                        </span>
                        <span
                          className={`font-sans text-sm tracking-wide transition-colors duration-300 ${
                            isSelected ? "text-gray-900" : "text-gray-700"
                          }`}
                        >
                          {display.zhName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="lg:col-span-12 xl:col-span-6 order-1 lg:order-2">
              <div className="bg-white border border-gray-200 p-3 sm:p-4">
                <p className="font-sans text-[11px] tracking-[0.25em] text-gray-400 uppercase mb-3 sm:mb-4 text-center">
                  预览
                </p>
                <div className="aspect-[4/5] bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
                  {selectedFlower ? (
                    <DynamicPreview
                      flowerId={selectedFlower.id}
                      metal={selectedMetal}
                      month={selectedBirthstone?.month}
                    />
                  ) : (
                    <p className="zh-serif text-sm sm:text-base italic text-gray-400 text-center px-4">
                      选择选项以预览戒指
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
                  <div className="w-4 h-[2px] bg-accent-gold rounded-full" />
                  <div className="w-4 h-[2px] bg-gray-300 rounded-full" />
                  <div className="w-4 h-[2px] bg-gray-300 rounded-full" />
                </div>
              </div>
            </div>

            {/* Selection Summary */}
            <div className="lg:col-span-12 xl:col-span-3 order-2 lg:order-3">
              <div className="bg-white border border-gray-200 p-4 sm:p-6">
                <p className="font-sans text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-4 sm:mb-5 text-center">
                  已选
                </p>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.2em] text-gray-400 uppercase mb-1">
                      花朵
                    </p>
                    <p className="zh-heading text-base sm:text-lg text-gray-900">
                      {flowerDisplay?.zhName}
                    </p>
                    <p className="zh-serif text-sm italic text-gray-500 mt-1">
                      {flowerDisplay?.subtitle}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-sans text-[11px] tracking-[0.2em] text-gray-400 uppercase mb-1">
                      金属
                    </p>
                    <p className="zh-heading text-base sm:text-lg text-gray-900">
                      {metalDisplay?.zhName || "—"}
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-sans text-[11px] tracking-[0.2em] text-gray-400 uppercase mb-1">
                      生辰石
                    </p>
                    <p className="zh-heading text-base sm:text-lg text-gray-900">
                      {birthstoneDisplay?.zhName || "—"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Birthstone Selection */}
          <div className="mt-10 sm:mt-14 lg:mt-16">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-6 sm:w-8 h-px bg-accent-gold/40" />
              <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-gray-500 uppercase">
                选择生辰石
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
              {birthstones.map((stone) => {
                const isSelected = selectedBirthstone?.id === stone.id;
                const display = birthstoneDisplayData[stone.id] || { zhName: stone.name, month: "" };
                return (
                  <button
                    key={stone.id}
                    type="button"
                    onClick={() => setSelectedBirthstone(stone)}
                    className={`flex flex-col items-center justify-center gap-2 py-4 sm:py-5 border transition-all duration-300 min-h-[72px] sm:min-h-[80px] ${
                      isSelected
                        ? "border-accent-gold bg-accent-gold/[0.06]"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div
                      className={`w-8 sm:w-9 h-8 sm:h-9 rounded-full shadow-sm transition-transform duration-300 ${
                        isSelected ? "scale-110" : ""
                      }`}
                      style={{ backgroundColor: stone.color }}
                    />
                    <p className="zh-heading text-xs sm:text-sm text-gray-900 leading-tight">
                      {display.zhName}
                    </p>
                    <p className="font-sans text-[9px] sm:text-[10px] tracking-widest text-gray-500 uppercase leading-tight">
                      {display.month}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="font-sans text-[11px] sm:text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-gray-900 transition-colors"
          >
            ← 上一步
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={!canConfirm}
            className={`px-6 sm:px-10 py-4 font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-300 border min-h-[48px] ${
              canConfirm
                ? "border-gray-900 bg-gray-900 text-white hover:border-accent-gold hover:bg-accent-gold hover:text-gray-900"
                : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isFull ? "花束已满" : "加入花束"}
          </button>
        </div>
      </section>

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
