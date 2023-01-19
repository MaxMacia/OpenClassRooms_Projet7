import { useState } from 'react';
import downArrow from '../../assets/down-arrow.svg';
import upArrow from '../../assets/up-arrow.svg';
import { Children, ChildrenItems, Heading, HeadingContainer, Img, MainContainer } from './Dropdown.style';

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
