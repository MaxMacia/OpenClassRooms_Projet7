import { render, screen } from "@testing-library/react";
import { accomodations } from "../../models/accomodations";
import Host from "./Host";

describe('Host', () => {
    it('Should render the name and the picture of the host', () => {
        const { host } = accomodations[0];
        render(<Host host={host}/>);

        const firstName = screen.getByText('Nathalie');
        expect(firstName).toBeInTheDocument();
        
        const lastName = screen.getByText('Jean');
        expect(lastName).toBeInTheDocument();

        const hostPicture = screen.getByAltText(`${firstName.textContent} ${lastName.textContent}`);
        expect(hostPicture).toHaveAttribute('src', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg');
    });
});