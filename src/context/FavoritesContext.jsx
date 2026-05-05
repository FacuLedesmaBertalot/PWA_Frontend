import React, { createContext, useState, useEffect, useContext } from 'react';
import { getLocalStorage, setLocalStorage } from '../services/localStorage';

const FavoritesContext = createContext();
const FAVORITES_KEY = 'tempo_deluxe_favorites';

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        return getLocalStorage(FAVORITES_KEY) || [];
    });

    useEffect(() => {
        setLocalStorage(FAVORITES_KEY, favorites);
    }, [favorites]);

    const toggleFavorite = product => {
        setFavorites((prev) => {
            const exists = prev.some((item) => item.id === product.id);
            return exists ? prev.filter((item) => item.id !== product.id) : [...prev, product];
        });
    };

    const isFavorite = (id) => favorites.some((item) => item.id === id);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error ('useFavorites debe usarse dentro de un FavoritesProvider');
    }
    return context;
}
