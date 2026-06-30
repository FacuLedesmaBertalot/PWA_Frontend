const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const getFavorites = async (token) => {
  const response = await fetch(`${API_URL}/favorites`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Error al obtener los favoritos');
  }

  return response.json();
};

export const addFavorite = async (productId, token) => {
  const response = await fetch(`${API_URL}/favorites/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Error al agregar a favoritos');
  }

  return response.json();
};

export const removeFavorite = async (productId, token) => {
  const response = await fetch(`${API_URL}/favorites/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Error al eliminar de favoritos');
  }

  return response.json();
};