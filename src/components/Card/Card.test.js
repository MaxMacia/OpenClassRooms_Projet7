import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";

describe('Card', () => {
    it('Should render cover image and title', () => {
        const accomodation = {
            cover: 'image.png',
            title: 'accomodation cover image'
        };
        render(
        <MemoryRouter>
            <Card cover={accomodation.cover} title={accomodation.title} />
        </MemoryRouter>
        );
        const coverImage = screen.getByAltText('image accomodation cover image');
        expect(coverImage).toHaveAttribute('src', 'image.png');
        const titleCard = screen.getByText('accomodation cover image');
        expect(titleCard).toBeInTheDocument();
    });
});