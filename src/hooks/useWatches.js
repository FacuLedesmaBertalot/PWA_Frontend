import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { getItems } from '../services/itemsService';

export const useWatches = () => {
  const [watches, setWatches] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('items') || '';

  const fetchWatches = async (reset = false) => {
    setLoading(true);
    const currentPage = reset ? 1 : pages;
    
    const { data } = await getItems(currentPage, 4, searchQuery);

    if (data) {
      setWatches(reset ? data : (prev) => [...prev, ...data]);
    } else if (reset) {
      setWatches([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    setPages(1);
    fetchWatches(true);
  }, [searchQuery]);

  useEffect(() => {
    if (pages > 1) {
      fetchWatches();
    }
  }, [pages]);

  const loadMore = () => setPages((prev) => prev + 1);

  return {
    watches,
    loading,
    searchQuery,
    loadMore
  };
};