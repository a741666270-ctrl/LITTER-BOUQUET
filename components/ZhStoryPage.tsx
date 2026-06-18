"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function ZhStoryPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#EDE8E0]/50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/zh" 
            className="zh-brand text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
          <div className="flex items-center gap-10">
            <Link 
              href="/zh/story" 
              className="font-sans text-xs tracking-[0.2em] text-gray-900 uppercase hover:text-gray-600 transition-colors"
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
              href="/zh/birthstone" 
              className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
            >
              生日石
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

      {/* Story Content */}
      <section className="pt-32 pb-24 px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left - Hero Image */}
            <div className="relative">
              <div className="border border-[#C9A86C] p-5 bg-white shadow-sm">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/ice-cream-ring.png"
                    alt="Little Bouquet 戒指"
                    fill
                    className="object-contain p-8"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="lg:pl-8">
              <p className="font-sans text-xs tracking-[0.4em] text-[#C9A86C] uppercase mb-6">
                品牌故事
              </p>
              
              <h1 className="zh-heading text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.05] mb-10">
                永不凋谢的花束
              </h1>
              
              <div className="w-12 h-px bg-[#C9A86C] mb-10" />
              
              <div className="space-y-6 font-sans text-base text-gray-600 leading-relaxed">
                <p>
                  Little Bouquet 相信，珠宝不仅是饰品，更是情感的载体。
                </p>
                <p>
                  每一种花朵都拥有独特的寓意，每一种宝石都记录着属于自己的时光。
                </p>
                <p>
                  从花语到生辰石，从材质到细节，我们希望帮助每个人创造一枚专属于自己的故事戒指。
                </p>
                <p>
                  让爱意被珍藏，让回忆被佩戴。
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-[#E5DFD3]">
                <p className="zh-serif text-xl italic text-gray-700 mb-10">
                  每一枚戒指，都是一段回忆。<br />
                  每一束花，都是一个故事。
                </p>
                
                <Link 
                  href="/zh/choose-flower" 
                  className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
                >
                  探索花语
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12 px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 pb-16">
            <div>
              <h2 className="zh-brand text-2xl mb-4">LITTLE BOUQUET</h2>
              <p className="zh-serif text-sm italic text-white/70">
                永不凋谢的花束。
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="#" className="font-sans text-xs tracking-[0.2em] text-white/70 uppercase hover:text-white">
                  Instagram
                </Link>
                <Link href="#" className="font-sans text-xs tracking-[0.2em] text-white/70 uppercase hover:text-white">
                  Pinterest
                </Link>
                <Link href="#" className="font-sans text-xs tracking-[0.2em] text-white/70 uppercase hover:text-white">
                  小红书
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <LanguageSwitcher />
              </div>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
                探索
              </h3>
              <ul className="space-y-3">
                <li><Link href="/zh/story" className="font-sans text-sm text-white/80 hover:text-white">品牌故事</Link></li>
                <li><Link href="/zh/#choose-flower" className="font-sans text-sm text-white/80 hover:text-white">系列</Link></li>
                <li><Link href="/zh/birthstone" className="font-sans text-sm text-white/80 hover:text-white">生日石</Link></li>
                <li><Link href="/zh/journal" className="font-sans text-sm text-white/80 hover:text-white">日志</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
                定制
              </h3>
              <ul className="space-y-3">
                <li><Link href="/zh/choose-flower" className="font-sans text-sm text-white/80 hover:text-white">定制花束</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">戒指礼物</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">定制订单</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">戒指尺寸</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
                关于我们
              </h3>
              <ul className="space-y-3">
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">关于我们</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">可持续发展</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">经销商</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">联系我们</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-white/50">
              © 2026 Little Bouquet. 保留所有权利。
            </p>
            <div className="flex gap-6">
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">隐私政策</Link>
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">服务条款</Link>
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">Cookie设置</Link>
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
