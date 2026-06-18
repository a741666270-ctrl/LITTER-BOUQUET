"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBouquet } from "@/context/BouquetContext";
import { flowerRingImages, birthstones } from "@/data/flowers";

// Deep wine red color
const WINE_RED = "#722F37";
const WINE_RED_LIGHT = "#8B3A44";
const CREAM = "#FAF7F2";
const CREAM_PAPER = "#F5F1EB";

// Example data for demonstration (in production, this comes from bouquet context)
const EXAMPLE_BOUQUET_DATA = [
  { 
    flower: { id: "daisy", name: "Daisy", meaning: "Soft companionship" }, 
    birthstone: birthstones.find(b => b.month === 3) || { month: 3, name: "Aquamarine", color: "#7DD3E0" }
  },
  { 
    flower: { id: "peach-blossom", name: "Peach Blossom", meaning: "An open heart" }, 
    birthstone: birthstones.find(b => b.month === 7) || { month: 7, name: "Ruby", color: "#C41E3A" }
  },
  { 
    flower: { id: "plum-blossom", name: "Plum Blossom", meaning: "Quiet strength" }, 
    birthstone: birthstones.find(b => b.month === 2) || { month: 2, name: "Amethyst", color: "#6B3FA0" }
  },
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Price calculation
const BASE_PRICE = 599;

export default function ReviewBouquetPage() {
  const router = useRouter();
  const { bouquet, clearBouquet } = useBouquet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use real bouquet data if available, otherwise use example data
  const displayData = mounted && bouquet.rings.length > 0 
    ? bouquet.rings.map(ring => ({
        flower: ring.flower,
        birthstone: ring.birthstone
      }))
    : EXAMPLE_BOUQUET_DATA;

  const handleStartOver = () => {
    clearBouquet();
    router.push("/");
  };

  const handleAddToCart = () => {
    alert("Thank you! Your bouquet will be crafted with love.");
  };

  // Get flower image by ID
  const getFlowerImage = (flowerId: string): string => {
    const flowerImages: Record<string, string> = {
      "daisy": "/images/daisy.jpg",
      "peach-blossom": "/images/peach-blossom.png.jpg",
      "plum-blossom": "/images/plum-blossom.png.jpg",
    };
    return flowerImages[flowerId] || "";
  };

  // Get ring image by flower and month
  const getRingImage = (flowerId: string, month: number): string => {
    return flowerRingImages[flowerId]?.[month] || getFlowerImage(flowerId);
  };

  if (!mounted) {
    return (
      <main className="min-h-screen bg-cream-pink flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-wine-red/30 border-t-wine-red rounded-full animate-spin mx-auto" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream-pink">
      {/* Custom CSS for fonts and animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-script { font-family: 'Great Vibes', cursive; }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-2deg); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: floatReverse 4s ease-in-out infinite;
        }
        
        .paper-texture {
          background-image: 
            linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.01) 50%, transparent 100%),
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 100% 100%, 20px 20px, 20px 20px;
        }
        
        .envelope-shadow {
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 10px 15px -3px rgba(0, 0, 0, 0.08),
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        .polaroid-shadow {
          box-shadow: 
            0 1px 1px rgba(0,0,0,0.04),
            0 2px 4px rgba(0,0,0,0.06),
            0 4px 8px rgba(0,0,0,0.08),
            0 8px 16px rgba(0,0,0,0.06);
        }
        
        .letter-shadow {
          box-shadow: 
            0 1px 2px rgba(0,0,0,0.03),
            0 2px 4px rgba(0,0,0,0.04),
            0 4px 8px rgba(0,0,0,0.04),
            0 8px 16px rgba(0,0,0,0.03),
            0 16px 32px rgba(0,0,0,0.04);
        }
        
        .card-shadow {
          box-shadow: 
            0 1px 2px rgba(0,0,0,0.04),
            0 2px 4px rgba(0,0,0,0.04),
            0 4px 8px rgba(0,0,0,0.03);
        }
        
        .bg-cream-pink {
          background-color: #FDF8F5;
        }
        
        .text-wine-red {
          color: #722F37;
        }
        
        .bg-wine-red {
          background-color: #722F37;
        }
        
        .border-wine-red {
          border-color: #722F37;
        }
        
        .hover-wine-red:hover {
          background-color: #8B3A44;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 py-4 sm:py-6 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left - Brand Name */}
          <div className="font-playfair text-sm sm:text-base md:text-lg tracking-[0.2em] text-gray-800 uppercase">
            Little Bouquet
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <span className="font-playfair text-sm font-semibold">LB</span>
            </div>
          </div>

          {/* Right - Start Over */}
          <button
            onClick={handleStartOver}
            className="font-cormorant text-sm text-gray-600 hover:text-gray-900 transition-colors relative group"
          >
            <span className="relative">
              Start Over
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-400 transform scale-x-100 group-hover:scale-x-0 transition-transform origin-left" />
            </span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="px-4 sm:px-6 md:px-8 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Title Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-800 mb-3 sm:mb-4 tracking-wide">
              A Love That Blooms
            </h1>
            <p className="font-cormorant text-base sm:text-lg md:text-xl text-gray-500 italic px-4">
              Every bouquet holds a story. Here&apos;s yours.
            </p>
            <div className="w-12 sm:w-16 h-px bg-wine-red/40 mx-auto mt-6 sm:mt-8" />
          </div>

          {/* Envelope Composition */}
          <div className="relative max-w-4xl mx-auto overflow-visible">
            
            {/* Main Envelope Container */}
            <div className="relative bg-wine-red envelope-shadow rounded-sm overflow-visible">
              
               {/* Envelope flap shadow */}
               <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
               
               {/* Inner cream background */}
               <div className="bg-cream-pink p-6 md:p-10">
                 
                 {/* Envelope inner content - layered composition */}
                 <div className="relative min-h-[500px] md:min-h-[600px]">
                   
                   {/* Central Letter Paper */}
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-md z-20">
                     <div className="bg-white paper-texture letter-shadow p-8 md:p-10 relative">
                       {/* Decorative corner */}
                       <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-wine-red/20" />
                       <div className="absolute top-2 right-2 w-6 h-6 border-r border-t border-wine-red/20" />
                       <div className="absolute bottom-2 left-2 w-6 h-6 border-l border-b border-wine-red/20" />
                       <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-wine-red/20" />
                       
                       {/* Letter Content */}
                       <div className="text-center space-y-6">
                         <h2 className="font-script text-3xl md:text-4xl text-wine-red">
                           My Bouquet Story
                         </h2>
                         
                         <div className="w-8 h-px bg-wine-red/30 mx-auto" />
                         
                         <div className="font-cormorant text-lg md:text-xl text-gray-700 space-y-3 leading-relaxed">
                           <p className="italic">Soft companionship.</p>
                           <p className="italic">An open heart.</p>
                           <p className="italic">Quiet strength.</p>
                         </div>
                         
                         <div className="w-8 h-px bg-wine-red/30 mx-auto" />
                         
                         <div className="font-cormorant text-base text-gray-600 space-y-2 leading-relaxed">
                           <p>Together, they tell a story</p>
                           <p>of love that protects,</p>
                           <p>of love that supports,</p>
                           <p>and of love that lasts</p>
                           <p className="font-semibold italic">a lifetime.</p>
                         </div>
                         
                         <div className="font-script text-2xl text-wine-red/60 pt-4">
                           ♡
                         </div>
                         
                         <div className="font-cormorant text-base text-gray-600 italic">
                           <p>Thank you for being</p>
                           <p>part of my story.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                   
                   {/* Left Side - Daisy Card */}
                   <div className="absolute left-0 md:-left-8 top-24 md:top-32 w-28 md:w-32 z-10 animate-float">
                     <div className="bg-white polaroid-shadow p-3 transform rotate-[-6deg]">
                       <div className="aspect-square bg-gradient-to-br from-cream to-warm-100 overflow-hidden">
                         <Image
                           src={getRingImage("daisy", 3)}
                           alt="Daisy Ring"
                           fill
                           className="object-contain p-4"
                           unoptimized
                         />
                       </div>
                       <p className="font-script text-lg text-center text-gray-800 mt-2">Daisy</p>
                     </div>
                   </div>
                   
                   {/* Right Side - Peach Blossom Card */}
                   <div className="absolute right-0 md:-right-6 top-20 md:top-28 w-28 md:w-32 z-10 animate-float-reverse">
                     <div className="bg-white polaroid-shadow p-3 transform rotate-[5deg]">
                       <div className="aspect-square bg-gradient-to-br from-cream to-warm-100 overflow-hidden">
                         <Image
                           src={getRingImage("peach-blossom", 7)}
                           alt="Peach Blossom Ring"
                           fill
                           className="object-contain p-4"
                           unoptimized
                         />
                       </div>
                       <p className="font-script text-lg text-center text-gray-800 mt-2">Peach Blossom</p>
                     </div>
                   </div>
                   
                   {/* Bottom Right - Plum Blossom Card */}
                   <div className="absolute right-4 md:right-12 bottom-16 md:bottom-24 w-28 md:w-32 z-10 animate-float">
                     <div className="bg-white polaroid-shadow p-3 transform rotate-[8deg]">
                       <div className="aspect-square bg-gradient-to-br from-cream to-warm-100 overflow-hidden">
                         <Image
                           src={getRingImage("plum-blossom", 2)}
                           alt="Plum Blossom Ring"
                           fill
                           className="object-contain p-4"
                           unoptimized
                         />
                       </div>
                       <p className="font-script text-lg text-center text-gray-800 mt-2">Plum Blossom</p>
                     </div>
                   </div>
                   
                   {/* Polaroid Photo 1 - Top Left */}
                   <div className="absolute left-2 md:left-4 top-4 md:top-8 w-16 md:w-20 z-5 animate-float-reverse">
                     <div className="bg-white polaroid-shadow p-2 transform rotate-[-3deg]">
                       <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center">
                           <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                           </svg>
                         </div>
                       </div>
                       <p className="font-cormorant text-xs text-center text-gray-500 mt-1 italic">~ 2024 ~</p>
                     </div>
                   </div>
                   
                   {/* Polaroid Photo 2 - Bottom Left */}
                   <div className="absolute left-8 md:left-16 bottom-8 md:bottom-12 w-16 md:w-20 z-5 animate-float">
                     <div className="bg-white polaroid-shadow p-2 transform rotate-[4deg]">
                       <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center">
                           <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                           </svg>
                         </div>
                       </div>
                       <p className="font-cormorant text-xs text-center text-gray-500 mt-1 italic">Our Story</p>
                     </div>
                   </div>
                   
                   {/* Decorative flowers scattered */}
                   <div className="absolute top-8 right-12 md:right-20 w-10 h-10 z-5 opacity-40">
                     <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
                       <circle cx="25" cy="15" r="8" fill="#E8B4A0" />
                       <circle cx="15" cy="25" r="6" fill="#F5D0C5" />
                       <circle cx="35" cy="25" r="6" fill="#E8B4A0" />
                       <circle cx="25" cy="25" r="5" fill="#C9A86C" />
                     </svg>
                   </div>
                   
                   <div className="absolute bottom-24 md:bottom-32 left-4 w-8 h-8 z-5 opacity-30">
                     <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                       <ellipse cx="20" cy="20" rx="8" ry="15" fill="#6B3FA0" opacity="0.4" />
                       <ellipse cx="20" cy="20" rx="15" ry="6" fill="#6B3FA0" opacity="0.4" transform="rotate(45 20 20)" />
                     </svg>
                   </div>
                   
                 </div>
               </div>
               
               {/* Envelope bottom fold decoration */}
               <div className="h-4 bg-gradient-to-b from-black/5 to-transparent" />
               
             </div>
           </div>

          {/* Your Bouquet Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 max-w-5xl mx-auto">
            <div className="bg-white card-shadow p-6 sm:p-8 md:p-10 lg:p-12">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                
                {/* Flower Selection List */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="font-playfair text-base sm:text-lg text-gray-800 mb-4 sm:mb-6 tracking-wide">
                    Your Flowers
                  </h3>
                  
                  {displayData.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="w-7 sm:w-8 h-7 sm:h-8 rounded-full flex-shrink-0 mt-1"
                        style={{ backgroundColor: item.birthstone.color }}
                      />
                      <div>
                        <p className="font-cormorant text-lg sm:text-xl text-gray-800">{item.flower.name}</p>
                        <p className="font-cormorant text-xs sm:text-sm text-gray-500 italic">
                          {monthNames[item.birthstone.month - 1]} &middot; {item.birthstone.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Stacked Rings */}
                <div className="flex justify-center items-center py-6 sm:py-8 order-first sm:order-none">
                  <div className="relative w-40 sm:w-48 h-40 sm:h-48">
                    {displayData.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="absolute w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36"
                        style={{
                          left: `${index * 6}px`,
                          top: `${index * -10}px`,
                          zIndex: 3 - index
                        }}
                      >
                        <div className="relative w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 rounded-full shadow-lg border-4 border-white overflow-hidden">
                          <Image
                            src={getRingImage(item.flower.id, item.birthstone.month)}
                            alt={`${item.flower.name} ring`}
                            fill
                            className="object-contain p-2 sm:p-3"
                            unoptimized
                          />
                          <div 
                            className="absolute bottom-2 right-2 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-white shadow-md"
                            style={{ backgroundColor: item.birthstone.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Details Card */}
                <div className="border border-gray-200 p-4 sm:p-6">
                  <h3 className="font-playfair text-base sm:text-lg text-gray-800 mb-4 sm:mb-6 tracking-wide">
                    Your Bouquet Details
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4 font-cormorant text-sm sm:text-base">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Flowers</span>
                      <span className="text-gray-800">{displayData.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Metal</span>
                      <span className="text-gray-800">Rose Gold</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 sm:pt-4 space-y-2">
                      {displayData.map((item, index) => (
                        <div key={index} className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">{item.flower.name}</span>
                          <span className="text-gray-600">{item.birthstone.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-10 sm:mt-12 text-center">
            
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center gap-3 sm:gap-4 bg-wine-red hover-wine-red text-white font-playfair text-base sm:text-lg md:text-xl tracking-[0.15em] px-8 sm:px-10 md:px-16 py-4 sm:py-5 md:py-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>MAKE IT YOURS</span>
              <span className="font-cormorant text-sm sm:text-base tracking-normal hidden sm:inline">${BASE_PRICE}</span>
              <span className="text-lg sm:text-xl">›</span>
            </button>
            
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 px-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-wine-red/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span className="font-cormorant text-xs sm:text-sm text-gray-500">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-wine-red/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-cormorant text-xs sm:text-sm text-gray-500">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-wine-red/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="font-cormorant text-xs sm:text-sm text-gray-500">30-Day Returns</span>
              </div>
            </div>
            
          </div>

        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-16" />
    </main>
  );
}
