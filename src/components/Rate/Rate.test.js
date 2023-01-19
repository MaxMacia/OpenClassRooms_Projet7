import { render, screen } from "@testing-library/react";
import { accomodations } from "../../models/accomodations";
import fullStarImg from '../../assets/full-star.svg';
import emptyStarImg from '../../assets/empty-star.svg';
import Rate from "./Rate";

describe('Rate', () => {
    it('Should render full stars and empty stars', () => {
        const rating = accomodations[0].rating;
        render(<Rate rating={rating} />);

        const fullStar = screen.getAllByAltText('étoile pleine')[0];
        expect(fullStar).toHaveAttribute('src', fullStarImg);

        const emptyStar = screen.getByAltText('étoile vide');
        expect(emptyStar).toHaveAttribute('src', emptyStarImg);
    });
});