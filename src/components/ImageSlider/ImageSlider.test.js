import { fireEvent, render, screen } from "@testing-library/react";
import { accomodations } from "../../models/accomodations";
import backwardArrowImg from "../../assets/backward-arrow.svg";
import forwardArrowImg from "../../assets/forward-arrow.svg";
import ImageSlider from "./ImageSlider";

describe('Image Slider', () =>{
    it('Should render arrows, slide counter and image', () => {
        const slides = accomodations[0].pictures;
        render(<ImageSlider slides={slides} />);
        
        const backwardArrow = screen.getByAltText('backward arrow');
        expect(backwardArrow).toHaveAttribute('src', backwardArrowImg);
        
        const forwardArrow = screen.getByAltText('forward arrow');
        expect(forwardArrow).toHaveAttribute('src', forwardArrowImg);

        const slideCounter = screen.getByText(/\//);
        expect(slideCounter).toBeInTheDocument();

        const imageslides = screen.getByTestId('img');
        expect(imageslides).toHaveStyle(`background-image: url(${slides[0]});`);
    });
    it('Should change images slides and increment the counter on click', () => {
        const slides = accomodations[0].pictures;
        render(<ImageSlider slides={slides} />);

        const slideCounter = screen.getByText(/\//);
        const currentImageSlide = screen.getByTestId('img');
        expect(currentImageSlide).toHaveStyle(`background-image: url(${slides[0]});`);
        expect(slideCounter.textContent).toBe(`1/${slides.length}`);
        
        const forwardArrow = screen.getByAltText('forward arrow');
        fireEvent.click(forwardArrow);
        expect(currentImageSlide).toHaveStyle(`background-image: url(${slides[1]});`);
        expect(slideCounter.textContent).toBe(`2/${slides.length}`);

        const backwardArrow = screen.getByAltText('backward arrow');
        fireEvent.click(backwardArrow);
        expect(currentImageSlide).toHaveStyle(`background-image: url(${slides[0]});`);
        expect(slideCounter.textContent).toBe(`1/${slides.length}`);

    });
});