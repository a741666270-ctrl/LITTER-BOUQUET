// Chinese version of BuildBouquetPage
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBouquet } from "@/context/BouquetContext";
import { RingItem, Flower, Birthstone } from "@/types";
import LanguageSwitcher from "./LanguageSwitcher";

// Metal type (from ChooseBirthstonePage)
export interface Metal {
  id: string;
  name: string;
  color: string;
}

const monthNames = [
  "一月", "二月", "三月", "四月", "五月", "六月",
  "七月", "八月", "九月", "十月", "十一月", "十二月"
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
  
  if (typeof metal === 'object' && 'id' in metal) {
    const metalId = metal.id.toLowerCase();
    if (metalId.includes("rose")) return "rose";
    if (metalId.includes("white")) return "white";
    if (metalId.includes("yellow")) return "yellow";
  }
  
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
    "#7B1D3A": "深石榴红",
    "#6B3FA0": "皇家紫",
    "#7DD3E0": "海蓝",
    "#E8E8E8": "钻石白",
    "#1E8E6D": "祖母绿",
    "#4A2C5A": "亚历山大石",
    "#C41E3A": "鸽血红",
    "#7BA05B": "橄榄绿",
    "#1C3D8F": "蓝宝石蓝",
    "#FF69B4": "玫瑰粉",
    "#E8A628": "黄晶金",
    "#3D2E8C": "坦桑蓝",
  };
  return colorMap[color] || "宝石";
};

