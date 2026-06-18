"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/images";
import LanguageSwitcher from "./LanguageSwitcher";

export default function HomePage() {
  return (
    <main className="bg-[#FAF7F2]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#EDE8E0]/50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="font-serif text-sm sm:text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <Link 
                href="/story" 
                className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
              >
                Story
              </Link>
              <Link 
                href="/#choose-flower" 
                className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
              >
                Collection
              </Link>
              <Link 
                href="/choose-flower" 
                className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
              >
                Build Your Bouquet
              </Link>
              <Link 
                href="/#birthstones" 
                className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
              >
                Birthstones
              </Link>
              <Link 
                href="/journal" 
                className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
              >
                Journal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Flowers With Meaning - Light */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image with border */}
          <div className="relative">
            <div className="border border-[#C9A86C] p-2 sm:p-3 lg:p-4 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.hero}
                  alt="Stacking rings on a flower"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-center mt-4 sm:mt-6 font-sans text-xs tracking-[0.3em] text-gray-600 uppercase">
              Every Ring. A Memory.
            </p>
          </div>

          {/* Right - Text */}
          <div className="lg:pl-0 xl:lg:pl-8">
            <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 sm:mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
              Flowers<br />With Meaning
            </h2>
            <div className="w-12 h-px bg-[#C9A86C] mb-6 sm:mb-8" />
            <p className="font-serif text-lg sm:text-xl text-gray-600 italic mb-6 sm:mb-8">
              A bouquet is more than flowers.
            </p>
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
              It represents people, memories, milestones, and emotions. Little Bouquet captures these stories through floral rings and birthstones, allowing each wearer to build a bouquet that is entirely their own.
            </p>
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Each piece is handcrafted in small batches — never mass produced.
            </p>
            <Link 
              href="/story" 
              className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Three Flowers Twelve Stones - Dark Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src={images.roseRing}
          alt="Stacked rings with flowers"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center px-6 sm:px-12">
          <div className="max-w-[1400px] mx-auto w-full">
            <p className="font-sans text-xs tracking-[0.3em] text-white/80 uppercase mb-4 sm:mb-6">
              The Collection
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] max-w-2xl">
              Three flowers.<br />Twelve stones.
            </h2>
          </div>
        </div>
      </section>

      {/* Section 3: Birthstones - Dark */}
      <section id="birthstones" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-serif text-lg sm:text-xl lg:text-2xl italic text-white/90 max-w-2xl mb-10 sm:mb-12 lg:mb-16">
            Every combination is yours alone. Choose by meaning, by month, by the person you carry with you.
          </p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-px bg-white/10">
            {[
              { month: "JAN", name: "Garnet", color: "#7B1D3A" },
              { month: "FEB", name: "Amethyst", color: "#6B3FA0" },
              { month: "MAR", name: "Aquamarine", color: "#7DD3E0" },
              { month: "APR", name: "Diamond", color: "#888888" },
              { month: "MAY", name: "Emerald", color: "#1E8E6D" },
              { month: "JUN", name: "Alexandrite", color: "#4A2C5A" },
              { month: "JUL", name: "Ruby", color: "#C41E3A" },
              { month: "AUG", name: "Peridot", color: "#7BA05B" },
              { month: "SEP", name: "Sapphire", color: "#1C3D8F" },
              { month: "OCT", name: "Tourmaline", color: "#FF69B4" },
              { month: "NOV", name: "Citrine", color: "#E8A628" },
              { month: "DEC", name: "Tanzanite", color: "#3D2E8C" },
            ].map((stone) => (
              <div key={stone.month} className="bg-black p-3 sm:p-4 lg:p-6 text-center">
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4"
                  style={{ backgroundColor: stone.color }}
                />
                <p className="font-sans text-[9px] sm:text-[10px] lg:text-xs tracking-[0.2em] text-white/60 uppercase mb-1 lg:mb-2">
                  {stone.month}
                </p>
                <p className="font-serif text-xs sm:text-sm lg:text-base italic text-white leading-tight">
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
            Step 01
          </p>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-gray-900 leading-[1.05]">
              Choose Your<br />Flower
            </h2>
            <p className="font-serif text-lg sm:text-xl text-gray-600 italic md:pt-8">
              Each flower carries a meaning. Each gemstone tells a story. Choose the one that speaks for you.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Flower Cards - 3 Interactive Ring Options */}
      <section className="pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Three Ring Options - Interactive Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Peach Blossom Ring */}
            <div className="group relative aspect-[3/4] bg-white overflow-hidden">
              <Image
                src={images.peachBlossom}
                alt="Peach Blossom Ring"
                fill
                className="object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={images.peachBlossomHand}
                alt="Peach Blossom Ring"
                fill
                className="object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white">
                <p className="font-serif text-lg sm:text-xl italic text-gray-900">
                  Peach Blossom
                </p>
                <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
                  Heart in Bloom
                </p>
              </div>
            </div>

            {/* Daisy Ring */}
            <div className="group relative aspect-[3/4] bg-white overflow-hidden">
              <Image
                src={images.daisy}
                alt="Daisy Ring"
                fill
                className="object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={images.daisyHand}
                alt="Daisy Ring"
                fill
                className="object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white">
                <p className="font-serif text-lg sm:text-xl italic text-gray-900">
                  Daisy
                </p>
                <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
                  Soft Companionship
                </p>
              </div>
            </div>

            {/* Plum Blossom Ring */}
            <div className="group relative aspect-[3/4] bg-white overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                src={images.plumBlossom}
                alt="Plum Blossom Ring"
                fill
                className="object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={images.plumBlossomHand}
                alt="Plum Blossom Ring"
                fill
                className="object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-white">
                <p className="font-serif text-lg sm:text-xl italic text-gray-900">
                  Plum Blossom
                </p>
                <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
                  Quiet Strength
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
              alt="Hand wearing rings"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:pl-0 xl:lg:pl-8">
            <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 sm:mb-6">
              Carry Your Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
              The ring<br />you never<br />take off.
            </h2>
            <div className="w-12 h-px bg-[#C9A86C] mb-6 sm:mb-8" />
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Each piece is designed to live on your hand, every day. Lightweight enough to forget — meaningful enough to always remember.
            </p>
            <Link 
              href="/choose-flower" 
              className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Stack Them */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:pr-0 xl:lg:pr-8 order-2 md:order-1">
            <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 sm:mb-6">
              For Every Occasion
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
              Stack<br />them.<br />Layer<br />meaning.
            </h2>
            <div className="w-12 h-px bg-[#C9A86C] mb-6 sm:mb-8" />
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Wear one ring alone as a quiet statement. Layer three, four, five — each one a person or a moment that matters to you.
            </p>
            <Link 
              href="/build-bouquet" 
              className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
            >
              Build Your Bouquet
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden order-1 md:order-2">
            <Image
              src={images.roseRing3}
              alt="Stacked rings on rose"
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
              alt="Couple wearing rings"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:pl-0 xl:lg:pl-8">
            <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 sm:mb-6">
              A Gift of Meaning
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-6 sm:mb-8">
              Give the<br />flower that<br />lasts.
            </h2>
            <div className="w-12 h-px bg-[#C9A86C] mb-6 sm:mb-8" />
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Unlike a bouquet that fades, Little Bouquet stays. Gift someone their birthstone flower — a gesture that speaks without words.
            </p>
            <Link 
              href="/build-bouquet" 
              className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
            >
              Shop Gifts
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
                Journal
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900">
                Stories &<br />Meaning
              </h2>
            </div>
            <div className="flex items-end justify-end">
              <Link 
                href="/journal" 
                className="font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
              >
                All Journal Entries
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                category: "Birthstones",
                title: "What Your Birthstone Says About You",
                excerpt: "From the deep crimson of garnet to the cerulean depth of sapphire — each stone carries centuries of meaning.",
                date: "June 2026"
              },
              {
                category: "The Craft",
                title: "How Each Ring Is Made by Hand",
                excerpt: "Our goldsmith in Antwerp works in small batches of twelve. Each petal is shaped individually, never cast from a mould.",
                date: "May 2026"
              },
              {
                category: "Stories",
                title: "A Bouquet for Five Generations",
                excerpt: "A customer wrote to us about the five rings she wears — each for a woman in her family. We couldn't stop thinking about it.",
                date: "April 2026"
              }
            ].map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="w-full h-px bg-[#C9A86C] mb-4 sm:mb-6" />
                <p className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mb-2 sm:mb-4">
                  {post.category}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl italic text-gray-900 mb-3 sm:mb-4 group-hover:text-[#C9A86C] transition-colors">
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
              <h2 className="font-serif text-xl sm:text-2xl mb-4">LITTLE BOUQUET</h2>
              <p className="font-serif text-sm italic text-white/70">
                A bouquet that stays with you.
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
                Explore
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/story" className="font-sans text-sm text-white/80 hover:text-white">Story</Link></li>
                <li><Link href="/#choose-flower" className="font-sans text-sm text-white/80 hover:text-white">Collection</Link></li>
                <li><Link href="/#birthstones" className="font-sans text-sm text-white/80 hover:text-white">Birthstones</Link></li>
                <li><Link href="/journal" className="font-sans text-sm text-white/80 hover:text-white">Journal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-4 sm:mb-6">
                Create
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/choose-flower" className="font-sans text-sm text-white/80 hover:text-white">Build Your Bouquet</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Gift a Ring</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Custom Orders</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-4 sm:mb-6">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">About</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Sustainability</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-sans text-xs text-white/50">
              © 2026 Little Bouquet. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">Privacy</Link>
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
