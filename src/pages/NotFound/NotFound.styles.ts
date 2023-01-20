import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export const Container = styled.div`
    height: 850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 336px) {
        height: 600px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 336px) {
        
    }
`;

export const Error404 = styled.h1`
    font-weight: 700;
    font-size: 288px;
    color: ${colors.primary};
    margin: 0;
    @media (max-width: 336px) {
        font-size: 96px;
        margin-top: 80px;
    }
`;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 36px;
    color: ${colors.primary};
    @media (max-width: 336px) {
        font-size: 18px;
        text-align: center;
    }
`;

export const StyledLink = styled(Link)`
    color: ${colors.primary};
    font-weight: 500;
    font-size: 19px;
    margin-bottom: 160px;
    @media (max-width: 336px) {
        font-size: 14px;
    }
`;