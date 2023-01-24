import logo from '../../assets/LOGO-header.svg';
import { Container, Img, Nav, NavLink, NavList, NavListItems } from './Header.style';


const Header = () => {
	return (
		<Container>
			<Img data-testid="logo-header" src={logo} alt="Logo kasa" />
			<Nav>
				<NavList>
					<NavListItems>
						<NavLink to="/">
							Accueil
						</NavLink>
					</NavListItems>
					<NavListItems>
						<NavLink to="/about">
							A Propos
						</NavLink>
					</NavListItems>
				</NavList>
			</Nav>
		</Container>
	);
};

export default Header;
