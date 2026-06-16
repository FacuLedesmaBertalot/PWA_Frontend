import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const InfiniteScrollTrigger = ({ onTrigger, loading }) => {
  const observerRef = useRef();
  const ignoreInitialIntersection = useRef(true);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || ignoreInitialIntersection.current) return;

        if (entry.isIntersecting && !loading) {
          onTrigger();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 200px 0px',
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    const initialTimeout = setTimeout(() => {
      ignoreInitialIntersection.current = false;
    }, 300);

    return () => {
      clearTimeout(initialTimeout);
      observer.disconnect();
    };
  }, [onTrigger, loading]);

  return (
    <div ref={observerRef} className="w-full py-10 flex justify-center">
      {loading && (
        <span className="text-accent font-sans tracking-widest uppercase animate-pulse">
          {t('infiniteScroll.loading')}
        </span>
      )}
    </div>
  );
};
