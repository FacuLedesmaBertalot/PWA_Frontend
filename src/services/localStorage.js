export const getLocalStorage = key => {
    try {
        const result = localStorage.getItem(key);
        return result ? JSON.parse(result) : null;

    } catch (error) {
        console.error(`Error leyendo la clave ${key} del localStorage:`, error);
        return null;   
    }
};

export const setLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error guardando la clave ${key} en localStorage:`, error);
    }
};

export const removeLocalStorage = key => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error eliminando la clave ${key} del localStorage:`, error);
    }
};