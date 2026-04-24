import { useState, useEffect } from 'react';
import { getItems } from '../../services/itemsService';
import HeroSection from '../../components/Hero/heroSection';

const Home = () => {
  const [watches, setWatches] = useState ([]);
  const [pages, setPages] = useState (1);
  const [loading, setLoading] = useState (false);

  const fetchWatches = async () => {
    setLoading (true);
    const { data } = await getItems (pages, 5);

    if (data && data.length > 0) {
      if (pages === 1) {
        setWatches (data);
      }
      else {
        setWatches ((prevWatches) => [...prevWatches, ...data]);
      }
    }
    setLoading (false);
  };

  useEffect(() => {
    fetchWatches ();
  }, [pages]);

  const loadMore = () => setPages ((prevPages) => prevPages + 1);

  return (
    <>
      <HeroSection />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Catálogo</h2>
        {/* Listado de prueba */}
        <div className="grid gap-2">
          {watches.map((r) => (
            <div key={r.id} className="p-3 border rounded bg-white shadow-sm">
              {r.id} - {r.nombre} - {r.marca}
            </div>
          ))}
        </div>
        <button onClick={loadMore} disabled={loading} className="mt-4 px-4 py-2 bg-black text-white rounded disabled:bg-gray-400">
          {loading ? "Cargando..." : "Cargar más"}
        </button>
      </div>
    </>
  );
};

export default Home;