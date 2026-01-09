export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  tag?: string;
  category: 'clothing' | 'toys' | 'bath' | 'sleep';
  /** Direct image URL representing this specific product */
  imageUrl: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'snuggle-set',
    name: 'Snuggle Knit Set',
    description: 'Two-piece organic cotton knit set, super soft on delicate skin.',
    price: 39.99,
    tag: 'Bestseller',
    category: 'clothing',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'cloud-blanket',
    name: 'Cloud Soft Blanket',
    description: 'Double-layered blanket for naps, stroller rides, and tummy time.',
    price: 29.0,
    tag: 'New',
    category: 'sleep',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'teether-ring',
    name: 'Silicone Teether Ring',
    description: 'Free from BPA, phthalates, and PVC. Easy for tiny hands to grip.',
    price: 12.5,
    category: 'toys',
    imageUrl: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'bath-set',
    name: 'Gentle Bath Time Set',
    description: 'Tear-free wash and lotion, pediatrician-tested and hypoallergenic.',
    price: 24.5,
    category: 'bath',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'sleep-sack',
    name: 'Dreamy Sleep Sack',
    description: 'Breathable sleep sack for safer, cozier nights.',
    price: 34.9,
    category: 'sleep',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'stacking-cups',
    name: 'Stacking Cups',
    description: 'Colorful stacking cups that grow hand-eye coordination and play.',
    price: 18.75,
    category: 'toys',
    imageUrl: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&h=400&fit=crop&crop=center'
  }
];


