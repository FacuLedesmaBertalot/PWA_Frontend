import HeroSection from '../../components/Hero/heroSection';
import FilterBar from '../../components/FilterBar/FilterBar';
import { useWatches } from '../../hooks/useWatches';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { InfiniteScrollTrigger } from '../../components/InfiniteScrollTrigger/InfiniteScrollTrigger';

const Home = () => {
  const { watches, loading, loadMore } = useWatches();

  return (
    <div className="bg-primary min-h-screen">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
        
        <div className="w-full mb-8 border-b border-secondary/30 pb-4">
          <h2 className="text-3xl font-serif text-contrast">
            Catálogo <span className="text-sm font-sans text-accent tracking-widest uppercase ml-2">(Exploración Infinita)</span>
          </h2>
        </div>

        <div className="w-full mb-10">
          <FilterBar disabled={loading}/>
        </div>
        
        <ProductGrid watches={watches} />


        {watches.length > 0 && (
          <InfiniteScrollTrigger 
            onTrigger={loadMore} 
            loading={loading} 
          />
        )}
      </div>
    </div>
  );
};

export default Home;