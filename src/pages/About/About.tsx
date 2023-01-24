import bannerImg from "../../assets/banner-IMG-about.jpg";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";
import Dropdown from "../../components/Dropdown";

const Body = styled.div`
    width: 85%;
    margin: auto;
`;

const Section = styled.div`
    position: relative;
    height: 223px;
    border-radius: 25px;
`;

const BackgroundImg = styled.div`
    position: absolute;
    height: 223px;
    width: 100%;
    border-radius: 25px;
    background-image: url(${bannerImg});
`;

const BackgroundColor = styled.div`
    position: absolute;
    height: 223px;
    width: 100%;
    border-radius: 25px;
    background-color: ${colors.black};
    opacity: 30%;
`;

const About = () => {
    return (
        <Body>
            <Section>
                <BackgroundImg />
                <BackgroundColor />
            </Section>
            <div>
                <Dropdown heading="Fiabilité" fixedHeight={false}>
                    children
                </Dropdown>
                <Dropdown heading="Respect" fixedHeight={false}>
                    children
                </Dropdown>
                <Dropdown heading="Service" fixedHeight={false}>
                    children
                </Dropdown>
                <Dropdown heading="Sécurité" fixedHeight={false}>
                    children
                </Dropdown>
            </div>
        </Body>
    );
};

export default About;