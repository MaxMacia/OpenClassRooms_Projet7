import { useState } from "react";
import backwardArrow from '../../assets/backward-arrow.svg';
import forwardArrow from '../../assets/forward-arrow.svg';
import styled from "styled-components";

type Props = {
    slides: string[]
};

const ImageSlider = ({ slides }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const SliderStyles = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
    `;

    const SlideStyles = styled.div`
        background-image: url(${slides[currentIndex]});
        width: 100%;
        height: 100%;
        border-radius: 25px;
        background-position: center;
        background-size: cover
    `;

    const BackwardArrow = styled.img`
        position: absolute;
        height: 79.2px;
        top: 50%;
        left: 32px;
        transform: translate(0, -50%);
        z-index: 1;
        cursor: pointer;
    `;

    const ForwardArrow = styled.img`
        position: absolute;
        height: 79.2px;
        top: 50%;
        right: 32px;
        transform: translate(0, -50%);
        z-index: 1;
        cursor: pointer;    
    `;

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <SliderStyles>
            <BackwardArrow src={backwardArrow} onClick={goToPrevious} />
            <ForwardArrow src={forwardArrow} onClick={goToNext} />
            <SlideStyles />
        </SliderStyles>
    );
};

export default ImageSlider;