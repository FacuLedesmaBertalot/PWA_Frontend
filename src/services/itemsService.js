const BASE_URL = import.meta.env.VITE_API_URL;

export const getItems = async (page = 1, limit = 10, search = '') => {
    try {
        console.log("URL Base detectada por Vite:", BASE_URL);
        
        const url = new URL(`${BASE_URL}/items`);
        url.searchParams.append('page', page);
        url.searchParams.append('limit', limit);

        if (search) {
            url.searchParams.append('nombre', search);
        }

        console.log("Haciendo fetch a:", url.toString());

        const response = await fetch(url);

        if (response.status === 404) {
            return { data: [], error: null };
        }

        if (!response.ok) {
            console.error(`El backend rechazó el pedido: ${response.status}`);
            return { data: null, error: `Error del servidor: ${response.status}` };
        }

        const data = await response.json();
        
        console.log("Datos recibidos y parseados:", data);
        
        return { data, error: null };

    } catch (error) {
        console.error("¡URGENTE! El fetch explotó por este motivo:", error);
        return { data: null, error: "Error de conexión" };
    }
};

export const getItemById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/items/${id}`);

        if (!response.ok) {
            if (response.status === 404) {
                return { data: null, error: `Reloj no encontrado en la base de datos (ID: ${id})` };
            }
            return { data: null, error: `Error del servidor: ${response.status}` };
        }

        const data = await response.json();
        return { data, error: null };

    } catch (error) {
        return { data: null, error: "Error de conexión con la API" };
    }
};