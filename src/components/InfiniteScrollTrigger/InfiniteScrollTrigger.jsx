import { useEffect, useRef } from 'react';

export const InfiniteScrollTrigger = ({ onTrigger, loading }) => {
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          onTrigger();
        }
      },
      { threshold: 0.5 } 
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [onTrigger, loading]);

  return (
    <div ref={observerRef} className="w-full py-10 flex justify-center">
      {loading && (
        <span className="text-accent font-sans tracking-widest uppercase animate-pulse">
          Buscando piezas...
        </span>
      )}
    </div>
  );
};
