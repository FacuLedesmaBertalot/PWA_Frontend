import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductGrid } from "./ProductGrid";

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to} data-testid="mock-link">{children}</a>,
}));

vi.mock('../ProductCard/ProductCard', () => ({
  ProductCard: ({ brand, model }) => (
    <div data-testid="product-card">
      {brand} - {model}
    </div>
  ),
}));
 
describe("ProductGrid", () => {
  const mockWatches = [
    { id: '1', marca: 'Rolex', nombre: 'Submariner Date', precio: 10500, imagen: 'img1.png', descripcion: 'Limited Edition' },
    { id: '2', marca: 'Omega', nombre: 'Speedmaster', precio: 6000, imagen: 'img2.png', descripcion: 'Moonwatch' },
  ];

  it("renderiza el mensaje de estado vacío cuando el array 'watches' está vacío", () => {
    render(<ProductGrid watches={[]} />);
    expect(screen.getByText("productGrid.emptyMessage")).toBeInTheDocument();
  });

  it("renderiza el mensaje de estado vacío cuando 'watches' es undefined", () => {
    render(<ProductGrid watches={undefined} />);
    expect(screen.getByText("productGrid.emptyMessage")).toBeInTheDocument();
  });

  it("renderiza la cantidad correcta de tarjetas de producto en el DOM", () => {
    render(<ProductGrid watches={mockWatches} />);
    
    const cards = screen.getAllByTestId("product-card");
    expect(cards).toHaveLength(2);
    
    expect(screen.getByText("Rolex - Submariner Date")).toBeInTheDocument();
    expect(screen.getByText("Omega - Speedmaster")).toBeInTheDocument();
  });

  it("envuelve cada tarjeta en un enlace con la ruta correcta", () => {
    render(<ProductGrid watches={mockWatches} />);
    
    const links = screen.getAllByTestId("mock-link");
    expect(links).toHaveLength(2);
    
    expect(links[0]).toHaveAttribute("href", "/item/1");
    expect(links[1]).toHaveAttribute("href", "/item/2");
  });
});