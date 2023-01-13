import { render, screen } from "@testing-library/react";
import Home from "./Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bannerImg from '../../assets/banner-IMG.jpg'
import { MemoryRouter } from "react-router-dom";

describe('Home', () => {
    it('Should render text and image from section', () => {
        render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
        );
        const textSection = screen.getByText('Chez vous, partout et ailleurs');
        expect(textSection).toBeInTheDocument();
        const imgSection = screen.getByTestId('img');
        expect(imgSection).toHaveStyle(`background-image: url(${bannerImg})`);
    });
    it('Should include the header & footer', () => {
        render(
        <div>
            <MemoryRouter>
                <Header />
                <Home />
                <Footer />
            </MemoryRouter>
        </div>
        );
        const logoHeader = screen.getByTestId("logo-header");
        expect(logoHeader).toBeInTheDocument();
        const logoFooter = screen.getByTestId('logo-footer');
        expect(logoFooter).toBeInTheDocument();
    });
});