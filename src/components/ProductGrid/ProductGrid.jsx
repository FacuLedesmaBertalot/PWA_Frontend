import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ({ watches }) => {

  if (!watches || watches.length === 0) {
    return (
      <div className="flex justify-center items-center py-20 w-full">
        <p className="text-contrast/60 font-light text-lg tracking-wide">
          No hay piezas exclusivas disponibles en este momento.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full justify-items-center">
      {watches.map((watch) => (
        // ⚠️ Este bloque de abajo se debe modificar cuando se integre el react router
        // Envolvemos la Card con Link para la redirección dinámica
        // <Link 
        //   key={watch.id} 
        //   to={`/items/${watch.id}`}
        //   className="w-full flex justify-center no-underline outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg transition-all"
        // >
          <ProductCard 
            brand={watch.marca} 
            model={watch.nombre} 
            price={watch.precio || 0} 
            image={watch.imagen}      
            features={watch.descripcion || "Edición Limitada"} 
          />
        // </Link>
      ))}
    </div>
  );
};
