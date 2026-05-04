import { useCallback, useEffect, useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { InfiniteScrollTrigger } from "../InfiniteScrollTrigger/InfiniteScrollTrigger";
import { getItems } from "../../services/itemsService";

const LIMIT = 10;

export default function ProductSection () {
    const [search, setSearch] = useState ('');
    const [error, setError] = useState (null);
    const [watches, setWatches] = useState ([]);
    const [loading, setLoading] = useState (false);
    const [hasMore, setHasMore] = useState (true);
    const [page, setPage] = useState (1);

    const handleSearch = useCallback (value => {
        setSearch (value.trim ());
    }, []);

    const handleLoadMore = useCallback(() => {
        if (!loading && hasMore) {
            setPage (prev => prev + 1);
        }
    }, [loading, hasMore]);

    useEffect(() => {
        setPage (1);
        setHasMore (true);
        setError (null);
    }, [search]);

    useEffect (() => {
        if (!hasMore && page !== 1) return;

        const fetcData = async () => {
            setLoading (true);
            const { data, error: fetchError } = await getItems (page, LIMIT, search);

            if (fetchError) {
                setError (fetchError);
                setLoading (false);
                return;
            }

            if (data.length < LIMIT) {
                setHasMore (false);
            }

            setWatches (prev => (page === 1 ? data : [...prev, ...data]));
            setLoading (false);
        }

        fetcData ();
    }, [page, search]);

    return (
        <section className='flex flex-col gap-6 w-full'>
            <FilterBar onSearch={handleSearch} disabled={loading}/>

            {error && (
                <div className='flex justify-center items-center py-10'>
                    <p className='text-red-400 font-light tracking-wide text-sm'>{error}</p>
                </div>
            )}

            <ProductGrid watches={watches}/>

            {hasMore && (
                <InfiniteScrollTrigger onTrigger={handleLoadMore} loading={loading}/>
            )}
        </section>
    )
}