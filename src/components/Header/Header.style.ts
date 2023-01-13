import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 85%;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (max-width: 336px) {
        margin-top: 20px;
        width: 100%;
    }
`;

export const Img = styled.img`
    height: 68px;
    @media (max-width: 336px) {
        height: 47px;
    }
`;

export const Nav = styled.nav`
    width: 25%;
    @media (max-width: 336px) {
        width: 100%;
    }
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
`;

export const NavListItems = styled.li`
    list-style: none;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${colors.primary};
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 336px) {
        font-size: 12px;
        text-transform: uppercase;
    }
`;

export const NavLink = styled(Link)`
    all: unset;
    cursor: pointer;
`;