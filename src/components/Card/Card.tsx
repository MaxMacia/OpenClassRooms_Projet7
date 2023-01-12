import { FunctionComponent } from "react";
import Accomodation from "../../models/Accomodation";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

const Thumb = styled.div`
    height: 340px;
    width: 340px;
    border-radius: 10px;
    position: relative;
    margin: auto;
    margin-top: 20px;
`;

const Img = styled.img`
    object-fit: cover;
    height: 340px;
    width: 340px;
    border-radius: 10px;
`;

const Paragraph = styled.div`
    position: absolute;
    z-index: 1;
    left: 10px;
    bottom: 25px;
    font-weight: 500;
    font-size: 18px;
    color: ${colors.white};
`;

type Props = {
    accomodation: Accomodation
};

const Card: FunctionComponent<Props> = ({ accomodation }) => {
    return (
        <Thumb key={accomodation.id}>
            <Img src={accomodation.cover} alt={`image ${accomodation.title}`} />
            <Paragraph>{accomodation.title}</Paragraph>
        </Thumb>
    );
};

export default Card;