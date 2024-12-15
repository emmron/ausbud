import { h } from 'preact';
import { Link } from 'preact-router/match';

const Home = () => {
  return (
    <div class="min-h-screen">
      {/* Hero Section */}
      <section class="relative h-screen grid place-items-center bg-gradient-to-br from-primary to-primary-light text-white px-4">
        <div class="container mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Welcome to Ausbud</h1>
          <p class="text-xl md:text-2xl mb-12 text-gray-100">
            Your trusted source for medicinal cannabis reviews in Australia
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
            <Link
              href="/products"
              class="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:shadow-lg transition-all text-center"
            >
              Browse Products
            </Link>
            <Link
              href="/reviews"
              class="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all text-center"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-20 px-4 bg-gray-50">
        <div class="container mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose Ausbud?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="feature p-6 bg-white rounded-xl shadow-lg grid place-items-center text-center">
              <h3 class="text-xl font-bold mb-4">Browse Products</h3>
              <p class="text-gray-600">
                Explore available medicinal cannabis products
              </p>
            </div>
            <div class="feature p-6 bg-white rounded-xl shadow-lg grid place-items-center text-center">
              <h3 class="text-xl font-bold mb-4">Read Reviews</h3>
              <p class="text-gray-600">
                Learn from other patients' experiences
              </p>
            </div>
            <div class="feature p-6 bg-white rounded-xl shadow-lg grid place-items-center text-center">
              <h3 class="text-xl font-bold mb-4">Share Experience</h3>
              <p class="text-gray-600">
                Help others by sharing your own reviews
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;