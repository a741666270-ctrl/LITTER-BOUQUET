"use client";

import { BouquetProvider } from "@/context/BouquetContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <BouquetProvider>{children}</BouquetProvider>;
}
