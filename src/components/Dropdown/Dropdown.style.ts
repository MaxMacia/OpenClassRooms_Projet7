import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export const MainContainer = styled.div`
	height: fit-content;
	margin-top: 20px;
	margin-bottom: 40px;
	@media (max-width: 336px) {
		width: 100%;
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;

export const HeadingContainer = styled.div`
	background-color: ${colors.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;
	position: relative;
	z-index: 1;
	height: 52px;
	border-radius: 10px;
	@media (max-width: 336px) {
		height: 29.93px;
		border-radius: 5px;
	}
`;

export const Heading = styled.h2`
	color: ${colors.white};
	font-weight: 500;
	font-size: 18px;
	@media (max-width: 336px) {
		font-size: 13px;
	}
	
`;

export const Img = styled.img`
	height: 26.4px;
	width: 15.56px;
	cursor: pointer;
	@media (max-width: 336px) {
		height: 15.2px;
		width: 8.96px;
	}
`;

export const Children = styled.div<{ isOpen: boolean, fixedHeight: boolean }>`
	${props => props.isOpen && `
		background-color: ${colors.secondary};
		color: ${colors.primary};
		padding-top: 40px;
		padding-left: 20px;
		padding-right: 20px;
		transform: translateY(-15px);
		border-radius: 10px;
		font-size: 18px
		width: 100%;	
	`}
	${props => props.isOpen && props.fixedHeight && `
		height: 249px;
	`}
	${props => props.isOpen && !props.fixedHeight && `
		height: fit-content;
	`}
	@media (max-width: 336px) {
		${props => props.isOpen && props.fixedHeight && `
		font-size: 12px;
		height: fit-content;
		padding-bottom: 30px;
	`}
	}
`;

export const ChildrenItems = styled.div`
	padding-bottom: 5px;
`;