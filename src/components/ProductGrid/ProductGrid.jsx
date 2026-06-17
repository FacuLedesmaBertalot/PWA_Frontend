import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ({ watches, loading }) => {
  const { t } = useTranslation();

  if (!watches || watches.length === 0) {
    return (
      <div className="flex justify-center items-center py-20 w-full">
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 rounded-full border-4 border-accent/30 border-t-accent animate-spin" />
            <p className="text-contrast/60 font-light text-lg tracking-wide">
              {t('productGrid.loading')}
            </p>
          </div>
        ) : (
          <p className="text-contrast/60 font-light text-lg tracking-wide">
            {t('productGrid.emptyMessage')}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full justify-items-center">
      {watches.map((watch) => (
        <Link
          key={watch.id}
          to={`/items/${watch.id}`}
          className="w-full flex justify-center outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
        >
          <ProductCard
            watch={watch}
            brand={watch.marca}
            model={watch.nombre}
            price={watch.precio || 0}
            image={watch.imagen}
            features={watch.descripcion || t('productGrid.defaultFeature')}
          />
        </Link>
      ))}
    </div>
  );
};