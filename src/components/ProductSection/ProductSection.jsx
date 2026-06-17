import FilterBar from "../FilterBar/FilterBar";
import { ProductGrid } from "../ProductGrid/ProductGrid";
import { InfiniteScrollTrigger } from "../InfiniteScrollTrigger/InfiniteScrollTrigger";
import { useWatches } from "../../hooks/useWatches";

export default function ProductSection() {
    const { watches, loading, hasMore, loadMore } = useWatches();

    return (
        <section className='flex flex-col gap-6 w-full'>
            <FilterBar disabled={loading} />

            <ProductGrid watches={watches} loading={loading} />

            {hasMore && (
                <InfiniteScrollTrigger onTrigger={loadMore} loading={loading} />
            )}
        </section>
    );
}