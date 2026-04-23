import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[calc(100vh-6rem)] flex items-center">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-accent/10 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] border border-accent/5 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* 1. Columna de Texto (Izquierda) */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="text-accent text-xs md:text-sm tracking-[0.3em] font-semibold uppercase mb-4 animate-[pulse_3s_ease-in-out_infinite]">
              Artesanía Suiza Desde 1892
            </p>
            
            <h1 className="text-contrast font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
              El Arte de la <br className="hidden md:block" />
              <span className="text-accent font-normal italic"> Elegancia </span> 
              Atemporal
            </h1>
            
            <p className="text-contrast/80 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
              Descubre relojes excepcionales donde la herencia se encuentra con la innovación. Cada pieza cuenta una historia de precisión, creada para aquellos que aprecian los detalles más finos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-accent text-primary px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-contrast transition-colors duration-300 shadow-lg shadow-accent/20">
                Explorar Colección
              </button>
              <button className="border border-accent text-accent px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-accent hover:text-primary transition-all duration-300">
                Contactanos
              </button>
            </div>
          </div>

          {/* 2. Columna de Imagen (Derecha) */}
          <div className="relative flex justify-center lg:justify-end items-center h-full w-full group">
            
            <div className="relative flex items-center justify-center w-full max-w-sm lg:max-w-md">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] aspect-square flex items-center justify-center pointer-events-none z-0">
                
                <div className="absolute inset-0 rounded-full bg-radial-gradient from-accent/10 via-transparent to-transparent blur-2xl group-hover:from-accent/20 transition-all duration-1000"></div>
                <div className="absolute w-[85%] h-[85%] border border-accent/20 rounded-full scale-100 transition-transform duration-1000 group-hover:scale-105 group-hover:border-accent/40"></div>
                <div className="absolute w-[65%] h-[65%] border border-accent/10 rounded-full animate-[spin_30s_linear_infinite] opacity-50"></div>
                <div className="absolute w-[35%] h-[35%] border-t border-accent/30 rounded-full"></div>
                
              </div>

              <div className="relative z-10 w-full p-4 md:p-8 transition-transform duration-700 group-hover:translate-y-[-10px]">
                <img 
                  src="/watch-hero.png" 
                  alt="Reloj Tempo Deluxe Esmeralda"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(212,175,55,0.15)] group-hover:drop-shadow-[0_35px_45px_rgba(212,175,55,0.25)] transition-all duration-700"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;