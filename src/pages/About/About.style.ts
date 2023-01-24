import bannerImg from "../../assets/banner-IMG-about.jpg";
import bannerImgMin from "../../assets/banner-IMG-about-min.jpg";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const Body = styled.div`
    width: 85%;
    margin: auto;
    @media (max-width: 336px) {
        width: 100%;
    }
`;

export const Section = styled.div`
    position: relative;
    height: 223px;
    border-radius: 25px;
    margin-bottom: 30px;
`;

export const BackgroundImg = styled.div`
    position: absolute;
    height: 223px;
    width: 100%;
    border-radius: 25px;
    background-image: url(${bannerImg});
    @media (max-width: 336px) {
        background-image: url(${bannerImgMin});
    }
`;

export const BackgroundColor = styled.div`
    position: absolute;
    height: 223px;
    width: 100%;
    border-radius: 25px;
    background-color: ${colors.black};
    opacity: 30%;
`;

export const DropdownContainer = styled.div`
    width: 80%;
    margin: auto;
    @media (max-width: 336px) {
        width: 100%;
    }
`;