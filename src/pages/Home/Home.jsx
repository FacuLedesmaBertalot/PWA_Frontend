import HeroSection from '../../components/Hero/heroSection';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import { useWatches } from '../../hooks/useWatches';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';

const Home = () => {

  const { watches, loading, searchQuery, loadMore } = useWatches();

  return (
    <>
    {/* Contenedor principal para que tome el color oscuro de tu paleta */}
    <div className="bg-primary min-h-screen">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
        
        <div className="w-full mb-8 border-b border-secondary/30 pb-4">
          <h2 className="text-3xl font-serif text-contrast">
            Catálogo <span className="text-sm font-sans text-accent tracking-widest uppercase ml-2">(Vista Temporal)</span>
          </h2>
        </div>

        <div className="w-full mb-10">
          <FilterBar disabled={loading}/>
        </div>
        
        <ProductGrid watches={watches} />

        {/* Todo esto podria ser un componente ? */}
        {watches.length > 0 && (
            <button 
                onClick={loadMore} 
                disabled={loading} 
                className="mt-12 px-8 py-3 bg-accent text-primary font-semibold rounded hover:bg-accent/80 disabled:opacity-50 transition-colors cursor-pointer"
            >
                {loading ? "Buscando piezas..." : "Descubrir más"}
            </button>
          )}
        {/* Hasta aca */}
      </div>
    </div>
  </>
  );
};

export default Home;