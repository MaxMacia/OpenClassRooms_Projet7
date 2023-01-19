import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const AccomodationCardContainer = styled.div`
    margin: 0 auto;
    width: 85%;
    display: flex;
    flex-direction: column;
    @media (max-width: 336px) {
        width: 100%;
    }
`;

export const ImageSliderContainer = styled.div`
    width: 100%;
    height: 415px;
    margin: 0 auto;
    @media (max-width: 336px) {
        height: 255px;
    }
`;

export const MainBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 210px;
    @media (max-width: 336px) {
        flex-direction: column;
        justify-content: flex-start;
        height: 200px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: ${colors.primary};
    @media (max-width: 336px) {
        font-size: 18px;
    }
`;

export const Location = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: ${colors.primary};
    @media (max-width: 336px) {
        font-size: 14px;
    }
`;

export const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const HostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 90%;
    width: 17%;
    @media (max-width: 336px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export const DropdownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 336px) {
        flex-direction: column;
    }
`;