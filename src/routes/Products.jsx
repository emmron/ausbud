import { h } from 'preact';
import { useState } from 'preact/hooks';

const INITIAL_PRODUCT_DATA = [
  {
    id: 1,
    details: {
      name: 'ANTG ROCKY',
      category: 'FLOWER',
      brand: 'AUSTRALIAN NATURAL THERAPEUTICS GROUP',
      composition: {
        thc: '30%',
        cbd: '<1%',
      },
      price: 215.00,
      weight: '10g',
      rating: 4.5,
      reviewCount: 124,
      image: null // Placeholder for image URL
    }
  },
  {
    id: 2,
    details: {
      name: 'CANNATREK T25 TOPAZ',
      category: 'FLOWER',
      brand: 'CANNATREK',
      composition: {
        thc: '25%',
        cbd: '<1%',
      },
      price: 195.00,
      weight: '10g',
      rating: 4.7,
      reviewCount: 236,
      image: null // Placeholder for image URL
    }
  }
];

const ProductsComponent = () => {
  const [productsList, setProductsList] = useState(INITIAL_PRODUCT_DATA);
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'ALL CATEGORIES',
    brand: 'ALL BRANDS',
    searchQuery: '',
    sortCriteria: ''
  });

  const { category, brand, searchQuery, sortCriteria } = selectedFilters;

  const filteredProducts = productsList.filter(({ details }) => {
    const { category: productCategory, brand: productBrand } = details;
    const matchesCategory = category === 'ALL CATEGORIES' || productCategory === category;
    const matchesBrand = brand === 'ALL BRANDS' || productBrand === brand;
    const matchesSearch = details.name.toLowerCase().includes(searchQuery.toLowerCase()) || productBrand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  }).sort((a, b) => {
    switch (sortCriteria) {
      case 'PRICE_LOW_HIGH':
        return a.details.price - b.details.price;
      case 'PRICE_HIGH_LOW':
        return b.details.price - a.details.price;
      case 'RATING_HIGH_LOW':
        return b.details.rating - a.details.rating;
      default:
        return 0;
    }
  });

  const handleFilterChange = (key, value) => {
    setSelectedFilters(prevFilters => ({ ...prevFilters, [key]: value }));
  };

  return (
    <div class="products-page">
      <div class="search-bar">
        <input
          type="text"
          placeholder="SEARCH PRODUCTS..."
          value={searchQuery}
          onInput={(e) => handleFilterChange('searchQuery', e.target.value)}
          class="search-input"
        />
      </div>
      <div class="filters">
        <select
          class="filter-select"
          value={category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <option>ALL CATEGORIES</option>
          <option>FLOWER</option>
          <option>OIL</option>
          <option>VAPE</option>
        </select>
        <select
          class="filter-select"
          value={brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
        >
          <option>ALL BRANDS</option>
          <option>AUSTRALIAN NATURAL THERAPEUTICS GROUP</option>
          <option>CANNATREK</option>
          <option>BEACON</option>
        </select>
        <select
          class="filter-select"
          value={sortCriteria}
          onChange={(e) => handleFilterChange('sortCriteria', e.target.value)}
        >
          <option value="">SORT BY</option>
          <option value="PRICE_LOW_HIGH">PRICE: LOW TO HIGH</option>
          <option value="PRICE_HIGH_LOW">PRICE: HIGH TO LOW</option>
          <option value="RATING_HIGH_LOW">RATING: HIGH TO LOW</option>
        </select>
      </div>
      <div class="products-grid">
        {filteredProducts.map(({ id, details }) => (
          <div key={id} class="product-card">
            <div class="product-image">
              <img src={details.image} alt={details.name} />
              <span class="category-tag">{details.category}</span>
            </div>
            <div class="product-info">
              <h3>{details.name}</h3>
              <p class="brand">{details.brand}</p>
              <div class="product-stats">
                <span>THC: {details.composition.thc}</span>
                <span>CBD: {details.composition.cbd}</span>
                <span>{details.weight}</span>
              </div>
              <div class="product-rating">
                <span class="stars">{'★'.repeat(Math.floor(details.rating))}</span>
                <span class="review-count">({details.reviewCount} REVIEWS)</span>
              </div>
              <div class="product-price">${details.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent; 