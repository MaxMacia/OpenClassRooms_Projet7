import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const Container = styled.div`
    background-color: ${colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 66px;
    @media (max-width: 336px) {
        padding-top: 62px;
    } 
`;

export const Img = styled.img`
    height: 39.44px;
`;

export const Paragraph = styled.p`
    color: ${colors.white};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    @media (max-width: 336px) {
        font-size: 12px;
        padding-bottom: 62px;
    }    
`;