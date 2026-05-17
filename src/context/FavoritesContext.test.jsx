import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it , expect, beforeEach } from "vitest";
import { FavoritesProvider, useFavorites } from "./FavoritesContext";

// Componente falso
const TestComponent = () => {
    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const mockProduct = { id: "1", nombre: "Reloj Oro Rosa" };

    return (
        <div>
            <span data-testid="total-favoritos">Total: {favorites.length}</span>
            <span data-testid="estado-favorito">{isFavorite("1") ? "Es favorito" : "No es favorito"}</span>

            <button onClick={() => toggleFavorite(mockProduct)}>
                Toggle Favorito
            </button>
            
        </div>
    );
};

// Test simulando la interacción del usuario
describe("FavoritesContext y useFavorites", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("renderiza inicialmente con cero favoritos", () => {
        render(
            <FavoritesProvider>
                <TestComponent />
            </FavoritesProvider>
        );

        expect(screen.getByTestId("total-favoritos")).toHaveTextContent("Total: 0");
        expect(screen.getByTestId("estado-favorito")).toHaveTextContent("No es favorito");
    });

    it("agrega un producto a favoritos al hacer click en el boton", async () => {
        const user = userEvent.setup();

        render(
            <FavoritesProvider>
                <TestComponent />
            </FavoritesProvider>
        );

        const button = screen.getByRole("button", { name: /Toggle Favorito/i });

        await user.click(button);

        expect(screen.getByTestId("total-favoritos")).toHaveTextContent("Total: 1");
        expect(screen.getByTestId("estado-favorito")).toHaveTextContent("Es favorito");
    });

    it("elimina un producto de favoritos si se vuelve a hacer click", async () => {
        const user = userEvent.setup();

        render(
            <FavoritesProvider>
                <TestComponent />
            </FavoritesProvider>
        );

        const button = screen.getByRole("button", { name: /Toggle Favorito/i });

        // Primer click: lo agrega
        await user.click(button);

        // Segundo click: lo elimina
        await user.click(button);


        expect(screen.getByTestId("total-favoritos")).toHaveTextContent("Total: 0");
        expect(screen.getByTestId("estado-favorito")).toHaveTextContent("No es favorito");
    });
});
