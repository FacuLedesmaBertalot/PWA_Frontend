import { useState, useEffect } from 'react';
import { getItems } from '../services/itemsService';

export const useItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRelojes = async () => {
            const { data, error } = await getItems();

            if (error) {
                setError(error);
            } else {
                setItems(data);
            }

            setLoading(false);
        };

        fetchRelojes();
    }, []);

    return { items, loading, error};
};