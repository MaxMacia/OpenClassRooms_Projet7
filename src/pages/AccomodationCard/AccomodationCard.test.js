import { render } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import AccomodationCard from "./AccomodationCard";

describe('Accomodation card', () => {
    it('Should render a title, a subtitle, tags, a host name, a host picture, rating stars, and dropdowns', () => {
        jest.mock('react-router-dom', () => {
            useParams: () => {
                id: "c67ab8a7"
            },
        render(
            <MemoryRouter>
                <AccomodationCard />
            </MemoryRouter>
        );
        });
    });
});