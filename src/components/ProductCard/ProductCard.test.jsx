import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductCard } from "./ProductCard";

// Mock de react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, vars) => vars ? `${vars.brand} ${vars.model}` : key,
  }),
}));

// Mock de FavoriteButton para evitar problemas con el contexto de favoritos
vi.mock('../FavoriteButton/FavoriteButton', () => ({
  FavoriteButton: () => null,
}));

const mockWatch = {
  id: '1',
  nombre: 'Submariner',
  marca: 'Rolex',
};

describe("ProductCard", () => {

  it("muestra la marca del reloj", () => {
    render(<ProductCard watch={mockWatch} brand="Rolex" model="Submariner" price={10500} image="https://via.placeholder.com/300" features="Reloj de buceo de referencia" />);
    expect(screen.getByText("Rolex")).toBeInTheDocument();
  });

  it("muestra el modelo del reloj", () => {
    render(<ProductCard watch={mockWatch} brand="Rolex" model="Submariner" price={10500} image="https://via.placeholder.com/300" features="Reloj de buceo de referencia" />);
    expect(screen.getByText("Submariner")).toBeInTheDocument();
  });

  it("muestra el precio del reloj", () => {
    render(<ProductCard watch={mockWatch} brand="Rolex" model="Submariner" price={10500} image="https://via.placeholder.com/300" features="Reloj de buceo de referencia" />);
    expect(screen.getByText("USD 10.500")).toBeInTheDocument();
  });

  it("muestra la imagen con el alt correcto", () => {
    render(<ProductCard watch={mockWatch} brand="Rolex" model="Submariner" price={10500} image="https://via.placeholder.com/300" features="Reloj de buceo de referencia" />);
    expect(screen.getByAltText("Rolex Submariner")).toBeInTheDocument();
  });

  it("muestra la descripción del reloj", () => {
    render(<ProductCard watch={mockWatch} brand="Rolex" model="Submariner" price={10500} image="https://via.placeholder.com/300" features="Edicion limitada" />);
    expect(screen.getByText("Edicion limitada")).toBeInTheDocument();
  });

  it("muestra el boton para ver pieza", ()=>{
    render(<ProductCard watch={mockWatch} brand="Rolex" model="Submariner" price={10500} image="https://via.placeholder.com/300" features="Edicion limitada" />);
    expect(screen.getByText("productCard.viewPiece")).toBeInTheDocument();
  })

});