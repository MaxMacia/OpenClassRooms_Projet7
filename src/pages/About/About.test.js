import { render, screen } from "@testing-library/react";
import bannerImg from "../../assets/banner-IMG-about.jpg";
import downArrowImg from "../../assets/down-arrow.svg"
import About from "./About";

describe('About', () => {
    it('Should render a section containing a image and dropdowns', () => {
        render(<About />);

        const sectionImg = screen.getByTestId('img');
        expect(sectionImg).toHaveStyle(`background-image: url(${bannerImg});`);

        const heading = screen.getByText('Fiabilité');
        expect(heading).toBeInTheDocument();

        const downArrow = screen.getAllByAltText('flèche vers le bas')[0];
        expect(downArrow).toHaveAttribute('src', downArrowImg);
    })
});