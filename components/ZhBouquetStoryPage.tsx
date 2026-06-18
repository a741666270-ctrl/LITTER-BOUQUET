// Chinese version of BouquetStoryPage
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBouquet } from "@/context/BouquetContext";
import { birthstones } from "@/data/flowers";
import LanguageSwitcher from "./LanguageSwitcher";

const monthNames = [
  "一月", "二月", "三月", "四月", "五月", "六月",
  "七月", "八月", "九月", "十月", "十一月", "十二月"
];

const PLACEHOLDER_BG = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80";

// Ring card - uses imageUrl directly from ring selection
function RingCard({ imageUrl, flowerName, meaning, month, birthstoneName, birthstoneColor }: {
  imageUrl: string;
  flowerName: string;
  meaning: string;
  month: number;
  birthstoneName: string;
  birthstoneColor: string;
}) {
  const [imgError, setImgError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const hasImage = imageUrl && !imgError;

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Ring Image Card - 70% height */}
      <div style={{
        width: '100%',
        paddingBottom: '70%',
        maxWidth: '360px',
        margin: '0 auto 28px',
        backgroundColor: '#FAFAF8',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)'
      }}>
        {hasImage ? (
          <>
            <img
              src={imageUrl}
              alt={`${flowerName} 戒指`}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '20px',
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
              onLoad={() => setLoaded(true)}
              onError={() => setImgError(true)}
            />
            {!loaded && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #FAFAF8 0%, #F5F5F3 50%, #FAFAF8 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite'
              }}/>
            )}
          </>
        ) : (
          /* Elegant Fallback SVG */
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAFAF8'
          }}>
            <svg viewBox="0 0 200 200" width="120" height="120">
              <defs>
                <linearGradient id="gold-fallback-zh" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E8D9C5"/>
                  <stop offset="50%" stopColor="#D4B896"/>
                  <stop offset="100%" stopColor="#C9A86C"/>
                </linearGradient>
              </defs>
              <ellipse cx="100" cy="125" rx="65" ry="45" fill="none" stroke="url(#gold-fallback-zh)" strokeWidth="10"/>
              <ellipse cx="100" cy="55" rx="32" ry="28" fill="url(#gold-fallback-zh)"/>
              <ellipse cx="100" cy="50" rx="24" ry="20" fill={birthstoneColor} opacity="0.85"/>
              <ellipse cx="92" cy="42" rx="7" ry="5" fill="white" opacity="0.5"/>
            </svg>
          </div>
        )}
        
        {/* Birthstone indicator */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: birthstoneColor,
          border: '2px solid white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
        }}/>
      </div>

      {/* Ring Details */}
      <h3 style={{
        fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
        fontSize: '1.3rem',
        fontWeight: 500,
        color: '#1A1A1A',
        marginBottom: '6px'
      }}>
        {flowerName}
      </h3>
      <p style={{
        fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
        fontSize: '1rem',
        fontStyle: 'italic',
        color: '#7A7A7A',
        marginBottom: '4px'
      }}>
        {meaning}
      </p>
      <p style={{
        fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
        fontSize: '0.9rem',
        color: '#9A9A9A'
      }}>
        {monthNames[month - 1]} · {birthstoneName}
      </p>
    </div>
  );
}

