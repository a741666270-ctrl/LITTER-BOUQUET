export const images = {
  hero: "/images/hero.jpg",
  handModel1: "/images/hand-model-1.png",
  handModel2: "/images/hand-model-2.png",
  iceCreamRing: "/images/ice-cream-ring.png",
  ringDetails: "/images/ice-cream-ring.png",
  roseRing: "/images/rose-ring.jpg",
  roseRing2: "/images/rose-ring-2.jpg",
  roseRing3: "/images/rose-ring-3.jpg",
  peachBlossom: "/images/peach-blossom.png.png",
  daisy: "/images/daisy.png",
  plumBlossom: "/images/plum-blossom.png.png",
  peachBlossomHand: "/images/peachblossom-handmodel.png",
  daisyHand: "/images/daisy-handmodel.jpg",
  plumBlossomHand: "/images/plumblossom-handmodel.png",
} as const;

export type ImageKey = keyof typeof images;

export const brokenImages: ImageKey[] = [
  "ringDetails",
  "birthstonesReference",
];
