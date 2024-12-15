import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';


interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="logo">
            Ausbud
            <span className="hidden sm:inline-block ml-2 text-sm font-light tracking-wider text-gray-600">
              Australian Cannabis Reviews
            </span>
          </Link>

          <div className="nav-links">
            {['Home', 'Products', 'Reviews', 'Learn'].map((item: string) => (
              <NavLink 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          <div className="auth-buttons">
            <Link 
              to="/login" 
              className="auth-button primary"
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
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
              {['Home', 'Products', 'Reviews', 'Learn'].map((item: string) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
              <div className="auth-buttons mobile">
                <Link 
                  to="/login"
                  className="auth-button primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/register"
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