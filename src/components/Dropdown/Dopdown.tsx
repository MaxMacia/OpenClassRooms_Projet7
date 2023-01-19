import { useState } from 'react';
import downArrow from '../../assets/down-arrow.svg';
import upArrow from '../../assets/up-arrow.svg';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

const MainContainer = styled.div`
	width: 45%;
	height: 310px;
	margin-top: 20px;
	margin-bottom: 40px;
`;

const HeadingContainer = styled.div<{ accomodation: boolean }>`
	background-color: ${colors.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;
	position: relative;
	z-index: 1;
	${props => props.accomodation && `
		height: 52px;
		border-radius: 10px;
	`}
`;

const Heading = styled.h2<{ accomodation: boolean }>`
	color: ${colors.white};
	font-weight: 500;
	${props => props.accomodation && `
		font-size: 18px;
	`}
`;

const Img = styled.img`
	height: 26.4px;
	width: 15.56px;
	cursor: pointer;
`;

const Children = styled.div<{ accomodation: boolean, isOpen: boolean }>`
	background-color: ${colors.secondary};
	color: ${colors.primary};
	padding-top: 40px;
	padding-left: 20px;
	padding-right: 20px;
	transform: translateY(-15px);
	${props => props.accomodation && props.isOpen && `
		height: 249px;
		border-radius: 10px;
		font-size: 18px
		width: 100%;	
	`}
`;

const ChildrenItems = styled.div`
	padding-bottom: 5px;
`;

type Props = {
	heading: string,
	accomodation: boolean,
	children: string | string[]
};

const Dropdown = ({ heading, accomodation, children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const displayChildren = (children: string | string[]) => {
		if (typeof children === 'string') {
			return (
				<div>
					{children}
				</div>
				);
		} else {
			return (
			<div>
				{children.map((child, index) => (
					<ChildrenItems key={index}>
						{child}
					</ChildrenItems>
				))}
			</div>
			);
		}
	};

	return (
		<MainContainer>
			<HeadingContainer accomodation={accomodation}>
                <Heading accomodation={accomodation}>{heading}</Heading>
                {isOpen ? (
				<Img
					src={upArrow}
					alt="flèche vers le haut"
					onClick={toggleDropdown}
				/>
				) : (
				<Img
					src={downArrow}
					alt="flèche vers le bas"
					onClick={toggleDropdown}
				/>
				)}
            </HeadingContainer>
			<Children accomodation={accomodation} isOpen={isOpen}>
				{isOpen && displayChildren(children)}
			</Children>
		</MainContainer>
	);
};

export default Dropdown;
