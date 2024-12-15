import * as React from "react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  thc: string;
  cbd: string;
  price: string;
  weight: string;
  rating: number;
  reviewCount: number;
}

const ProductCard: React.FC<{product: Product}> = ({product}) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{product.brand}</p>
        </div>
        <span className="text-lg font-bold text-primary whitespace-nowrap">${product.price}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium">
          THC: {product.thc}
        </span>
        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-sm font-medium">
          CBD: {product.cbd}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
          {product.weight}
        </span>
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <span className="text-accent">★</span>
        <span className="font-medium">{product.rating}</span>
        <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
      </div>
    </div>
  );
};

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'ANTG Rocky',
    category: 'Flower', 
    brand: 'Australian Natural Therapeutics Group',
    thc: '30%',
    cbd: '<1%',
    price: '215',
    weight: '10g',
    rating: 4.5,
    reviewCount: 124
  },
  {
    id: 2,
    name: 'Cannatrek T25 Topaz',
    category: 'Flower',
    brand: 'Cannatrek', 
    thc: '25%',
    cbd: '<1%',
    price: '195',
    weight: '10g',
    rating: 4.7,
    reviewCount: 236
  },
  {
    id: 3,
    name: 'Kind Medical Stella',
    category: 'Flower',
    brand: 'Kind Medical',
    thc: '18%',
    cbd: '<1%',
    price: '165',
    weight: '10g',
    rating: 4.3,
    reviewCount: 89
  },
  {
    id: 4,
    name: 'Beacon Medical Pink Kush',
    category: 'Flower',
    brand: 'Beacon Medical',
    thc: '25%',
    cbd: '<1%',
    price: '175',
    weight: '10g',
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: 5,
    name: 'Medcan CC01',
    category: 'Flower',
    brand: 'Medcan',
    thc: '23%',
    cbd: '<1%',
    price: '185',
    weight: '7g',
    rating: 4.4,
    reviewCount: 203
  },
  {
    id: 6,
    name: 'Sativite Kannbi',
    category: 'Flower',
    brand: 'Sativite',
    thc: '25%',
    cbd: '<1%',
    price: '195',
    weight: '7g',
    rating: 4.8,
    reviewCount: 167
  },
  {
    id: 7,
    name: 'Little Green Pharma Desert Flame',
    category: 'Flower',
    brand: 'Little Green Pharma',
    thc: '22%',
    cbd: '<1%',
    price: '170',
    weight: '10g',
    rating: 4.5,
    reviewCount: 142
  },
  {
    id: 8,
    name: 'Little Green Pharma Topaz',
    category: 'Flower',
    brand: 'Little Green Pharma',
    thc: '25%',
    cbd: '<1%',
    price: '195',
    weight: '10g',
    rating: 4.6,
    reviewCount: 178
  },
  {
    id: 9,
    name: 'Tasmanian Botanics T25 Amethyst',
    category: 'Flower',
    brand: 'Tasmanian Botanics',
    thc: '25%',
    cbd: '<1%',
    price: '190',
    weight: '10g',
    rating: 4.5,
    reviewCount: 95
  },
  {
    id: 10,
    name: 'Tasmanian Botanics Emerald',
    category: 'Flower',
    brand: 'Tasmanian Botanics',
    thc: '22%',
    cbd: '<1%',
    price: '180',
    weight: '10g',
    rating: 4.4,
    reviewCount: 82
  },
  {
    id: 11,
    name: 'ANTG Solace',
    category: 'Flower',
    brand: 'Australian Natural Therapeutics Group',
    thc: '22%',
    cbd: '<1%',
    price: '195',
    weight: '10g',
    rating: 4.3,
    reviewCount: 76
  },
  {
    id: 12,
    name: 'Cannatrek T20 Daylesford',
    category: 'Flower',
    brand: 'Cannatrek',
    thc: '20%',
    cbd: '<1%',
    price: '175',
    weight: '10g',
    rating: 4.4,
    reviewCount: 112
  },
  {
    id: 13,
    name: 'Sativite Eucla',
    category: 'Flower',
    brand: 'Sativite',
    thc: '28%',
    cbd: '<1%',
    price: '200',
    weight: '7g',
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: 14,
    name: 'ANTG Mariposa',
    category: 'Flower',
    brand: 'Australian Natural Therapeutics Group',
    thc: '14%',
    cbd: '<1%',
    price: '165',
    weight: '10g',
    rating: 4.2,
    reviewCount: 65
  },
  {
    id: 15,
    name: 'Tasmanian Botanics Royale',
    category: 'Flower',
    brand: 'Tasmanian Botanics',
    thc: '26%',
    cbd: '<1%',
    price: '195',
    weight: '10g',
    rating: 4.6,
    reviewCount: 71
  },
  {
    id: 16,
    name: 'Cannatrek T24 Narooma',
    category: 'Flower',
    brand: 'Cannatrek',
    thc: '24%',
    cbd: '<1%',
    price: '185',
    weight: '10g',
    rating: 4.5,
    reviewCount: 92
  },
  {
    id: 17,
    name: 'Kind Medical Azure',
    category: 'Flower',
    brand: 'Kind Medical',
    thc: '20%',
    cbd: '<1%',
    price: '170',
    weight: '10g',
    rating: 4.3,
    reviewCount: 64
  },
  {
    id: 18,
    name: 'Medcan Ultra01',
    category: 'Flower',
    brand: 'Medcan',
    thc: '28%',
    cbd: '<1%',
    price: '195',
    weight: '7g',
    rating: 4.6,
    reviewCount: 108
  },
  {
    id: 19,
    name: 'Sativite Jerrawah',
    category: 'Flower',
    brand: 'Sativite',
    thc: '26%',
    cbd: '<1%',
    price: '195',
    weight: '7g',
    rating: 4.7,
    reviewCount: 86
  },
  {
    id: 20,
    name: 'ANTG Eve',
    category: 'Flower',
    brand: 'Australian Natural Therapeutics Group',
    thc: '<1%',
    cbd: '14%',
    price: '155',
    weight: '10g',
    rating: 4.4,
    reviewCount: 58
  },
  {
    id: 21,
    name: 'Cannatrek T18 Jasmin',
    category: 'Flower', 
    brand: 'Cannatrek',
    thc: '18%',
    cbd: '<1%',
    price: '165',
    weight: '10g',
    rating: 4.2,
    reviewCount: 73
  },
  {
    id: 22,
    name: 'Kind Medical Iris',
    category: 'Flower',
    brand: 'Kind Medical',
    thc: '22%',
    cbd: '<1%',
    price: '175',
    weight: '10g',
    rating: 4.4,
    reviewCount: 67
  },
  {
    id: 23,
    name: 'Medcan SC01',
    category: 'Flower',
    brand: 'Medcan',
    thc: '21%',
    cbd: '<1%',
    price: '180',
    weight: '7g',
    rating: 4.3,
    reviewCount: 94
  },
  {
    id: 24,
    name: 'Sativite Nula Nula',
    category: 'Flower',
    brand: 'Sativite',
    thc: '27%',
    cbd: '<1%',
    price: '200',
    weight: '7g',
    rating: 4.8,
    reviewCount: 112
  },
  {
    id: 25,
    name: 'Tasmanian Botanics Midlands',
    category: 'Flower',
    brand: 'Tasmanian Botanics',
    thc: '24%',
    cbd: '<1%',
    price: '185',
    weight: '10g',
    rating: 4.5,
    reviewCount: 83
  },
  {
    id: 26,
    name: 'Beacon Medical GSC',
    category: 'Flower',
    brand: 'Beacon Medical',
    thc: '23%',
    cbd: '<1%',
    price: '175',
    weight: '10g',
    rating: 4.4,
    reviewCount: 89
  },
  {
    id: 27,
    name: 'ANTG Solace',
    category: 'Flower',
    brand: 'Australian Natural Therapeutics Group',
    thc: '22%',
    cbd: '<1%',
    price: '180',
    weight: '10g',
    rating: 4.5,
    reviewCount: 76
  },
  {
    id: 28,
    name: 'Cannatrek T24 Narooma',
    category: 'Flower',
    brand: 'Cannatrek',
    thc: '24%',
    cbd: '<1%',
    price: '190',
    weight: '10g',
    rating: 4.6,
    reviewCount: 92
  }
];

export default function Products() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container py-12 fade-in bg-gradient-to-b from-emerald-50 to-white">
      <div className="text-center mb-16 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
          Discover Natural Relief
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Explore Australia's finest medical cannabis products, carefully curated for your wellbeing
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-primary to-emerald-500 text-white shadow-lg hover:shadow-emerald-200' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 inline-block shadow-sm">
          ✨ Showing {filteredProducts.length} premium products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 relative">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/5 via-transparent to-emerald-100/5 blur-3xl rounded-full"></div>
        {filteredProducts.map(product => (
          <div key={product.id} className="transform hover:scale-[1.02] transition-all duration-300">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}