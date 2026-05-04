import { Link } from "react-router";

export const ProductNotFound = () => {
return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 text-center font-sans">
        <h1 className="text-8xl md:text-9xl font-serif text-accent/20 mb-6 select-none">
            404
        </h1>

        <h2 className="text-2xl md:text-3xl text-contrast mb-5 font-serif font-extralight tracking-tight">
            ¡Ups! Parece que nos quedamos sin cuerda 🫠
        </h2>

        <p className="text-contrast/70 mb-12 max-w-md mx-auto leading-relaxed text-base font-light">
            La pieza que buscás no está en nuestra colección, fue adquirida por otro
            coleccionista o, lamentablemente, se perdió en una anomalía temporal.
        </p>

        <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-10 py-4 border border-accent text-accent overflow-hidden transition-all duration-300 ease-out hover:text-primary"
        >
            <span className="absolute inset-0 w-full h-full bg-accent transition-all duration-300 ease-out transform translate-y-full group-hover:translate-y-0"></span>

            <span className="relative uppercase tracking-[0.2em] text-xs font-semibold">
                Explorar la colección
            </span>
        </Link>
    </div>
);
};
