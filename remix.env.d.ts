/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

// Extend global Window interface
interface Window {
  ENV: {
    API_URL: string;
    STRIPE_PUBLIC_KEY: string;
  }
}

// Core product and review types
interface Product {
  id: string;
  name: string;
  brand: string;
  type: 'flower' | 'oil' | 'vape' | 'edible';
  category: 'sativa' | 'indica' | 'hybrid';
  thc: number;
  cbd: number;
  description: string;
  price: number;
  imageUrl: string;
}

interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  createdAt: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  reviews: Review[];
  favorites: Product[];
}