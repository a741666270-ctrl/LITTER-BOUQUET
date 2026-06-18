import Link from "next/link";

export default function CollectionPage() {
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
              className="font-sans text-xs tracking-[0.2em] text-gray-700 uppercase hover:text-gray-900 transition-colors"
            >
              Story
            </Link>
            <Link 
              href="/collection" 
              className="font-sans text-xs tracking-[0.2em] text-gray-900 uppercase hover:text-gray-600 transition-colors"
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

      <section className="pt-32 pb-24 px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mb-6">
            Collection
          </p>
          <h1 className="font-serif text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-8">
            Coming Soon
          </h1>
          <div className="w-12 h-px bg-[#C9A86C] mx-auto mb-8" />
          <p className="font-serif text-xl text-gray-600 italic">
            Our curated collection of floral rings and birthstones...
          </p>
        </div>
      </section>
    </main>
  );
}
