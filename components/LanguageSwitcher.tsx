"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Check if current path is Chinese version
  const isChinese = pathname.startsWith("/zh");
  
  if (isChinese) {
    // Convert /zh/story to /story, etc.
    const englishPath = pathname.replace(/^\/zh/, "/") || "/";
    return (
      <span className="border-l border-gray-300 pl-6 ml-2 flex gap-3">
        <Link 
          href={englishPath} 
          className="zh-switch font-sans text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-gray-900 transition-colors"
        >
          EN
        </Link>
        <span className="zh-switch font-sans text-xs tracking-[0.2em] text-gray-900 uppercase">中文</span>
      </span>
    );
  }
  
  // Convert /story to /zh/story, / to /zh, etc.
  const chinesePath = pathname.startsWith("/") ? `/zh${pathname}` : `/zh${pathname}`;
  return (
    <span className="border-l border-gray-300 pl-6 ml-2 flex gap-3">
      <span className="zh-switch font-sans text-xs tracking-[0.2em] text-gray-900 uppercase">EN</span>
      <Link 
        href={chinesePath} 
        className="zh-switch font-sans text-xs tracking-[0.2em] text-gray-500 uppercase hover:text-gray-900 transition-colors"
      >
        中文
      </Link>
    </span>
  );
}
