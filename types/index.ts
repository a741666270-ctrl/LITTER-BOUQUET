export interface Flower {
  id: string;
  name: string;
  meaning: string;
  description: string;
  imagePlaceholder: string;
}

export interface Birthstone {
  id: string;
  month: number;
  name: string;
  color: string;
}

export interface RingItem {
  id: string;
  flower: Flower;
  birthstone: Birthstone;
  metal: string;
  material: string;
  timestamp: number;
  flowerImage: string;
  imageUrl: string;
}

export interface Bouquet {
  rings: RingItem[];
}
