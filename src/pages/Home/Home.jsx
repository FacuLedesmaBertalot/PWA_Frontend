import { useState, useEffect, useMemo } from 'react';
import { getItems } from '../../services/itemsService';
import HeroSection from '../../components/Hero/heroSection';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import FilterBar from '../../components/FilterBar/FilterBar';

const Home = () => {
  const [watches, setWatches] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState ({
    search: '',
    category: '',
    brand: ''
  });

  const fetchWatches = async () => {
    setLoading(true);
    const { data } = await getItems(pages, 5);

    if (data && data.length > 0) {
      if (pages === 1) {
        setWatches(data);
      } else {
        setWatches((prevWatches) => [...prevWatches, ...data]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWatches();
  }, [pages]);

  console.log (watches)

  const loadMore = () => setPages((prevPages) => prevPages + 1);

  const categories = useMemo (() => [...new Set (watches.map ((w) => w.categoria).filter (Boolean))], [watches]);

  const brands = useMemo (() => [...new Set (watches.map ((w) => w.marca).filter (Boolean))], [watches]);

  const filteredWatches = useMemo (() => {
    return watches.filter ((w) => {
      const matchesSearch    = !filters.search    || w.nombre?.toLowerCase ().includes (filters.search.toLowerCase ());
      const matchesCategory  = !filters.category  || w.categoria === filters.category;
      const matchesBrand     = !filters.brand     || w.marca === filters.brand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [watches, filters]);

  return (
    <>
    {/* Contenedor principal para que tome el color oscuro de tu paleta */}
    <div className="bg-primary min-h-screen">
      <HeroSection />
      
      {/* ============================================================================
          ⚠️ INICIO CÓDIGO TEMPORAL - MOCKUP DE GRILLA ⚠️
          Contexto: Esta sección fue armada exclusivamente para poder visualizar y 
          testear el componente <ProductCard />. 
          Acción: Quien tome el ticket de "ProductList" o similar debe reemplazar 
          esta estructura por el componente oficial correspondiente.
          ============================================================================ */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
        
        <div className="w-full mb-8 border-b border-secondary/30 pb-4">
          <h2 className="text-3xl font-serif text-contrast">
            Catálogo <span className="text-sm font-sans text-accent tracking-widest uppercase ml-2">(Vista Temporal)</span>
          </h2>
        </div>

        <div className="w-full mb-10">
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            brands={brands}
            disabled={loading}
          />
        </div>
        
        {/* Grilla temporal responsive, centrada y con buen espaciado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full justify-items-center">
          {filteredWatches.map((r) => (
            // Product Card renderizado
            <ProductCard 
              key={r.id}
              brand={r.marca} 
              model={r.nombre} 
              price={r.precio || 0} 
              image={r.imagen}      
              features={r.descripcion || "Edición Limitada"} 
            />
          ))}
        </div>

        {filteredWatches.length === 0 && !loading && (
          <p className="text-contrast/30 text-sm tracking-widest uppercase mt-16">
            No se encontraron piezas con esos criterios.
          </p>
        )}

        <button 
            onClick={loadMore} 
            disabled={loading} 
            className="mt-12 px-6 py-2 border border-secondary text-contrast/70 rounded hover:border-accent hover:text-accent transition-colors disabled:opacity-50 cursor-pointer"
        >
            {loading ? "Cargando..." : "Cargar más (Temporal)"}
        </button>
      </div>
      {/* ============================================================================
          ⚠️ FIN CÓDIGO TEMPORAL ⚠️
          ============================================================================ */}
    </div>
  </>
  );
};

export default Home;