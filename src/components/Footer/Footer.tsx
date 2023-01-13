import logo from '../../assets/LOGO-footer.svg'
import { Container, Img, Paragraph } from "./Footer.style";

const Footer = () => {
    return (
        <Container>
            <Img src={logo} alt="Logo kasa" />
            <Paragraph>© 2020 Kasa. All rights reserved</Paragraph>
        </Container>
    );
};

export default Footer;