"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/images";
import LanguageSwitcher from "./LanguageSwitcher";

export default function ZhHomePage() {
  return (
    <main className="bg-[#FAF7F2]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#EDE8E0]/50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/zh" 
            className="zh-brand text-sm sm:text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link 
              href="/zh/story" 
              className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
            >
              品牌故事
            </Link>
            <Link 
              href="/zh/#choose-flower" 
              className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
            >
              系列
            </Link>
            <Link 
              href="/zh/choose-flower" 
              className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
            >
              定制花束
            </Link>
            <Link 
              href="/zh/#birthstones" 
              className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
            >
              生辰石
            </Link>
            <Link 
              href="/zh/journal" 
              className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
            >
              日志
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Section 1: Hero - Light */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image with border */}
          <div className="relative">
            <div className="border border-[#C9A86C] p-2 sm:p-3 lg:p-4 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.hero}
                  alt="戒指与花"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-center mt-4 sm:mt-6 font-sans text-xs tracking-[0.3em] text-gray-600 uppercase">
              每一枚戒指，都是一段回忆。
            </p>
          </div>

          {/* Right - Text */}
          <div className="lg:pl-0 xl:lg:pl-8">
            <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 sm:mb-6">
              我们的故事
            </p>
            <h2 className="zh-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
              花开有意
            </h2>
            <div className="w-12 h-px bg-[#C9A86C] mb-6 sm:mb-8" />
            <p className="zh-serif text-lg sm:text-xl italic text-gray-600 mb-6 sm:mb-8">
              每一朵花，都承载着一段独一无二的故事。
            </p>
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Little Bouquet 将花语、生辰石与珠宝设计结合，让每一枚戒指都成为情感的见证。选择属于你的花朵与宝石，创造专属于你的纪念。
            </p>
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
              每一件作品均为手工小批量制作，绝不批量生产。
            </p>
            <Link 
              href="/zh/story" 
              className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
            >
              探索花语
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Three Flowers Twelve Stones - Dark Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src={images.roseRing}
          alt="花朵戒指叠戴"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center px-6 sm:px-12">
          <div className="max-w-[1400px] mx-auto w-full">
            <p className="font-sans text-xs tracking-[0.3em] text-white/80 uppercase mb-4 sm:mb-6">
              系列
            </p>
            <h2 className="zh-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] max-w-2xl">
              三种花朵<br />十二种宝石
            </h2>
          </div>
        </div>
      </section>

      {/* Section 3: Birthstones - Dark */}
      <section id="birthstones" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="zh-serif text-lg sm:text-xl lg:text-2xl italic text-white/90 max-w-2xl mb-10 sm:mb-12 lg:mb-16">
            每一种组合，都专属于你。按寓意、按月份、按你珍视的人来选择。
          </p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-px bg-white/10">
            {[
              { month: "一月", name: "石榴石", color: "#7B1D3A" },
              { month: "二月", name: "紫水晶", color: "#6B3FA0" },
              { month: "三月", name: "海蓝宝", color: "#7DD3E0" },
              { month: "四月", name: "钻石", color: "#888888" },
              { month: "五月", name: "祖母绿", color: "#1E8E6D" },
              { month: "六月", name: "亚历山大石", color: "#4A2C5A" },
              { month: "七月", name: "红宝石", color: "#C41E3A" },
              { month: "八月", name: "橄榄石", color: "#7BA05B" },
              { month: "九月", name: "蓝宝石", color: "#1C3D8F" },
              { month: "十月", name: "碧玺", color: "#FF69B4" },
              { month: "十一月", name: "黄水晶", color: "#E8A628" },
              { month: "十二月", name: "坦桑石", color: "#3D2E8C" },
            ].map((stone) => (
              <div key={stone.month} className="bg-black p-3 sm:p-4 lg:p-6 text-center">
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4"
                  style={{ backgroundColor: stone.color }}
                />
                <p className="font-sans text-[9px] sm:text-[10px] lg:text-xs tracking-[0.2em] text-white/60 uppercase mb-1 lg:mb-2">
                  {stone.month}
                </p>
                <p className="zh-serif text-xs sm:text-sm lg:text-base italic text-white leading-tight">
                  {stone.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Choose Your Flower - Light */}
      <section id="choose-flower" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
            第一步
          </p>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            <h2 className="zh-heading text-4xl sm:text-5xl lg:text-7xl text-gray-900 leading-[1.05]">
              选择<br />你的花朵
            </h2>
            <p className="zh-serif text-lg sm:text-xl italic text-gray-600 md:pt-8">
              每朵花都有寓意，每颗宝石都在诉说故事。选择属于你的那一个。
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Flower Cards */}
      <section className="pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Peach Blossom Ring */}
            <div className="group relative aspect-[3/4] bg-white overflow-hidden">
              <Image
                src={images.peachBlossom}
                alt="桃花戒指"
                fill
                className="object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={images.peachBlossomHand}
                alt="桃花戒指"
                fill
                className="object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white">
                <p className="zh-serif text-lg sm:text-xl italic text-gray-900">
                  桃花
                </p>
                <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
                  心花怒放
                </p>
              </div>
            </div>

            {/* Daisy Ring */}
            <div className="group relative aspect-[3/4] bg-white overflow-hidden">
              <Image
                src={images.daisy}
                alt="雏菊戒指"
                fill
                className="object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={images.daisyHand}
                alt="雏菊戒指"
                fill
                className="object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white">
                <p className="zh-serif text-lg sm:text-xl italic text-gray-900">
                  雏菊
                </p>
                <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
                  温柔相伴
                </p>
              </div>
            </div>

            {/* Plum Blossom Ring */}
            <div className="group relative aspect-[3/4] bg-white overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                src={images.plumBlossom}
                alt="梅花戒指"
                fill
                className="object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={images.plumBlossomHand}
                alt="梅花戒指"
                fill
                className="object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white">
                <p className="zh-serif text-lg sm:text-xl italic text-gray-900">
                  梅花
                </p>
                <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
                  静默之力
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: The Ring You Never Take Off */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.handModel1}
              alt="佩戴戒指的手"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:pl-0 xl:lg:pl-8">
            <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 sm:mb-6">
              承载你的故事
            </p>
            <h2 className="zh-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
              永不摘下<br />的那枚戒指
            </h2>
            <div className="w-12 h-px bg-[#C9A86C] mb-6 sm:mb-8" />
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
              每一件作品都为日常佩戴而设计。轻盈到几乎忘记它的存在，珍贵到永远铭记于心。
            </p>
            <Link 
              href="/zh/choose-flower" 
              className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
            >
              探索系列
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Stack Them */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:pr-0 xl:lg:pr-8 order-2 md:order-1">
            <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 sm:mb-6">
              适合任何时刻
            </p>
            <h2 className="zh-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
              叠戴<br />层层<br />意义
            </h2>
            <div className="w-12 h-px bg-[#C9A86C] mb-6 sm:mb-8" />
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
              单独佩戴一枚，作为低调的宣言。叠戴三枚、四枚、五枚——每一枚都代表一个对你重要的人或一段重要的时刻。
            </p>
            <Link 
              href="/zh/build-bouquet" 
              className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
            >
              定制你的花束
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden order-1 md:order-2">
            <Image
              src={images.roseRing3}
              alt="玫瑰戒指叠戴"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 8: Give the Flower that Lasts */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.handModel2}
              alt="情侣佩戴戒指"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:pl-0 xl:lg:pl-8">
            <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 sm:mb-6">
              有意义的礼物
            </p>
            <h2 className="zh-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
              送那朵<br />永不凋谢的花
            </h2>
            <div className="w-12 h-px bg-[#C9A86C] mb-6 sm:mb-8" />
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
              与会枯萎的花束不同，Little Bouquet 永恒持久。送出生日石花语戒指——一种无声胜有声的情感表达。
            </p>
            <Link 
              href="/zh/build-bouquet" 
              className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
            >
              选购礼物
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: Journal - Light */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
                日志
              </p>
              <h2 className="zh-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900">
                故事<br />与寓意
              </h2>
            </div>
            <div className="flex items-end justify-end">
              <Link 
                href="/zh/journal" 
                className="font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
              >
                所有日志
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                category: "生日石",
                title: "你的生日石，诉说怎样的故事",
                excerpt: "从石榴石的深红到蓝宝石的蔚蓝，每颗宝石都承载着几个世纪的寓意与情感。",
                date: "2026年6月"
              },
              {
                category: "工艺",
                title: "每一枚戒指，如何诞生于工匠之手",
                excerpt: "我们安特卫普的金匠以十二件为一批小批量制作，每片花瓣都单独成形，绝不铸模。",
                date: "2026年5月"
              },
              {
                category: "故事",
                title: "五代人的花束，一生的情感传承",
                excerpt: "一位客人告诉我们她佩戴的五枚戒指，每一枚都代表家族中的一位女性。我们久久难忘。",
                date: "2026年4月"
              }
            ].map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="w-full h-px bg-[#C9A86C] mb-4 sm:mb-6" />
                <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mb-2 sm:mb-4">
                  {post.category}
                </p>
                <h3 className="zh-serif text-lg sm:text-xl lg:text-2xl italic text-gray-900 mb-3 sm:mb-4 group-hover:text-[#C9A86C] transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {post.excerpt}
                </p>
                <p className="font-sans text-xs tracking-[0.2em] text-gray-400 uppercase">
                  {post.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Dark */}
      <footer className="bg-black text-white pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 sm:pb-14 lg:pb-16">
            <div>
              <h2 className="zh-brand text-lg sm:text-xl lg:text-2xl mb-4">LITTLE BOUQUET</h2>
              <p className="zh-serif text-sm italic text-white/70">
                永不凋谢的花束。
              </p>
              <div className="flex gap-4 mt-6 sm:mt-8">
                <Link href="#" className="font-sans text-xs tracking-[0.2em] text-white/70 uppercase hover:text-white">
                  Instagram
                </Link>
                <Link href="#" className="font-sans text-xs tracking-[0.2em] text-white/70 uppercase hover:text-white">
                  Pinterest
                </Link>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                <LanguageSwitcher />
              </div>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-4 sm:mb-6">
                探索
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/zh/story" className="font-sans text-sm text-white/80 hover:text-white">品牌故事</Link></li>
                <li><Link href="/zh/#choose-flower" className="font-sans text-sm text-white/80 hover:text-white">系列</Link></li>
                <li><Link href="/zh/#birthstones" className="font-sans text-sm text-white/80 hover:text-white">生辰石</Link></li>
                <li><Link href="/zh/journal" className="font-sans text-sm text-white/80 hover:text-white">日志</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-4 sm:mb-6">
                定制
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/zh/choose-flower" className="font-sans text-sm text-white/80 hover:text-white">定制花束</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">戒指礼物</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">定制订单</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-4 sm:mb-6">
                关于我们
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">关于我们</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">可持续发展</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">联系我们</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-sans text-xs text-white/50">
              © 2026 Little Bouquet. 保留所有权利。
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">隐私政策</Link>
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">服务条款</Link>
            </div>
          </div>
        </div>
      </footer>

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
