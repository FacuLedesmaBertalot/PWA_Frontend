import { describe, it, expect, beforeEach } from 'vitest';
import { getLocalStorage, setLocalStorage } from './localStorage';

describe("localStorage Service", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("Guarda y recupera un obj JSON correctamente", () => {
        const mockData = { id: 1, nombre: "Reloj Esmeralda" };

        setLocalStorage("test_key", mockData);
        const retrieved = getLocalStorage("test_key");

        expect(retrieved).toEqual(mockData);
    });

    it("Devuelve null si la clave no existe en el storage", () => {
        const retrieved = getLocalStorage("clave_inexistente");

        expect(retrieved).toBeNull();
    })
})