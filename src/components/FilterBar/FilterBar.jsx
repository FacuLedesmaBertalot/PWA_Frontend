import React from "react";

const FilterBar = ({ filters, setFilters, categories = [], brands = [], disabled = false }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleClear = () => {
        setFilters({ search: '', category: '', brand: '' });
    };

  return (
    <div className="w-full flex flex-col gap-3 bg-contrast/5 border border-secondary/20 rounded-lg px-6 py-5">
      <span className="text-accent text-center tracking-[0.25em] uppercase font-semibold">
        Buscar
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
            value={filters.search}
            onChange={handleChange}
            placeholder="Buscar por nombre..."
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

        <div className="relative">
          <select
            name="category"
            value={filters.categories}
            onChange={handleChange}
            disabled={disabled}
            className="
              appearance-none
              bg-primary border border-secondary/40
              text-sm text-contrast/70
              pl-4 pr-9 py-3 rounded outline-none
              focus:border-accent/70 focus:ring-1 focus:ring-accent/20
              hover:border-secondary/70
              transition-all duration-300
              disabled:opacity-40 disabled:cursor-not-allowed
              cursor-pointer w-full sm:w-auto
            "
          >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-contrast/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            disabled={disabled}
            className="
              appearance-none
              bg-primary border border-secondary/40
              text-sm text-contrast/70
              pl-4 pr-9 py-3 rounded outline-none
              focus:border-accent/70 focus:ring-1 focus:ring-accent/20
              hover:border-secondary/70
              transition-all duration-300
              disabled:opacity-40 disabled:cursor-not-allowed
              cursor-pointer w-full sm:w-auto
            "
          >
            <option value="">Todas las marcas</option>
            {brands.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-contrast/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        <button
          onClick={handleClear}
          className="cursor-pointer text-contrast/30 hover:text-contrast/60 tracking-widest uppercase transition-colors duration-200 whitespace-nowrap"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default FilterBar;