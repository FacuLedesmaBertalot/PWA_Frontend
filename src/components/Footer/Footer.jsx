import React from 'react';
import { Link } from 'react-router';

// A medida que vayamos creando las páginas, aplicamos los links de react-router
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-contrast font-serif border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Columna 1: Marca */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold tracking-[0.2em]">MAISON</span>
              <span className="text-accent text-xs tracking-[0.3em] font-semibold">HORLOGERIE</span>
            </div>
            <p className="text-contrast/70 text-sm leading-relaxed max-w-xs">
              Desde 1892, Maison Horlogerie ha fabricado piezas excepcionales que combinan la precisión suiza con la elegancia atemporal.
            </p>
            {/* Redes Sociales */}
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-accent hover:text-contrast transition-colors">
                <i className="fab fa-instagram text-xl"></i>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-accent hover:text-contrast transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="#" className="text-accent hover:text-contrast transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.121 1.12.345 2.304.531 3.536.531 6.62 0 11.988-5.367 11.988-11.987C24.012 5.367 18.645 0 12.017 0z"/></svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Colecciones */}
          <div>
            <h3 className="text-accent uppercase tracking-widest text-sm font-bold mb-6">Colecciones</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Relojes de Vestir</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Relojes Deportivos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Ediciones Limitadas</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Novedades</a></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-accent uppercase tracking-widest text-sm font-bold mb-6">Servicios</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Localizador de Boutiques</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cuidado del Reloj</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Garantía</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Reparaciones</a></li>
            </ul>
          </div>

          {/* Columna 4: Suscripción */}
          <div>
            <h3 className="text-accent uppercase tracking-widest text-sm font-bold mb-6">Newsletter</h3>
            <p className="text-sm font-light mb-4 text-contrast/70">
              Suscríbete para recibir actualizaciones sobre nuevas colecciones y eventos exclusivos.
            </p>
            <form className="flex border-b border-accent/50 pb-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-transparent border-none outline-none text-sm w-full focus:ring-0 placeholder:text-contrast/30"
              />
              <button type="submit" className="text-accent hover:text-contrast transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 pt-8 border-t border-accent/10 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-contrast/50">
          <p>© {currentYear} Tempo Deluxe. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;