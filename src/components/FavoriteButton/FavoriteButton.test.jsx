import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { FavoriteButton } from "./FavoriteButton";


const mockToggleFavorite = vi.fn ();
const mockIsFavorite = vi.fn ();
const mockWatch = {
    id: 1,
    name: 'Submariner',
    brand: 'Rolex',
}

vi.mock ('../../hooks/useFavorites', () => ({
    useFavorites: () => ({
        toggleFavorite: mockToggleFavorite,
        isFavorite: mockIsFavorite,
    }),
}));


describe ('FavoriteButton', () => {
    
    it ('Renders correctly when the product is not a favorite', () => {
        mockIsFavorite.mockReturnValue (false);
        render (<FavoriteButton watch={mockWatch}/>);
        expect (screen.getByRole ('button')).toBeInTheDocument ();
        expect (screen.getByRole ('button')).toHaveAttribute ('aria-label', 'Agregar a la colección');
    });

    it ('Renders correctly when the product is a favorite', () => {
        mockIsFavorite.mockReturnValue (true);
        render (<FavoriteButton watch={mockWatch}/>);
        expect (screen.getByRole ('button')).toBeInTheDocument ();
        expect (screen.getByRole ('button')).toHaveAttribute ('aria-label', 'Quitar de la colección');     
    });

    it ('When you click, it calls toggleFavorite with the watch', async () => {
        mockIsFavorite.mockReturnValue (false);
        const user = userEvent.setup ();
        render (<FavoriteButton watch={mockWatch}/>);
        await user.click (screen.getByRole ('button'));
        expect (mockToggleFavorite).toHaveBeenCalledWith (mockWatch);
    });
});