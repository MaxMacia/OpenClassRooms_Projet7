import { render, screen } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import fullStarImg from '../../assets/full-star.svg';
import emptyStarImg from '../../assets/empty-star.svg';
import downArrowImg from "../../assets/down-arrow.svg";
import AccomodationCard from "./AccomodationCard";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));

describe('Accomodation card', () => {
    it('Should render a title, a subtitle, tags, a host name, a host picture, rating stars, and dropdowns', () => {
       useParams.mockReturnValue({ id: 'c67ab8a7' });
        render(
            <MemoryRouter>
                <AccomodationCard />
            </MemoryRouter>
        );
        
        const title = screen.getByText(/cosy/);
        expect(title).toBeInTheDocument();

        const subtitle = screen.getByText(/Ile/);
        expect(subtitle).toBeInTheDocument();

        const tag = screen.getByText('Batignolle');
        expect(tag).toBeInTheDocument();

        const firstName = screen.getByText('Nathalie');
        expect(firstName).toBeInTheDocument();

        const lastName = screen.getByText('Jean');
        expect(lastName).toBeInTheDocument();

        const hostPicture = screen.getByAltText(`${firstName.textContent} ${lastName.textContent}`);
        expect(hostPicture).toHaveAttribute('src', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg');

        const fullStar = screen.getAllByAltText('étoile pleine')[0];
        expect(fullStar).toHaveAttribute('src', fullStarImg);

        const emptyStar = screen.getByAltText('étoile vide');
        expect(emptyStar).toHaveAttribute('src', emptyStarImg);

        const heading = screen.getByText('Description');
        expect(heading).toBeInTheDocument();

        const downArrow = screen.getAllByAltText('flèche vers le bas')[0];
        expect(downArrow).toHaveAttribute('src', downArrowImg);
    });
    it('Should render the 404 page if the id is not valid', () => {
        useParams.mockReturnValue({ id: '0' });
        render(
            <MemoryRouter>
                <AccomodationCard />
            </MemoryRouter>
        );

        const title = screen.getByText('404');
        expect(title).toBeInTheDocument();

        const subTitle = screen.getByText(/Oups/);
        expect(subTitle).toBeInTheDocument();

        const link = screen.getByText(/Retourner/);
        expect(link).toHaveAttribute('href', '/');
    });
});