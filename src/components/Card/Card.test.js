import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { accomodations } from "../../models/accomodations";
import Card from "./Card";

describe('Card', () => {
    it('Should render cover image and title', () => {
        render(
        <MemoryRouter>
            <Card cover={accomodations[0].cover} title={accomodations[0].title} />
        </MemoryRouter>
        );
        
        const titleCard = screen.getByText(/cosy/);
        expect(titleCard).toBeInTheDocument();
        
        const coverImage = screen.getByAltText(`image ${titleCard.textContent}`);
        expect(coverImage).toHaveAttribute('src', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg');
    });
});