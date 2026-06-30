import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext'; 
import { getFavorites, addFavorite, removeFavorite } from '../services/favoritesService'; 

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const { token } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            if (token) {
                try {
                    const dbFavorites = await getFavorites(token);
                    console.log("DATA DEL BACKEND AL RECARGAR:", dbFavorites);

        const rawArray = Array.isArray(dbFavorites) ? dbFavorites : (dbFavorites?.favoritos || dbFavorites?.data || []);


        const validArray = rawArray.map(item => item.reloj ? item.reloj : item);

        setFavorites(validArray);
                } catch (error) {
                    console.error('Error al cargar favoritos del servidor:', error);
                }
            } else {

                setFavorites([]);
            }
        };

        fetchFavorites();
    }, [token]);

    const toggleFavorite = async (product) => {

        if (!token) return;

        const safeFavorites = Array.isArray(favorites) ? favorites : [];
        const exists = safeFavorites.some((item) => item.id === product.id);

        try {
            if (exists) {
                await removeFavorite(product.id, token);
                setFavorites((prev) => prev.filter((item) => item.id !== product.id));
            } else {
                await addFavorite(product.id, token);
                setFavorites((prev) => [...prev, product]);
            }
        } catch (error) {
            console.error('Error al actualizar favorito en el servidor:', error);
        }
    };

    const isFavorite = (id) => {
        if (!Array.isArray(favorites)) return false;
        return favorites.some((item) => item.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites debe usarse dentro de un FavoritesProvider');
    }
    return context;
};
