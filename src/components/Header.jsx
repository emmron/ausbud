import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState, useEffect } from 'preact/hooks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className="logo">
            Ausbud
            <span className="hidden sm:inline-block ml-2 text-sm font-light tracking-wider text-gray-600">
              Australian Cannabis Reviews
            </span>
          </Link>

          <div className="nav-links">
            {['Home', 'Products', 'Reviews', 'Learn'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="nav-link"
                activeClassName="active"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="auth-buttons">
            <Link 
              href="/login" 
              className="auth-button primary"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="auth-button secondary"
            >
              Register
            </Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>

          {isMenuOpen && (
            <div className="nav-links mobile fade-in">
              {['Home', 'Products', 'Reviews', 'Learn'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="auth-buttons mobile">
                <Link 
                  href="/login"
                  className="auth-button primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  href="/register"
                  className="auth-button secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;