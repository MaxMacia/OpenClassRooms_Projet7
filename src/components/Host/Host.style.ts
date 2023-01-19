import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const HostContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    @media (max-width: 336px) {
        align-items: center;
    }
`;

export const HostNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    align-items: flex-end;
    padding-right: 5px;
    @media (max-width: 336px) {
        justify-content: center;
    }
`;

export const HostName = styled.p`
    height: 25px;
    margin: 0;
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 336px) {
        font-size: 12px;
        display: block;
        height: 20%;
    }
`;

export const HostPicture = styled.img`
    height: 64px;
    border-radius: 64px;
    @media (max-width: 336px) {
        height: 32px;
        margin-bottom: 5px;
    }
`;