export default function ZhBouquetStoryPage() {
  const router = useRouter();
  const { bouquet, clearBouquet } = useBouquet();
  const [mounted, setMounted] = useState(false);
  const [bgImage, setBgImage] = useState(PLACEHOLDER_BG);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use real rings from bouquet, or empty array (no fake example data)
  const displayRings = mounted ? bouquet.rings : [];

  const handleStartOver = () => {
    if (confirm("重新开始？你的花束将被清空。")) {
      clearBouquet();
      router.push("/zh");
    }
  };

  const handleEditBouquet = () => {
    router.push("/zh/build-bouquet");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBgImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!mounted) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-[#C9A86C] border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" 
        rel="stylesheet"
      />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '28px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%)'
      }}>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '14px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'white'
        }}>
          Little Bouquet
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={handleStartOver}
            style={{
              fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.8)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.05em'
            }}
          >
            重新开始
          </button>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO: Full-bleed Photography */}
      {/* ============================================ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}>
          <Image
            src={bgImage}
            alt="浪漫背景"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            unoptimized
          />
          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)'
          }}/>
        </div>

        {/* Upload button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '48px',
            zIndex: 10,
            fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.6)',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '10px 20px',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)'
          }}
        >
          更换照片
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />

        {/* ============================================== */}
        {/* STORY CARD */}
        {/* ============================================== */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          width: '90%',
          maxWidth: '680px',
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          padding: '64px 56px',
          boxShadow: '0 40px 100px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.3)',
          marginTop: '60px',
          marginBottom: '80px'
        }}>
          
          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{
              fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', 'STSong', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              letterSpacing: '0.12em',
              lineHeight: 1.3,
              marginBottom: '20px'
            }}>
              花开有意
            </h1>
            <p style={{
              fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', 'STSong', Georgia, serif",
              fontSize: '1.05rem',
              fontStyle: 'italic',
              color: '#6B6B6B',
              letterSpacing: '0.06em',
              lineHeight: 1.8
            }}>
              每一朵花，
              <br />
              都替我们记住了一段时光。
            </p>
          </div>

          {/* Divider */}
          <div style={{
            width: '48px',
            height: '1px',
            backgroundColor: '#C9A86C',
            margin: '0 auto 48px'
          }}/>

          {/* Body Content */}
          <div style={{
            fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', 'STSong', Georgia, serif",
            fontSize: '1.1rem',
            lineHeight: 2.6,
            color: '#3A3A3A',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '0.03em'
          }}>
            <p style={{ marginBottom: '8px' }}>有些人陪伴我们长大，</p>
            <p style={{ marginBottom: '8px' }}>有些人与我们并肩同行。</p>
            <p style={{ marginBottom: '8px' }}>而有些爱，</p>
            <p style={{ marginBottom: '8px' }}>即使不常说出口，</p>
            <p style={{ marginBottom: '32px' }}>也始终存在。</p>
            <p style={{ marginBottom: '8px' }}>愿这些花语与宝石，</p>
            <p style={{ marginBottom: '8px' }}>替你珍藏那些重要的人，</p>
            <p>和那些值得被记住的瞬间。</p>
          </div>

          {/* Heart */}
          <div style={{
            fontFamily: "'Noto Serif SC', Georgia, serif",
            fontSize: '1.8rem',
            color: '#C9A86C',
            textAlign: 'center',
            margin: '40px 0 40px',
            opacity: 0.8
          }}>
            &#x2665;
          </div>

          {/* Closing */}
          <div style={{
            fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', 'STSong', Georgia, serif",
            fontSize: '1.05rem',
            fontStyle: 'italic',
            color: '#5A5A5A',
            textAlign: 'center',
            letterSpacing: '0.05em',
            lineHeight: 2.2
          }}>
            <p>这是属于你的花束。</p>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* RING REVEAL - Premium Product Photography */}
      {/* ============================================ */}
      <section style={{
        backgroundColor: '#FAFAFA',
        padding: '120px 48px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{
              fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#9A9A9A',
              marginBottom: '16px'
            }}>
              你的花束
            </p>
            <h2 style={{
              fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              color: '#1A1A1A',
              letterSpacing: '0.02em'
            }}>
              定制呈现
            </h2>
          </div>

          {/* Ring Display Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            marginBottom: '100px'
          }}>
            {displayRings.map((ring, index) => (
              <RingCard
                key={ring.id}
                imageUrl={ring.imageUrl}
                flowerName={ring.flower.name}
                meaning={ring.flower.meaning}
                month={ring.birthstone.month}
                birthstoneName={ring.birthstone.name}
                birthstoneColor={ring.birthstone.color}
              />
            ))}
          </div>

          {/* Product Details Card */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '56px 48px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{
              fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
              fontSize: '1.2rem',
              fontWeight: 500,
              color: '#1A1A1A',
              textAlign: 'center',
              marginBottom: '32px',
              letterSpacing: '0.1em'
            }}>
              花束详情
            </h3>

            <div style={{
              fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
              fontSize: '1rem',
              color: '#4A4A4A'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                marginBottom: '16px',
                borderBottom: '1px solid #EBEBEB'
              }}>
                <span style={{ color: '#8A8A8A' }}>花朵</span>
                <span>{displayRings.length}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                marginBottom: '16px',
                borderBottom: '1px solid #EBEBEB'
              }}>
                <span style={{ color: '#8A8A8A' }}>材质</span>
                <span>{displayRings[0]?.metal ? displayRings[0].metal.charAt(0).toUpperCase() + displayRings[0].metal.slice(1) + ' Gold' : '—'}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                marginBottom: '16px',
                borderBottom: '1px solid #EBEBEB'
              }}>
                <span style={{ color: '#8A8A8A' }}>镶嵌</span>
                <span>包镶</span>
              </div>
            </div>

            {/* Flower List */}
            <div style={{
              marginTop: '32px',
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              {displayRings.map((ring, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: ring.birthstone.color
                  }}/>
                  <span style={{
                    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
                    fontSize: '0.95rem',
                    color: '#5A5A5A'
                  }}>
                    {ring.flower.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section style={{
        backgroundColor: '#1A1A1A',
        padding: '100px 48px',
        textAlign: 'center'
      }}>
        <a
          href="https://xhslink.com/m/yS1CRIYk5L"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
            fontSize: '1rem',
            letterSpacing: '0.2em',
            color: 'white',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.4)',
            padding: '20px 64px',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            marginBottom: '48px',
            textDecoration: 'none'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#C9A86C';
            e.currentTarget.style.borderColor = '#C9A86C';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
          }}
        >
          立即定制
        </a>

        {/* Trust */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          flexWrap: 'wrap'
        }}>
          {[
            '免费配送',
            '终身质保',
            '30天退换'
          ].map((item, i) => (
            <div key={i} style={{
              fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.05em'
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Edit Link */}
      <div style={{
        backgroundColor: '#1A1A1A',
        textAlign: 'center',
        paddingBottom: '60px'
      }}>
        <button
          onClick={handleEditBouquet}
          style={{
            fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'STSongti SC', serif",
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.5)',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          ← 编辑花束
        </button>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </main>
  );
}
