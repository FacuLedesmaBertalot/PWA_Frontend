import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

const FilterBar = ({ categories = [], brands = [], disabled = false }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [localSearch, setLocalSearch] = useState(searchParams.get('items') || '');

  useEffect(() => {
    setLocalSearch(searchParams.get('items') || '');
  }, [searchParams]);

  const handleChange = (e) => {
    setLocalSearch(e.target.value);
  };

  const handleClear = () => {
    setLocalSearch('');
    navigate('/');
  };

  const handleSearch = () => {
    const query = localSearch.trim();
    if (query) {
      navigate(`/?items=${query}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 bg-contrast/5 border border-secondary/20 rounded-lg px-6 py-5">
      <span className="text-accent text-center tracking-[0.25em] uppercase font-semibold">
        Buscador de Piezas
      </span>

      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative flex items-center flex-1 group">
          <div className="absolute left-4 text-contrast/30 group-focus-within:text-accent transition-colors duration-300 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            value={localSearch}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Buscar por Nombre"
            disabled={disabled}
            className="
              w-full bg-primary border border-secondary/40
              text-contrast placeholder:text-contrast/30
              text-sm font-light tracking-wide
              pl-10 pr-4 py-3 rounded outline-none
              focus:border-accent/70 focus:ring-1 focus:ring-accent/20
              hover:border-secondary/70
              transition-all duration-300
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          />
        </div>

        <button
          onClick={handleSearch}
          disabled={disabled}
          className="bg-accent/10 border border-accent/30 text-accent px-6 py-3 rounded text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-300 cursor-pointer disabled:opacity-50"
        >
          Buscar
        </button>

        <button
          onClick={handleClear}
          className="cursor-pointer text-contrast/30 hover:text-contrast/60 tracking-widest uppercase transition-colors duration-200 whitespace-nowrap text-xs"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default FilterBar;