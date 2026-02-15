
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
  isBespoke?: boolean;
  isLimited?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
}

export enum AppRoute {
  HOME = '/',
  SHOP = '/shop',
  PRODUCT = '/product/:id',
  BESPOKE = '/bespoke',
  HERITAGE = '/heritage',
  BLOG = '/blog',
  DASHBOARD = '/dashboard',
  CART = '/cart',
  CHECKOUT = '/checkout',
}
