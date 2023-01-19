import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe('Tag', () => {
    it('Should render the component Tag', () => {
        render(<Tag tag="Tag"/>);
        const tag = screen.getByText('Tag');
        expect(tag).toBeInTheDocument();
    });
});