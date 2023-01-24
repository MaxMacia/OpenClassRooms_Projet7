import bannerImg from "../../assets/banner-IMG-about.jpg";
import bannerImgMin from "../../assets/banner-IMG-about-min.jpg";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";
import Dropdown from "../../components/Dropdown";

const Body = styled.div`
    width: 85%;
    margin: auto;
    @media (max-width: 336px) {
        width: 100%;
    }
`;

const Section = styled.div`
    position: relative;
    height: 223px;
    border-radius: 25px;
    margin-bottom: 30px;
`;

const BackgroundImg = styled.div`
    position: absolute;
    height: 223px;
    width: 100%;
    border-radius: 25px;
    background-image: url(${bannerImg});
    @media (max-width: 336px) {
        background-image: url(${bannerImgMin});
    }
`;

const BackgroundColor = styled.div`
    position: absolute;
    height: 223px;
    width: 100%;
    border-radius: 25px;
    background-color: ${colors.black};
    opacity: 30%;
`;

const DropdownContainer = styled.div`
    width: 80%;
    margin: auto;
    @media (max-width: 336px) {
        width: 100%;
    }
`;

const About = () => {
    return (
        <Body>
            <Section>
                <BackgroundImg />
                <BackgroundColor />
            </Section>
            <DropdownContainer>
                <Dropdown heading="Fiabilité" fixedHeight={false}>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </Dropdown>
                <Dropdown heading="Respect" fixedHeight={false}>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Dropdown>
                <Dropdown heading="Service" fixedHeight={false}>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </Dropdown>
                <Dropdown heading="Sécurité" fixedHeight={false}>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Dropdown>
            </DropdownContainer>
        </Body>
    );
};

export default About;