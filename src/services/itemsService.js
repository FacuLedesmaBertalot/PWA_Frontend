const BASE_URL = 'https://69e6b12a68208c1debe7e1c7.mockapi.io';

export const getItems = async (page = 1, limit = 10, search = '') => {
    
    try {
        const url = new URL(`${BASE_URL}/items`);
        url.searchParams.append('page', page);
        url.searchParams.append('limit', limit);

        if (search) {
            url.searchParams.append('nombre', search);
        }

        const response = await fetch(url);

        if (response.status === 404) {
            return { data: [], error: null };
        }

        if (!response.ok) {
            return { data: null, error: `Error del servidor: ${response.status}` };
        }

        const data = await response.json();
        return { data, error: null };

    } catch (error) {
        return { data: null, error: "Error de conexión" };
    }
};


export const getItemById = async id => {

    try {
        const response = await fetch(`${BASE_URL}/items/${id}`);

        if (!response.ok) {
            return { data: null, error: `Reloj no encontrado (ID: ${id})` };
        }

        const data = await response.json();
        return { data, error: null };

    } catch (error) {
        return { data: null, error: "Error de conexión con la API" };
    }
};