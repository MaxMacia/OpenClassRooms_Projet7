import { fireEvent, render, screen } from "@testing-library/react";
import { accomodations } from "../../models/accomodations";
import downArrowImg from "../../assets/down-arrow.svg";
import upArrowImg from "../../assets/up-arrow.svg";
import Dropdown from "./Dopdown";

describe('Dropdown', () => {
    it('Should render a heading, a down arrow, and on click an up arrow and a description', () => {
        const description = accomodations[0].description;
        render(<Dropdown heading="Description" children={description}/>);

        const heading = screen.getByText('Description');
        expect(heading).toBeInTheDocument();

        const downArrow = screen.getByAltText('flèche vers le bas');
        expect(downArrow).toHaveAttribute('src', downArrowImg);
        
        fireEvent.click(downArrow);
        
        const textDescription = screen.getByText(/Votre/);
        expect(textDescription).toBeInTheDocument;

        const upArrow = screen.getByAltText('flèche vers le haut');
        expect(upArrow).toHaveAttribute('src', upArrowImg);
    });
    it('Should render a heading, a down arrow, and on click an up arrow and Equipments', () => {
        const equipments = accomodations[0].equipments;
        render(<Dropdown heading="Equipements" children={equipments}/>);

        const heading = screen.getByText('Equipements');
        expect(heading).toBeInTheDocument();

        const downArrow = screen.getByAltText('flèche vers le bas');
        expect(downArrow).toHaveAttribute('src', downArrowImg);
        
        fireEvent.click(downArrow);
        
        const textDescription = screen.getByText(/Micro/);
        expect(textDescription).toBeInTheDocument;

        const upArrow = screen.getByAltText('flèche vers le haut');
        expect(upArrow).toHaveAttribute('src', upArrowImg);
    });
});