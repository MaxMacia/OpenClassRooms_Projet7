import { useState } from 'react';
import backwardArrow from '../../assets/backward-arrow.svg';
import forwardArrow from '../../assets/forward-arrow.svg';
import { BackwardArrow, ForwardArrow, SlideCounter, SliderStyles, SlideStyles } from './ImageSlider.style';

type Props = {
	slides: string[];
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
			<BackwardArrow src={backwardArrow} alt="backward arrow" onClick={goToPrevious} />
			<ForwardArrow src={forwardArrow} alt="forward arrow" onClick={goToNext} />
			<SlideCounter>
				{currentIndex + 1}/{slides.length}
			</SlideCounter>
			<SlideStyles data-testid="img" slides={slides} currentIndex={currentIndex} />
		</SliderStyles>
	);
};

export default ImageSlider;
