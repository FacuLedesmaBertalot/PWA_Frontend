import { useFavorites } from '../../hooks/useFavorites';

export const FavoriteButton = ({ watch, className = '' }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const isFav = isFavorite(watch.id);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    toggleFavorite(watch);
  };

  return (
    <button
      onClick={handleClick}
      className={`group flex items-center justify-center transition-transform duration-300 active:scale-90 ${className}`}
      aria-label={isFav ? "Quitar de la colección" : "Agregar a la colección"}
      title={isFav ? "Quitar de la colección" : "Agregar a la colección"}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={`w-6 h-6 transition-all duration-500 ease-out ${
          isFav 
            ? 'fill-accent stroke-accent scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]' 
            : 'fill-transparent stroke-contrast/40 group-hover:stroke-accent group-hover:scale-110'
        }`}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="1.5" 
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
        />
      </svg>
    </button>
  );
};