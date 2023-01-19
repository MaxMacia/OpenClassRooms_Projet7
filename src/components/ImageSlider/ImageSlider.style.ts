import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export const SliderStyles = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const SlideStyles = styled.div<{ slides: string[]; currentIndex: number }>`
	width: 100%;
	height: 100%;
	border-radius: 25px;
	background-position: center;
	background-size: cover;
	${(props) =>
		props.slides && `
		background-image: url(${props.slides[props.currentIndex]});
    `}
	@media (max-width: 336px) {
		border-radius: 10px;
	}
`;

export const BackwardArrow = styled.img`
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

export const ForwardArrow = styled.img`
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

export const SlideCounter = styled.div`
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