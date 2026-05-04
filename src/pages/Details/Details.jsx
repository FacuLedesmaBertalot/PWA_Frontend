import { useEffect, useState } from 'react';
import { Link, replace, useNavigate, useParams } from 'react-router';
import { getItemById }  from '../../services/itemsService';

export const Details = () => {
  const { id } = useParams ();
  const navigate = useNavigate ();

  const [error, setError] = useState (null);
  const [watch, setWatch] = useState (null);
  const [loading, setLoading] = useState (true);

  useEffect (() => {
    const fetchWatch = async () => {
      setLoading (true);
      const { data, error: fetchError } = await getItemById (id);
      if (data && !fetchError) {
        setWatch (data);
        setLoading (false);
      }
      else {
        navigate ('/404', { replace: true });
      }
    }

    fetchWatch ();
  }, [id]);

  useEffect (() => {
    window.scrollTo (0, 0);
  }, []);

  const formatPrecio = num => `$${num.toLocaleString ()}`;

  const numeroWhatsApp = '5492996225551';
  const mensajeWhatsApp = watch ? 
    encodeURIComponent (`Hola, me gustaría solicitar una cotización por la pieza ${watch.nombre}.`) :
    '';
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;

  if (loading) {
    return (
      <div className="bg-primary min-h-screen flex items-center justify-center">
        <span className="text-accent font-sans tracking-widest uppercase animate-pulse">
          Cargando pieza...
        </span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-primary min-h-screen text-contrast pb-24 font-sans z-0">
 
      <div className="absolute top-[30%] -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
 
        <nav className="text-xs uppercase tracking-widest text-contrast/60 mb-10 md:mb-16 flex items-center gap-3">
          <Link to="/" className="hover:text-accent transition-colors duration-300">Colección</Link>
          <span className="text-accent/40">/</span>
          <Link to={`/marca/${watch.marca.toLowerCase()}`} className="hover:text-accent transition-colors duration-300">{watch.marca}</Link>
          <span className="text-accent/40">/</span>
          <span className="text-accent">{watch.nombre}</span>
        </nav>
 
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
 
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="aspect-square bg-secondary/20 rounded-sm overflow-hidden relative shadow-lg transition-all duration-700 group-hover:shadow-[0_0_40px_-10px_var(--color-accent)]">
                <img
                  src={watch.imagen}
                  alt={`${watch.marca} ${watch.nombre}`}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
 
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
 
                {watch.destacado && (
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
                {watch.marca}
              </h2>
              <h1 className="text-4xl md:text-5xl font-serif text-contrast mb-6 leading-tight font-light tracking-wide">
                {watch.nombre}
              </h1>
              <p className="text-base text-contrast/70 font-light leading-relaxed mb-8">
                {watch.detalles_breve}
              </p>
 
              <div className="flex items-end justify-between gap-4">
                <p className="text-3xl md:text-4xl font-serif text-accent font-light tracking-tight">
                  {formatPrecio(watch.precio)}
                </p>
                <p className="text-xs text-contrast/50 uppercase tracking-widest pb-1 flex flex-col items-end">
                  Disponibilidad
                  <span className="text-contrast font-medium mt-1">{watch.stock} piezas</span>
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
                {watch.detalles}
              </p>
            </div>
 
            <div className="border-t border-accent/20 pt-10 group">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-8 flex items-center transition-all duration-500 group-hover:translate-x-2">
                <span className="w-8 h-[1px] bg-accent mr-4"></span>
                Especificaciones Técnicas
              </h3>
 
              <dl className="divide-y divide-accent/10 text-sm border-b border-accent/10">
                <SpecificationRow label="Categoría" value={watch.categoria} />
                <SpecificationRow label="Resistencia al Agua" value={watch.resistencia_agua} />
                <SpecificationRow label="Materiales Principales" value={watch.materiales?.join(', ')} />
              </dl>
            </div>
 
          </div>
        </div>
      </div>
    </div>
  );
}

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