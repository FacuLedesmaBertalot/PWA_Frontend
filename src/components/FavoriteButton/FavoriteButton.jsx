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
      className={`group flex items-center justify-center transition-transform duration-500 active:scale-75 ${className}`}
      aria-label={isFav ? "Quitar de la colección" : "Agregar a la colección"}
      title={isFav ? "Quitar de la colección" : "Agregar a la colección"}
    >
      <div className="relative flex items-center justify-center">
        

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          /* Transición con efecto "resorte" sutil (cubic-bezier) para sensación premium */
          className={`relative z-10 w-6 h-6 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isFav 
              ? 'fill-accent stroke-accent scale-110 rotate-[72deg] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]' 
              : 'fill-transparent stroke-contrast/50 group-hover:stroke-accent group-hover:scale-110 group-hover:rotate-[15deg]'
          }`}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.2" 
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" 
          />
        </svg>
      </div>
    </button>
  );
};