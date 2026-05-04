import { Link } from 'react-router';

export const Details = () => {
  // --- MAQUETA ESTÁTICA ---
  // BORRAR ESTA SECCION CUANDO SE HAGA LA CONEXION LOGICA
  const watchMock = {
    id: "1",
    nombre: "Submariner Date",
    marca: "Rolex",
    precio: 10500,
    materiales: ["Acero Oystersteel", "Cerámica"],
    imagen: "https://picsum.photos/seed/rolex1/600/600",
    resistencia_agua: "300m",
    categoria: "Buceo",
    stock: 4,
    destacado: true,
    detalles_breve: "El reloj de buceo de referencia que trasciende las profundidades.",
    detalles: "El Rolex Submariner Date representa el estándar absoluto en la relojería de inmersión. Forjado en Acero Oystersteel con un bisel de cerámica irrayable, su estética inconfundible lo ha convertido en un símbolo de prestigio indiscutible, ideal para quienes buscan una presencia imponente y una funcionalidad superlativa."
  };
  // ----- FIN MAQUETA -----

  const formatPrecio = (num) => `$${num.toLocaleString()}`;

  const numeroWhatsApp = "5492996225551"; 
  const mensajeWhatsApp = encodeURIComponent(`Hola, me gustaría solicitar una cotización por la pieza ${watchMock.marca} ${watchMock.nombre}.`);
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;

  return (
    <div className="relative overflow-hidden bg-primary min-h-screen text-contrast pb-24 font-sans z-0">
      
      <div className="absolute top-[30%] -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        <nav className="text-xs uppercase tracking-widest text-contrast/60 mb-10 md:mb-16 flex items-center gap-3">
          <Link to="/" className="hover:text-accent transition-colors duration-300">Colección</Link>
          <span className="text-accent/40">/</span>
          <Link to={`/marca/${watchMock.marca.toLowerCase()}`} className="hover:text-accent transition-colors duration-300">{watchMock.marca}</Link>
          <span className="text-accent/40">/</span>
          <span className="text-accent">{watchMock.nombre}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="aspect-square bg-secondary/20 rounded-sm overflow-hidden relative shadow-lg transition-all duration-700 group-hover:shadow-[0_0_40px_-10px_var(--color-accent)]">
                <img
                  src={watchMock.imagen}
                  alt={`${watchMock.marca} ${watchMock.nombre}`}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {watchMock.destacado && (
                  <span className="absolute top-6 right-6 bg-accent text-primary text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-sm shadow-lg">
                    Destacado
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            
            <div className="border-b border-accent/20 pb-10 mb-10">
              <h2 className="text-sm text-accent uppercase tracking-[0.3em] mb-4 font-semibold flex items-center gap-4">
                <span className="w-6 h-[1px] bg-accent"></span>
                {watchMock.marca}
              </h2>
              <h1 className="text-4xl md:text-5xl font-serif text-contrast mb-6 leading-tight font-light tracking-wide">
                {watchMock.nombre}
              </h1>
              <p className="text-base text-contrast/70 font-light leading-relaxed mb-8">
                {watchMock.detalles_breve}
              </p>
              
              <div className="flex items-end justify-between gap-4">
                <p className="text-3xl md:text-4xl font-serif text-accent font-light tracking-tight">
                  {formatPrecio(watchMock.precio)}
                </p>
                <p className="text-xs text-contrast/50 uppercase tracking-widest pb-1 flex flex-col items-end">
                  Disponibilidad
                  <span className="text-contrast font-medium mt-1">{watchMock.stock} piezas</span>
                </p>
              </div>
            </div>

            <a 
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group w-full bg-accent text-primary py-5 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 mb-16 block text-center hover:bg-contrast hover:text-primary"
            >
              <span className="relative z-10">Cotizar vía WhatsApp</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-contrast/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0"></div>
            </a>

            <div className="mb-16 group">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6 flex items-center transition-all duration-500 group-hover:translate-x-2">
                <span className="w-8 h-[1px] bg-accent mr-4"></span>
                El Relato
              </h3>
              <p className="text-contrast/80 group-hover:text-contrast leading-loose font-light text-base md:text-lg">
                {watchMock.detalles}
              </p>
            </div>

            <div className="border-t border-accent/20 pt-10 group">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-8 flex items-center transition-all duration-500 group-hover:translate-x-2">
                <span className="w-8 h-[1px] bg-accent mr-4"></span>
                Especificaciones Técnicas
              </h3>
              
              <dl className="divide-y divide-accent/10 text-sm border-b border-accent/10">
                <SpecificationRow label="Categoría" value={watchMock.categoria} />
                <SpecificationRow label="Resistencia al Agua" value={watchMock.resistencia_agua} />
                <SpecificationRow label="Materiales Principales" value={watchMock.materiales.join(', ')} />
              </dl>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const SpecificationRow = ({ label, value }) => (
  <div className="py-5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6 hover:bg-accent/5 transition-colors duration-300 px-4 -mx-4 rounded-sm group">
    <dt className="text-contrast/60 font-medium sm:w-1/3 group-hover:text-contrast transition-colors duration-300">
      {label}
    </dt>
    <dd className="text-contrast/90 sm:text-right w-full sm:w-2/3 font-light leading-relaxed">
      {value}
    </dd>
  </div>
);