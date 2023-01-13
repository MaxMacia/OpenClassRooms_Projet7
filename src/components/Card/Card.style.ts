import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const Thumb = styled.div`
    height: 340px;
    width: 340px;
    border-radius: 10px;
    position: relative;
    margin: auto;
    margin-bottom: 20px;
    @media (max-width: 336px) {
        height: 225px;
        width: 100%;
    }
`;

export const Img = styled.img`
    object-fit: cover;
    height: 340px;
    width: 340px;
    border-radius: 10px;
    @media (max-width: 336px) {
        height: 225px;
        width: 100%;
    }
`;

export const Background = styled.div`
    height: 340px;
    width: 340px;
    border-radius: 10px;  
    background: linear-gradient(${colors.white}, ${colors.black});
    position: absolute;
    top: 0px;
    opacity: 40%;
    @media (max-width: 336px) {
        height: 225px;
        width: 100%;
    }
`;

export const Paragraph = styled.p`
    position: absolute;
    z-index: 1;
    left: 10%;
    bottom: 13px;
    font-weight: 500;
    font-size: 18px;
    color: ${colors.white};
`;
