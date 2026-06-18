import { Flower, Birthstone } from "@/types";

export const flowers: Flower[] = [
  {
    id: "peach-blossom",
    name: "Peach Blossom",
    meaning: "Heart in Bloom",
    description:
      "A symbol of romance, affection and new beginnings.",
    imagePlaceholder: "peach-blossom-ring",
  },
  {
    id: "daisy",
    name: "Daisy",
    meaning: "Soft Companionship",
    description:
      "A symbol of friendship, comfort and everyday love.",
    imagePlaceholder: "daisy-ring",
  },
  {
    id: "plum-blossom",
    name: "Plum Blossom",
    meaning: "Quiet Strength",
    description:
      "A symbol of resilience, grace and inner confidence.",
    imagePlaceholder: "plum-blossom-ring",
  },
];

export const flowerImages: Record<string, string> = {
  "peach-blossom": "/images/peachblossom.png",
  "daisy": "/images/daisyflower.png",
  "plum-blossom": "/images/plumblossom.png",
};

// Gold metal types
export type MetalType = "yellow" | "white" | "rose";

export const metals: { id: MetalType; name: string; color: string }[] = [
  { id: "yellow", name: "Yellow Gold", color: "#D4AF37" },
  { id: "white", name: "White Gold", color: "#E8E8E8" },
  { id: "rose", name: "Rose Gold", color: "#E8B4B8" },
];

// Ring images: flower -> month (1-12) -> image path
// Structure: /images/{flower}/{flower}-{gold}-{month}.jpg
export const flowerRingImages: Record<string, Record<number, string>> = {
  "peach-blossom": {
    1: "/images/peach-blossom/peach-blossom-yellow-1.jpg",
    2: "/images/peach-blossom/peach-blossom-yellow-2.jpg",
    3: "/images/peach-blossom/peach-blossom-yellow-3.jpg",
    4: "/images/peach-blossom/peach-blossom-yellow-4.jpg",
    5: "/images/peach-blossom/peach-blossom-yellow-5.jpg",
    6: "/images/peach-blossom/peach-blossom-yellow-6.jpg",
    7: "/images/peach-blossom/peach-blossom-yellow-7.jpg",
    8: "/images/peach-blossom/peach-blossom-yellow-8.jpg",
    9: "/images/peach-blossom/peach-blossom-yellow-9.jpg",
    10: "/images/peach-blossom/peach-blossom-yellow-10.jpg",
    11: "/images/peach-blossom/peach-blossom-yellow-11.jpg",
    12: "/images/peach-blossom/peach-blossom-yellow-12.jpg",
  },
  "daisy": {
    1: "/images/daisy/daisy-yellow-1.jpg",
    2: "/images/daisy/daisy-yellow-2.jpg",
    3: "/images/daisy/daisy-yellow-3.jpg",
    4: "/images/daisy/daisy-yellow-4.jpg",
    5: "/images/daisy/daisy-yellow-5.jpg",
    6: "/images/daisy/daisy-yellow-6.jpg",
    7: "/images/daisy/daisy-yellow-7.jpg",
    8: "/images/daisy/daisy-yellow-8.jpg",
    9: "/images/daisy/daisy-yellow-9.jpg",
    10: "/images/daisy/daisy-yellow-10.jpg",
    11: "/images/daisy/daisy-yellow-11.jpg",
    12: "/images/daisy/daisy-yellow-12.jpg",
  },
  "plum-blossom": {
    1: "/images/plum-blossom/plum-blossom-yellow-1.jpg",
    2: "/images/plum-blossom/plum-blossom-yellow-2.jpg",
    3: "/images/plum-blossom/plum-blossom-yellow-3.jpg",
    4: "/images/plum-blossom/plum-blossom-yellow-4.jpg",
    5: "/images/plum-blossom/plum-blossom-yellow-5.jpg",
    6: "/images/plum-blossom/plum-blossom-yellow-6.jpg",
    7: "/images/plum-blossom/plum-blossom-yellow-7.jpg",
    8: "/images/plum-blossom/plum-blossom-yellow-8.jpg",
    9: "/images/plum-blossom/plum-blossom-yellow-9.jpg",
    10: "/images/plum-blossom/plum-blossom-yellow-10.jpg",
    11: "/images/plum-blossom/plum-blossom-yellow-11.jpg",
    12: "/images/plum-blossom/plum-blossom-yellow-12.jpg",
  },
};

export const birthstones: Birthstone[] = [
  { id: "garnet", month: 1, name: "Garnet", color: "#7B1D3A" },
  { id: "amethyst", month: 2, name: "Amethyst", color: "#6B3FA0" },
  { id: "aquamarine", month: 3, name: "Aquamarine", color: "#7DD3E0" },
  { id: "diamond", month: 4, name: "Diamond", color: "#E8E8E8" },
  { id: "emerald", month: 5, name: "Emerald", color: "#1E8E6D" },
  { id: "alexandrite", month: 6, name: "Alexandrite", color: "#4A2C5A" },
  { id: "ruby", month: 7, name: "Ruby", color: "#C41E3A" },
  { id: "peridot", month: 8, name: "Peridot", color: "#7BA05B" },
  { id: "sapphire", month: 9, name: "Sapphire", color: "#1C3D8F" },
  { id: "tourmaline", month: 10, name: "Pink Tourmaline", color: "#FF69B4" },
  { id: "citrine", month: 11, name: "Citrine", color: "#E8A628" },
  { id: "tanzanite", month: 12, name: "Tanzanite", color: "#3D2E8C" },
];

export const getBirthstoneByMonth = (month: number): Birthstone | undefined => {
  return birthstones.find((b) => b.month === month);
};
