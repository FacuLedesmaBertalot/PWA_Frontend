import { Link } from 'react-router';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { useFavorites } from '../../hooks/useFavorites';
import { useTranslation } from 'react-i18next';


export const Favorites = () => {

  const { favorites } = useFavorites();
  const { t } = useTranslation();

  const hasFavorites = favorites.length > 0;

  return (
    <div className="bg-primary min-h-screen text-contrast pb-24 font-sans relative z-0">
      
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-secondary/20 to-transparent -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="text-center mb-16 md:mb-24 animate-[fadeIn_0.8s_ease-out]">
          <h2 className="text-xs text-accent uppercase tracking-[0.4em] mb-4 font-semibold">
            {t('favorites.subtitle')}
          </h2>
          <h1 className="text-4xl md:text-5xl font-serif text-contrast leading-tight font-extralight tracking-wide mb-6">
            {t('favorites.title')}
          </h1>
          <div className="w-12 h-[1px] bg-accent/50 mx-auto"></div>
        </div>

        {hasFavorites ? (
          
          <div className="animate-[fadeIn_1s_ease-out]">
            <ProductGrid watches={favorites} />
          </div>

        ) : (

          <div className="flex flex-col items-center justify-center py-12 md:py-24 text-center animate-[fadeIn_1s_ease-out]">
            
            <div className="w-20 h-20 mb-10 text-accent/30">
              <svg fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
              </svg>
            </div>

            <h3 className="text-2xl font-serif text-contrast mb-4 tracking-wide font-light">
              {t('favorites.empty_title')}
            </h3>
            
            <p className="text-contrast/60 font-light max-w-md mx-auto mb-12 leading-loose text-sm md:text-base">
              {t('favorites.empty_description')}
            </p>

            <Link 
              to="/" 
              className="relative overflow-hidden group inline-flex bg-transparent border border-accent text-accent py-4 px-10 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 ease-in-out hover:bg-accent hover:text-primary"
            >
              <span className="relative z-10 transition-colors duration-500">
                {t('favorites.cta')}
              </span>
            </Link>
          </div>
          
        )}
      </div>
    </div>
  );
};