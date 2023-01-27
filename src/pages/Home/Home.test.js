import { render, screen } from "@testing-library/react";
import Home from "./Home";
import bannerImg from '../../assets/banner-IMG.jpg'
import { MemoryRouter } from "react-router-dom";

describe('Home', () => {
    it('Should render text and image from section, and title and image for the cards in the gallery', () => {
        render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
        );
        
        const textSection = screen.getByText('Chez vous, partout et ailleurs');
        expect(textSection).toBeInTheDocument();
        
        const imgSection = screen.getByTestId('img');
        expect(imgSection).toHaveStyle(`background-image: url(${bannerImg})`);
        
        const titleAccomodation = screen.getByText(/cosy/);
        expect(titleAccomodation).toBeInTheDocument();

        const imgAccomodation = screen.getByAltText(`image ${titleAccomodation.textContent}`);
        expect(imgAccomodation).toHaveAttribute('src', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg');
    });
});

