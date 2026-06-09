// Llamamos a la variable de Vite
const BASE_URL = import.meta.env.VITE_API_URL;

export const getItems = async (page = 1, limit = 10, search = '') => {
    try {
        // 1. PRIMER MICRÓFONO: Ver a dónde está intentando ir
        console.log("URL Base detectada por Vite:", BASE_URL);
        
        const url = new URL(`${BASE_URL}/items`);
        url.searchParams.append('page', page);
        url.searchParams.append('limit', limit);

        if (search) {
            url.searchParams.append('nombre', search);
        }

        // 2. SEGUNDO MICRÓFONO: Ver la ruta final completa
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
        
        // 3. TERCER MICRÓFONO: Ver qué llegó de la base de datos
        console.log("Datos recibidos y parseados:", data);
        
        return { data, error: null };

    } catch (error) {
        // 🚨 EL SALVAVIDAS: Si algo explota antes de salir o al llegar, cae acá
        console.error("¡URGENTE! El fetch explotó por este motivo:", error);
        return { data: null, error: "Error de conexión" };
    }
};