import Link from "next/link";
import Image from "next/image";

export default function StoryPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#EDE8E0]/50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="font-serif text-base tracking-[0.25em] text-gray-900 uppercase"
          >
            Little Bouquet
          </Link>
          <div className="flex items-center gap-10">
            <Link 
              href="/story" 
              className="font-sans text-xs tracking-[0.2em] text-gray-900 uppercase hover:text-gray-600 transition-colors"
            >
              Story
            </Link>
            <Link 
              href="/collection" 
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
              href="/birthstone" 
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
                    alt="Little Bouquet rings"
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
                Our Story
              </p>
              
              <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.05] mb-10">
                A Bouquet That<br />Stays With You
              </h1>
              
              <div className="w-12 h-px bg-[#C9A86C] mb-10" />
              
              <div className="space-y-6 font-sans text-base text-gray-600 leading-relaxed">
                <p>
                  Little Bouquet was inspired by the idea that flowers are memories made visible.
                </p>
                <p>
                  Every flower carries a meaning.<br />
                  Every birthstone tells a story.
                </p>
                <p>
                  By combining floral rings with birthstones, we allow each wearer to build a bouquet that reflects their own journey, relationships, and milestones.
                </p>
                <p>
                  A single flower can represent a moment.<br />
                  A bouquet becomes the story of a lifetime.
                </p>
                <p>
                  Each piece is handcrafted in small batches and designed to be collected, layered, and treasured for years to come.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-[#E5DFD3]">
                <p className="font-serif text-xl italic text-gray-700 mb-10">
                  Every ring, a memory.<br />
                  Every bouquet, a story.
                </p>
                
                <Link 
                  href="/choose-flower" 
                  className="inline-block font-sans text-xs tracking-[0.3em] text-gray-900 uppercase border-b border-gray-900 pb-1 hover:text-[#C9A86C] hover:border-[#C9A86C] transition-colors"
                >
                  Build Your Bouquet
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
              <h2 className="font-serif text-2xl mb-4">LITTLE BOUQUET</h2>
              <p className="font-serif text-sm italic text-white/70">
                A bouquet that stays with you.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="#" className="font-sans text-xs tracking-[0.2em] text-white/70 uppercase hover:text-white">
                  Instagram
                </Link>
                <Link href="#" className="font-sans text-xs tracking-[0.2em] text-white/70 uppercase hover:text-white">
                  Pinterest
                </Link>
                <Link href="#" className="font-sans text-xs tracking-[0.2em] text-white/70 uppercase hover:text-white">
                  Tiktok
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
                Explore
              </h3>
              <ul className="space-y-3">
                <li><Link href="/story" className="font-sans text-sm text-white/80 hover:text-white">Story</Link></li>
                <li><Link href="/collection" className="font-sans text-sm text-white/80 hover:text-white">Collection</Link></li>
                <li><Link href="/birthstone" className="font-sans text-sm text-white/80 hover:text-white">Birthstones</Link></li>
                <li><Link href="/journal" className="font-sans text-sm text-white/80 hover:text-white">Journal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
                Create
              </h3>
              <ul className="space-y-3">
                <li><Link href="/choose-flower" className="font-sans text-sm text-white/80 hover:text-white">Build Your Bouquet</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Gift a Ring</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Custom Orders</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Ring Sizer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">About</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Sustainability</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Stockists</Link></li>
                <li><Link href="#" className="font-sans text-sm text-white/80 hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-white/50">
              © 2026 Little Bouquet. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">Privacy Policy</Link>
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">Terms & Conditions</Link>
              <Link href="#" className="font-sans text-xs text-white/50 hover:text-white">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
