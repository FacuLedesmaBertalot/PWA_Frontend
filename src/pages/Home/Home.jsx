import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/Hero/HeroSection';
import ProductSection from '../../components/ProductSection/ProductSection';

const Home = () => {
  const { t } = useTranslation ();

  return (
    <div className="bg-primary min-h-screen">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
        
        <div className="w-full mb-8 border-b border-secondary/30 pb-4">
          <h2 className="text-3xl font-serif text-contrast">
            {t("home.catalog")} <span className="text-sm font-sans text-accent tracking-widest uppercase ml-2"></span>
          </h2>
        </div>

        <ProductSection />

      </div>
    </div>
  );
};

export default Home;