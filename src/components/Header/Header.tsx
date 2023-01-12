import { FunctionComponent } from 'react';
import LOGO from '../../assets/LOGO.svg';
import { Container, Img, Nav, NavList, NavListItems } from './Header.style';


const Header: FunctionComponent = () => {
	return (
		<Container>
			<Img src={LOGO} alt="Logo kasa" />
			<Nav>
				<NavList>
					<NavListItems>
						Accueil
					</NavListItems>
					<NavListItems>
						A Propos
					</NavListItems>
				</NavList>
			</Nav>
		</Container>
	);
};

export default Header;
