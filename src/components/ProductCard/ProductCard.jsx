import React from 'react';

export const ProductCard = ({ brand, model, price, image, features }) => {
  return (
    <article className="relative bg-primary border border-secondary/50 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.25)] hover:border-accent/60 transition-all duration-700 max-w-sm flex flex-col group cursor-pointer">
      
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative bg-contrast/5 aspect-square p-8 flex justify-center items-center overflow-hidden">
        <div className="absolute w-3/4 h-3/4 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={`Reloj ${brand} ${model}`}
          className="relative z-10 object-contain h-full w-full drop-shadow-2xl group-hover:scale-110 group-hover:-rotate-2 transition-all duration-700 ease-out"
        />
      </div>

      <div className="relative z-10 p-6 flex flex-col gap-3 flex-grow bg-gradient-to-t from-primary via-primary to-transparent">
        
        <header className="transform group-hover:-translate-y-1 transition-transform duration-500">
          <h3 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            {brand}
          </h3>
          <h2 className="text-contrast text-xl font-serif mt-1">
            {model}
          </h2>
        </header>

        <p className="text-contrast/60 text-sm flex-grow font-light line-clamp-2 transform group-hover:-translate-y-1 transition-transform duration-500 delay-75">
          {features}
        </p>

        <div className="flex justify-between items-end mt-4 pt-4 border-t border-secondary/30 relative">
          <span className="text-accent text-lg font-medium transform group-hover:scale-105 origin-left transition-transform duration-500">
            USD {price?.toLocaleString()}
          </span>
          
          <button className="relative overflow-hidden bg-transparent border border-accent text-accent px-5 py-2 text-sm font-semibold rounded group/btn hover:text-primary transition-colors duration-500">
            <span className="relative z-10">Ver Pieza</span>
            <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          </button>
        </div>
      </div>
    </article>
  );
};
