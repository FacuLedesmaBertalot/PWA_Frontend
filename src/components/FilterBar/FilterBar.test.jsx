import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import FilterBar from "./FilterBar";


const mockNavigate = vi.fn ();
const mockParams = new URLSearchParams ();

vi.mock ('react-router', () => ({
  useNavigate: () => mockNavigate,
  useSearchParams: () => [mockParams, vi.fn ()],
}));

vi.mock ('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));


describe ("FilterBar", () => {

    it ("Render correctly", () => {
        render (<FilterBar/>);
        expect (screen.getByRole ("textbox")).toBeInTheDocument ();
        expect (screen.getByText ("filterBar.search")).toBeInTheDocument ();
        expect (screen.getByText ("filterBar.clear")).toBeInTheDocument ();
    });

    it ("Type in the input", async () => {
        const user = userEvent.setup ();
        render(<FilterBar/>);
        const input = screen.getByRole ("textbox");
        await user.type (input, "Rolex");
        expect (input).toHaveValue ("Rolex");
    });

    it ("Press ENTER to search using the search term", async () => {
        const user = userEvent.setup ();
        render (<FilterBar/>);
        const input = screen.getByRole ("textbox");
        await user.type (input, "Rolex");
        await user.keyboard ("{Enter}");
        expect (mockNavigate).toHaveBeenCalledWith ("/?items=Rolex");
    });

    it ("Clicking CLEAR clears the input field and navigates to /", async () => {
        const user = userEvent.setup ();
        render (<FilterBar/>);
        const input = screen.getByRole ("textbox");
        await user.type (input, "Rolex");
        await user.click (screen.getByText ("filterBar.clear"));
        expect (input).toHaveValue ("");
        expect (mockNavigate).toHaveBeenCalledWith ("/");
    });
});