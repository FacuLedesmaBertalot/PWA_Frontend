import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../services/localStorage";


const FAVORITES_KEY = 'tempo_deluxe_favorites';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {

        return getLocalStorage(FAVORITES_KEY) || [];
    });

    useEffect(() => {
        setLocalStorage(FAVORITES_KEY, favorites);
    }, [favorites]);

    const toggleFavorite = product => {
        setFavorites((prevFavorites) => {
            const isAlreadyFavorite = prevFavorites.some((item) => item.id === product.id);
            
            if (isAlreadyFavorite) {
                return prevFavorites.filter((item) => item.id !== product.id);
            } else {
                return [...prevFavorites, product];
            }
        });
    };

    const isFavorite = id => {
        return favorites.some((item) => item.id === id);
    };

    return { favorites, toggleFavorite, isFavorite };
};