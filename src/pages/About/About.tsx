import Dropdown from "../../components/Dropdown";
import { Body, Section, BackgroundImg, BackgroundColor, DropdownContainer } from "./About.style";

const About = () => {
    return (
        <Body>
            <Section>
                <BackgroundImg data-testid="img" />
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