import { useState } from 'react';
import downArrow from '../../assets/down-arrow.svg';
import upArrow from '../../assets/up-arrow.svg';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

const MainContainer = styled.div`
	position: relative;
	width: 45%;
	height: 310px;
`;

const HeadingContainer = styled.div<{ accomodation: boolean }>`
	background-color: ${colors.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;
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
	position: absolute;
	${props => props.accomodation && props.isOpen && `
		height: 249px;
		border-radius: 10px;
		font-size: 18px
		
	`}
`;

const ListChildren =styled.li`
	list-style: none;
`;

type Props = {
	heading: string,
	accomodation: boolean,
	children: string|string[]
};

const Dropdown = ({ heading, accomodation, children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const displayChildren = (children: string|string[]) => {
		if (typeof children === 'string') {
			return children;
		} else {
			return (<ul>
				{children.map((child, index) => (
					<ListChildren key={index}>
						{child}
					</ListChildren>
				))}
			</ul>);
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
