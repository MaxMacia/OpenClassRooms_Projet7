import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe('NotFound', () => {
    it('Should render a title, a subtitle and a link', () => {
        render(
        <MemoryRouter>
            <NotFound />
        </MemoryRouter>);
        
        const title = screen.getByText('404');
        expect(title).toBeInTheDocument();

        const subTitle = screen.getByText(/Oups/);
        expect(subTitle).toBeInTheDocument();

        const link = screen.getByText(/Retourner/);
        expect(link).toHaveAttribute('href', '/');
    })
});