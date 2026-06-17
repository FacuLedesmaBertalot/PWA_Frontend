import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { getItems } from '../services/itemsService';

const ITEMS_PER_PAGE = 4;

export const useWatches = () => {
  const [watches, setWatches] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('items') || '';

  const fetchWatches = async (reset = false, pageToFetch = page) => {
    setLoading(true);

    if (reset) {
      setWatches([]);
    }

    const { data } = await getItems(pageToFetch, ITEMS_PER_PAGE, searchQuery);

    if (data) {
      setWatches((prev) => (reset ? data : [...prev, ...data]));
      setHasMore(data.length === ITEMS_PER_PAGE);
    } else {
      setHasMore(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchWatches(true, 1);
  }, [searchQuery]);

  useEffect(() => {
    if (page > 1) {
      fetchWatches(false, page);
    }
  }, [page]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  return {
    watches,
    loading,
    searchQuery,
    loadMore,
    hasMore,
  };
};
