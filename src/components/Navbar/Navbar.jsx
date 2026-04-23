import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Funciones para manejar los clicks estáticos 
  const handleNavigation = (e) => {
    e.preventDefault();
    // A futuro se implementar el routing (ej. useNavigate de react-router-dom)
  };

  return (
    <nav className="bg-primary border-b border-accent/30 font-serif shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* 1. Logo / Título a la izquierda */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a 
              href="/" 
              onClick={handleNavigation}
              className="flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
            >
              <span className="text-contrast text-3xl md:text-4xl font-bold tracking-[0.25em] drop-shadow-md">
                TEMPO
              </span>
              <span className="text-accent text-xs md:text-sm font-semibold tracking-[0.35em] mt-1">
                DELUXE
              </span>
            </a>
          </div>

          {/* 2. Links de navegación en el centro (Desktop) */}
          <div className="hidden md:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <a 
              href="#home" 
              onClick={handleNavigation}
              className="text-accent hover:text-contrast transition-colors duration-300 uppercase tracking-widest text-sm font-medium border-b border-transparent hover:border-contrast pb-1"
            >
              Home
            </a>
            <a 
              href="#relojes" 
              onClick={handleNavigation}
              className="text-accent hover:text-contrast transition-colors duration-300 uppercase tracking-widest text-sm font-medium border-b border-transparent hover:border-contrast pb-1"
            >
              Relojes
            </a>
          </div>

          {/* 3. Botón de Login/Register a la derecha (Desktop) */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={handleNavigation}
              className="text-accent hover:text-primary hover:bg-accent transition-all duration-300 p-2.5 rounded-full border border-accent/50 focus:outline-none"
              title="Login / Register"
            >
              {/* Ícono de Usuario SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          {/* 6. Botón Menú Hamburguesa (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-accent hover:text-contrast focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                // Ícono de Cerrar (X)
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Ícono de Hamburguesa
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
          <a 
            href="#home" 
            onClick={handleNavigation}
            className="text-accent hover:text-contrast block px-3 py-2 text-lg font-medium tracking-widest uppercase w-full text-center"
          >
            Home
          </a>
          <a 
            href="#relojes" 
            onClick={handleNavigation}
            className="text-accent hover:text-contrast block px-3 py-2 text-lg font-medium tracking-widest uppercase w-full text-center"
          >
            Relojes
          </a>
          <hr className="w-1/2 border-accent/30" />
          <button 
            onClick={handleNavigation}
            className="text-primary bg-accent hover:bg-contrast transition-colors duration-300 px-6 py-2 rounded-sm text-sm font-bold tracking-widest uppercase w-full max-w-xs flex justify-center items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Ingresar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;