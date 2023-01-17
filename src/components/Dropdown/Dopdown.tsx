import { useState } from 'react';
import downArrow from '../../assets/down-arrow.svg';
import upArrow from '../../assets/up-arrow.svg';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

const HeadingContainer = styled.div<{ accomodation: boolean }>`
	background-color: ${colors.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;

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

type Props = {
	heading: string,
	children: string
};

const Dropdown = ({ heading, children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<HeadingContainer accomodation>
                <Heading accomodation>{heading}</Heading>
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
			<div>
				{isOpen && children}
			</div>
		</div>
	);
};

export default Dropdown;
