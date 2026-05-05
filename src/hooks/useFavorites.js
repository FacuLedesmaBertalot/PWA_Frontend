import { useFavorites as useFavoritesContext } from '../context/FavoritesContext';

export const useFavorites = () => {
  return useFavoritesContext();
};