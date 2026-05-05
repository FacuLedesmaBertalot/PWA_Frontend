import { Link } from 'react-router';

const Footer = () => {
  // Función para simular la suscripción al newsletter sin recargar la página
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Como no hay backend, simplemente podríamos limpiar el input o mostrar un mensaje
    const emailInput = e.target.elements.email;
    if (emailInput.value) {
      emailInput.value = '';
      // Aquí el próximo dev puede agregar un toast de "Suscripción exitosa"
    }
  };

  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-accent/20 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Grid de 4 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Columna 1: Marca y Manifiesto */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-serif text-accent tracking-widest uppercase mb-6">
              Tempo Deluxe
            </h2>
            <p className="text-contrast/60 text-sm font-light leading-relaxed mb-6">
              El tiempo, a su medida. Curaduría de piezas de distinción y alta relojería para coleccionistas exigentes.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Explorar
            </h3>
            <ul className="space-y-4 text-sm font-light text-contrast/70">
              <li>
                <Link to="/" className="hover:text-accent transition-colors duration-300 relative group inline-block">
                  Catálogo
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-accent transition-colors duration-300 relative group inline-block">
                  Colección Privada
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Boutique (Toque de realismo) */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Boutique
            </h3>
            <address className="not-italic text-sm font-light text-contrast/70 space-y-2">
              <p>Av. Argentina 1200</p>
              <p>Neuquén, Neuquén</p>
              <p>Argentina</p>
            </address>
            
            {/* Redes Sociales */}
            <div className="flex gap-5 mt-6">
              {/* Instagram */}
              <a href="https://www.instagram.com/benjamindelafuente_?igsh=MXc2bzIwZnM4eWZtNQ==" className="text-contrast/50 hover:text-accent transition-colors duration-300 hover:-translate-y-1 transform">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              El Club Tempo
            </h3>
            <p className="text-contrast/60 text-sm font-light mb-4">
              Reciba invitaciones a ventas privadas y novedades sobre piezas exclusivas.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2 group">
              <input 
                type="email" 
                name="email"
                placeholder="Su dirección de correo" 
                required
                className="w-full bg-transparent border-b border-contrast/20 py-3 text-sm text-contrast font-light outline-none placeholder:text-contrast/30 focus:border-accent transition-colors duration-300"
              />
              <button 
                type="submit"
                aria-label="Suscribirse"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-contrast/40 hover:text-accent transition-colors duration-300 p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
              {/* Brillo inferior animado al enfocar el input */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 ease-out group-focus-within:w-full shadow-[0_0_8px_var(--color-accent)]"></div>
            </form>
          </div>

        </div>

        {/* BOTTOM SECTION: Legales */}
{/* BOTTOM SECTION: Legales y Créditos */}
        <div className="border-t border-accent/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Izquierda: Copyright */}
          <p className="text-xs text-contrast/50 font-light md:w-1/3">
            © 2026 Tempo Deluxe. Todos los derechos reservados.
          </p>

          {/* Centro: Desarrolladores */}
          <p className="text-xs text-contrast/50 font-light md:w-1/3 md:text-center">
            Desarrollado por:{' '}
            <a href="https://github.com/FacuLedesmaBertalot" target="_blank" rel="noopener noreferrer" className="text-contrast/70 hover:text-accent transition-colors duration-300">Facundo Ledezma</a>,{' '}
            <a href="https://github.com/Alejo4758" target="_blank" rel="noopener noreferrer" className="text-contrast/70 hover:text-accent transition-colors duration-300">Alejo Lopez</a> y{' '}
            <a href="https://github.com/Ibenjamindlf" target="_blank" rel="noopener noreferrer" className="text-contrast/70 hover:text-accent transition-colors duration-300">Benjamin de la Fuente</a>
          </p>

          {/* Derecha: Legales */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs text-contrast/50 font-light md:w-1/3">
            <a href="https://actecil.eu/wp-content/uploads/2024/07/Portadas-web-Politica-de-Privacidad.png" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">Política de Privacidad</a>
            <a href="https://images7.memedroid.com/images/UPLOADED85/542709c48cd62.jpeg" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">Términos de Servicio</a>
            <a href="https://recetasdecocina.elmundo.es/wp-content/uploads/2015/09/cookies-receta.jpg" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">Cookies</a>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;