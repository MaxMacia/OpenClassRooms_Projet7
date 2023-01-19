import { useState } from "react";
import backwardArrow from '../../assets/backward-arrow.svg';
import forwardArrow from '../../assets/forward-arrow.svg';
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

const SliderStyles = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
    `;

    const SlideStyles = styled.div<{ slides: string[], currentIndex: number }>`
        width: 100%;
        height: 100%;
        border-radius: 25px;
        background-position: center;
        background-size: cover;
        ${props => props.slides && `
            background-image: url(${props.slides[props.currentIndex]});
        `}
        @media (max-width: 336px) {
        border-radius: 10px;
        }
    `;

    const BackwardArrow = styled.img`
        position: absolute;
        height: 79.2px;
        top: 50%;
        left: 32px;
        transform: translate(0, -50%);
        z-index: 1;
        cursor: pointer;
        @media (max-width: 336px) {
        height: 19.8px;
        left: 5px;
        }
    `;

    const ForwardArrow = styled.img`
        position: absolute;
        height: 79.2px;
        top: 50%;
        right: 32px;
        transform: translate(0, -50%);
        z-index: 1;
        cursor: pointer;
        @media (max-width: 336px) {
        height: 19.8px;
        right: 5px;
        }    
    `;

    const SlideCounter = styled.div`
        position: absolute;
        font-size: 18px;
        top: 90%;
        right: 50%;
        color: ${colors.white};
        z-index: 1;
        @media (max-width: 336px) {
            display: none;
        }    
    `;

type Props = {
    slides: string[]
};

const ImageSlider = ({ slides }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
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
            <SlideCounter>{currentIndex + 1}/{slides.length}</SlideCounter>
            <SlideStyles slides={slides} currentIndex={currentIndex} />
        </SliderStyles>
    );
};

export default ImageSlider;