import styled from 'styled-components';
import bannerImg from '../../assets/banner-IMG.jpg';
import bannerImgMin from '../../assets/banner-IMG-min.jpg';
import { colors } from '../../utils/styles/colors';

export const Body = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
    margin: auto;
    width: 85%;
    @media (max-width: 336px) {
        width: 100%;
    }
`;

export const Section = styled.div`
	position: relative;
    border-radius: 25px;
    height: 223px;
    width: 100%;
    @media (max-width: 336px) {
        height: 111px;
        border-radius: 10px;
    }
`;

export const BackgroundImg = styled.div`
    position: absolute;
    background-image: url(${bannerImg});
    border-radius: 25px;
    height: 223px;
    width: 100%;
    @media (max-width: 336px) {
        height: 111px;
        background-image: url(${bannerImgMin});
        border-radius: 10px;
    }
`;

export const BackgroundColor = styled.div`
    position: absolute;
    opacity: 30%;
    background-color: ${colors.black};
    border-radius: 25px;
    height: 223px;
    width: 100%;
    @media (max-width: 336px) {
        height: 111px;
        border-radius: 10px;
    }
`;

export const Heading = styled.div`
    position: absolute;
    left: 17%;
    top: 33%;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    color: ${colors.white};
    @media (max-width: 336px) {
        font-size: 18px;
        width: 200px;
        top: 30%;
        left: 10%;
    }
`;

export const Gallery = styled.div`
    background-color: ${colors.secondary};
    border-radius: 25px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    @media (max-width: 336px) {
        flex-wrap: nowrap;
        flex-direction: column;
        padding-left: 0;
        padding-right: 0px;
        padding-top: 0px;
        background-color: ${colors.white};
    }
    
`;