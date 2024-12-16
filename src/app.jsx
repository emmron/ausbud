import { h } from 'preact';
import { Router } from 'preact-router';
import { ErrorBoundary } from 'preact/compat';

// Routes
import Header from './components/Header';
import Home from './routes/Home';
import Products from './routes/Products';
import Reviews from './routes/Reviews';
import Profile from './routes/Profile';
import Learn from './routes/Learn';
import NotFound from './routes/NotFound';

export function App() {
  const handleRoute = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ErrorBoundary>
      <div class="flex flex-col min-h-screen bg-background">
        <div class="sticky top-0 z-50">
          <Header />
        </div>
        
        <main class="flex-grow pt-20">
          <Router onChange={handleRoute}>
            <Home path="/" />
            <Products path="/products" />
            <Reviews path="/reviews" />
            <Profile path="/profile/:id?" />
            <Learn path="/learn" />
            <NotFound default />
          </Router>
        </main>

        <footer class="mt-auto bg-white border-t border-gray-200">
          <div class="container mx-auto p-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div class="md:col-span-2">
                <div class="flex items-center space-x-2 mb-4">
                  <h3 class="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    Ausbud
                  </h3>
                  <span class="text-sm text-gray-500">Cannabis Reviews</span>
                </div>
                <p class="text-gray-600 max-w-md">
                  Your trusted source for medicinal cannabis reviews in Australia. Empowering patients through shared experiences and evidence-based information.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-bold text-primary mb-4">Navigation</h3>
                <nav class="space-y-3">
                  <a href="/products" class="block text-gray-600 hover:text-primary transition-colors">Products</a>
                  <a href="/reviews" class="block text-gray-600 hover:text-primary transition-colors">Reviews</a>
                  <a href="/learn" class="block text-gray-600 hover:text-primary transition-colors">Learn</a>
                  <a href="/profile" class="block text-gray-600 hover:text-primary transition-colors">Profile</a>
                </nav>
              </div>

              <div>
                <h3 class="text-lg font-bold text-primary mb-4">Legal</h3>
                <nav class="space-y-3">
                  <a href="/privacy" class="block text-gray-600 hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="/terms" class="block text-gray-600 hover:text-primary transition-colors">Terms of Service</a>
                  <a href="/disclaimer" class="block text-gray-600 hover:text-primary transition-colors">Medical Disclaimer</a>
                </nav>
              </div>
            </div>

            <div class="mt-12 pt-8 border-t border-gray-200">
              <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-gray-600">
                  &copy; {new Date().getFullYear()} Ausbud - Australian Cannabis Reviews
                </p>
                <p class="text-sm text-gray-500">
                  Made with 💚 for Australian patients
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}