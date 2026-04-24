const BASE_URL = 'https://69e6b12a68208c1debe7e1c7.mockapi.io';

export const getItems = async (page, limit) => {
    try {
        const response = await fetch (`${BASE_URL}/items?page=${page}&limit=${limit}`);

        if (!response.ok) return { data: null, error: `Error del servidor: ${response.status}` };

        const data = await response.json ();
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