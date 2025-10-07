
import type { Product } from './types';

export const TAX_RATE = 0.11; // 11% PPN

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Kopi Susu Gula Aren', price: 18000, imageUrl: 'https://picsum.photos/seed/kopi1/400/300' },
  { id: 2, name: 'Americano', price: 15000, imageUrl: 'https://picsum.photos/seed/kopi2/400/300' },
  { id: 3, name: 'Caffe Latte', price: 20000, imageUrl: 'https://picsum.photos/seed/kopi3/400/300' },
  { id: 4, name: 'Croissant Coklat', price: 22000, imageUrl: 'https://picsum.photos/seed/roti1/400/300' },
  { id: 5, name: 'Red Velvet Cake', price: 25000, imageUrl: 'https://picsum.photos/seed/kue1/400/300' },
  { id: 6, name: 'Donat Gula', price: 12000, imageUrl: 'https://picsum.photos/seed/roti2/400/300' },
  { id: 7, name: 'Teh Lemon', price: 14000, imageUrl: 'https://picsum.photos/seed/teh1/400/300' },
  { id: 8, name: 'Air Mineral', price: 5000, imageUrl: 'https://picsum.photos/seed/air1/400/300' },
  { id: 9, name: 'Matcha Latte', price: 24000, imageUrl: 'https://picsum.photos/seed/kopi4/400/300' },
  { id: 10, name: 'Pain au Chocolat', price: 23000, imageUrl: 'https://picsum.photos/seed/roti3/400/300' },
  { id: 11, name: 'Cheesecake', price: 28000, imageUrl: 'https://picsum.photos/seed/kue2/400/300' },
  { id: 12, name: 'Caramel Macchiato', price: 22000, imageUrl: 'https://picsum.photos/seed/kopi5/400/300' },
];