export default function ZhBuildBouquetPage() {
  const router = useRouter();
  const { bouquet, removeRing, clearBouquet, isFull } = useBouquet();

  const handleStartOver = () => {
    if (confirm("确定要重新开始吗？你的花束将被清空。")) {
      clearBouquet();
      router.push("/zh/choose-flower");
    }
  };

  const handleRemoveRing = (ringId: string) => {
    removeRing(ringId);
  };

  const handleAddAnotherFlower = () => {
    router.push("/zh/choose-flower");
  };

  const handleContinueToStory = () => {
    router.push("/zh/bouquet-story");
  };

  if (bouquet.rings.length === 0) {
    return (
      <main className="min-h-screen bg-ivory">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-6 bg-ivory/95 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <Link 
              href="/zh" 
              className="zh-brand text-base tracking-[0.25em] text-gray-900 uppercase"
            >
              Little Bouquet
            </Link>
            <div className="flex items-center gap-6">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>

        {/* Empty State */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12">
          <div className="max-w-lg mx-auto text-center">
            {/* Decorative Element */}
            <div className="w-20 h-20 mx-auto mb-12 border border-accent-gold/30 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            
            <p className="font-sans text-xs tracking-[0.3em] text-accent-gold uppercase mb-6">
              第三步
            </p>
            
            <h1 className="zh-heading text-4xl md:text-5xl text-gray-900 leading-[1.1] mb-6">
              定制你的花束
            </h1>
            
            <div className="w-12 h-px bg-accent-gold mx-auto mb-8" />
            
            <p className="zh-serif text-lg italic text-gray-500 mb-12">
              你的花束还未开始。
            </p>
            
            <button
              onClick={handleAddAnotherFlower}
              className="inline-block px-10 py-5 bg-gray-900 text-white font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-accent-gold hover:text-gray-900"
            >
              选择你的第一朵花
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-6 bg-ivory/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/zh" 
            className="zh-brand text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.35em] text-accent-gold uppercase mb-6">
            第三步
          </p>
          <h1 className="zh-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-8">
            定制你的花束
          </h1>
          <div className="w-12 h-px bg-accent-gold mx-auto mb-8" />
          <p className="zh-serif text-xl italic text-gray-500 max-w-xl mx-auto">
            一枚戒指诉说一个故事，一束花讲述你的一生。
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="pb-32 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* LEFT SIDE - Ring Stacking Preview */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-6">
                <p className="font-sans text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">
                  花束预览
                </p>
                <div className="w-8 h-px bg-accent-gold/30" />
              </div>

              {/* Ring Stacking Container */}
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-accent-gold/10 pointer-events-none" />
                
                <div className="relative bg-white p-4 lg:p-6">
                  {/* Stacked rings preview - single column */}
                  <div className="flex flex-col items-center">
                    {bouquet.rings.map((ring) => {
                      const imgSrc = getRingImagePath(ring);
                      return (
                        <Image
                          key={ring.id}
                          src={imgSrc}
                          alt={`${ring.flower.name} 戒指`}
                          width={360}
                          height={270}
                          className="w-[360px] h-auto object-contain -mt-[120px] first:mt-0"
                          unoptimized
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-10 h-10 border-l border-t border-accent-gold/30" />
                <div className="absolute top-4 right-4 w-10 h-10 border-r border-t border-accent-gold/30" />
                <div className="absolute bottom-4 left-4 w-10 h-10 border-l border-b border-accent-gold/30" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-r border-b border-accent-gold/30" />
              </div>

              {/* Bouquet count */}
              <div className="mt-4 text-center">
                <p className="font-sans text-xs tracking-widest text-gray-400 uppercase">
                  花束中已有 {bouquet.rings.length} 枚戒指
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - Your Bouquet List */}
            <div>
              <div className="mb-8">
                <p className="font-sans text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">
                  已选
                </p>
                <div className="w-8 h-px bg-accent-gold/30" />
              </div>

              {/* Bouquet Items List */}
              <div className="space-y-6">
                {bouquet.rings.map((ring, index) => {
                  const imgSrc = getRingImagePath(ring);
                  return (
                    <div
                      key={ring.id}
                      className="group relative bg-white border border-warm-200 p-8 pt-12 transition-all duration-300 hover:border-accent-gold/50 hover:shadow-lg"
                    >
                      {/* Ring Number */}
                      <div className="absolute top-4 left-8 px-4 py-1 bg-ivory">
                        <span className="font-sans text-xs tracking-widest text-accent-gold uppercase">
                          花朵 {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Decorative top border */}
                      <div className="absolute top-0 left-8 right-8 h-px bg-accent-gold/20 group-hover:bg-accent-gold/50 transition-colors duration-300" />

                      <div className="flex items-start gap-6 pt-6">
                        {/* Ring Thumbnail */}
                        <div className="relative w-28 h-28 flex-shrink-0 bg-gradient-to-b from-warm-50 to-warm-100 rounded-full overflow-hidden border-2 border-white shadow-md">
                          <Image
                            src={imgSrc}
                            alt={`${ring.flower.name} 戒指`}
                            fill
                            className="object-contain p-2"
                            sizes="112px"
                            unoptimized
                          />
                        </div>

                        {/* Ring Details */}
                        <div className="flex-1 min-w-0 pt-4">
                          <h3 className="zh-heading text-2xl text-gray-900 mb-1">
                            {ring.flower.name}
                          </h3>
                          <p className="zh-serif text-base italic text-gray-500 mb-4">
                            {ring.flower.meaning}
                          </p>

                          {/* Birthstone Info */}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-sans text-sm text-gray-500 tracking-wide">
                                {monthNames[ring.birthstone.month - 1]}
                              </span>
                              <span className="text-gray-300">—</span>
                              <span className="zh-serif text-lg text-gray-800">
                                {ring.birthstone.name}
                              </span>
                            </div>
                          </div>

                          {/* Birthstone Color Indicator */}
                          <div className="flex items-center gap-2 mt-3">
                            <div 
                              className="w-4 h-4 rounded-full shadow-sm"
                              style={{ backgroundColor: ring.birthstone.color }}
                            />
                            <span className="font-sans text-sm text-gray-500 tracking-wide">
                              {getColorDescription(ring.birthstone.color)}
                            </span>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveRing(ring.id)}
                          className="flex-shrink-0 p-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
                          title="移除"
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
              <div className="mt-12 space-y-4">
                {/* Add Another Flower or Full Message */}
                {isFull ? (
                  <div className="text-center py-6 border border-accent-gold/20 bg-accent-gold/5">
                    <p className="zh-serif text-lg italic text-gray-700">
                      你的花束已完整。
                    </p>
                    <p className="font-sans text-xs tracking-widest text-gray-400 uppercase mt-2">
                      最多可选择 5 枚戒指
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={handleAddAnotherFlower}
                    className="w-full py-5 px-8 border border-gray-900 text-gray-900 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white"
                  >
                    添加更多花朵
                  </button>
                )}

                {/* Continue to Bouquet Story */}
                <button
                  onClick={handleContinueToStory}
                  className="w-full py-5 px-8 bg-accent-gold text-white font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-accent-gold-dark"
                >
                  查看花束故事
                </button>

                {/* Start Over */}
                <div className="pt-4 text-center">
                  <button
                    onClick={handleStartOver}
                    className="font-sans text-xs tracking-widest text-gray-400 uppercase hover:text-red-500 transition-colors"
                  >
                    重新开始
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-24 bg-ivory" />

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
