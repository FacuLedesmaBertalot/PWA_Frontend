import React, { useState } from 'react';
import { Link } from 'react-router';

const ArgentinaFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="h-4 w-6 rounded-sm shadow-sm">
    <rect width="900" height="600" fill="#74ACDF"/>
    <rect width="900" height="200" y="200" fill="#fff"/>
    <circle cx="450" cy="300" r="60" fill="#F6B40E"/>
    <circle cx="450" cy="300" r="45" fill="#F6B40E" stroke="#85340A" strokeWidth="3"/>
  </svg>
);

const USAFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="h-4 w-6 rounded-sm shadow-sm">
    <rect width="900" height="600" fill="#B22234"/>
    <rect width="900" height="46.15" y="46.15" fill="#fff"/>
    <rect width="900" height="46.15" y="138.46" fill="#fff"/>
    <rect width="900" height="46.15" y="230.77" fill="#fff"/>
    <rect width="900" height="46.15" y="323.08" fill="#fff"/>
    <rect width="900" height="46.15" y="415.38" fill="#fff"/>
    <rect width="900" height="46.15" y="507.69" fill="#fff"/>
    <rect width="360" height="323.08" fill="#3C3B6E"/>
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('es');

  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  return (
    <nav className="bg-primary border-b border-accent/30 font-serif shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link
              to="/"
              className="flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
            >
              <span className="text-contrast text-3xl md:text-4xl font-bold tracking-[0.25em] drop-shadow-md">
                TEMPO
              </span>
              <span className="text-accent text-xs md:text-sm font-semibold tracking-[0.35em] mt-1">
                DELUXE
              </span>
            </Link>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-accent hover:text-contrast transition-colors duration-300 uppercase tracking-widest text-sm font-medium border-b border-transparent hover:border-contrast pb-1"
            >
              Home
            </Link>
            <Link
              to="/favoritos"
              className="text-accent hover:text-contrast transition-colors duration-300 uppercase tracking-widest text-sm font-medium border-b border-transparent hover:border-contrast pb-1"
            >
              Favoritos
            </Link>
          </div>

          {/* Selector de idioma Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLang}
              className="cursor-pointer flex items-center gap-2 border border-accent/30 hover:border-accent/70 bg-transparent hover:bg-accent/10 transition-all duration-300 px-3 py-2 rounded-sm group"
            >
              {lang === 'es' ? <ArgentinaFlag /> : <USAFlag />}
              <span className="text-accent text-xs tracking-widest uppercase font-semibold group-hover:text-contrast transition-colors duration-300">
                {lang === 'es' ? 'ES' : 'EN'}
              </span>
            </button>
          </div>

          {/* Hamburguesa Mobile */}
          <div className="md:hidden flex items-center gap-3">
            {/* Selector idioma mobile */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 border border-accent/30 hover:border-accent/70 bg-transparent px-2 py-1.5 rounded-sm"
            >
              {lang === 'es' ? <ArgentinaFlag /> : <USAFlag />}
              <span className="text-accent text-xs tracking-widest uppercase font-semibold">
                {lang === 'es' ? 'ES' : 'EN'}
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-accent hover:text-contrast focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      <div
        className={`md:hidden absolute w-full bg-secondary border-b border-accent/30 transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-accent hover:text-contrast block px-3 py-2 text-lg font-medium tracking-widest uppercase w-full text-center"
          >
            Home
          </Link>
          <Link
            to="/favoritos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-accent hover:text-contrast block px-3 py-2 text-lg font-medium tracking-widest uppercase w-full text-center"
          >
            Favoritos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;