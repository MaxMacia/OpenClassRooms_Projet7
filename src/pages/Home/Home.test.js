import { render, screen } from "@testing-library/react";
import Home from "./Home";
import bannerImg from '../../assets/banner-IMG.jpg'

describe('Home', () => {
    it('Should render a section and a gallery', () => {
        render(<Home />);
        const textSection = screen.getByText('Chez vous, partout et ailleurs');
        expect(textSection).toBeInTheDocument();
        const imgSection = screen.getByTestId('img');
        expect(imgSection).toHaveStyle(`background-image: url(${bannerImg})`);
    });
});