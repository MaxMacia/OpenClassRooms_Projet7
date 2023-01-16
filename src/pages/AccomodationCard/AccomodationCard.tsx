import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { accomodations, Accomodation } from "../../models/accomodations";
import ImageSlider from "../../components/ImageSlider";
import styled from "styled-components";

const AccomodationCardContainer = styled.div`
    margin: 0 auto;
    width: 85%;
`;

const ImageSliderContainer = styled.div`
    width: 100%;
    height: 415px;
    margin: 0 auto;
`;

const AccomodationCard = () => {
    const params = useParams();
    const [accomodation, setAccomodation] = useState<Accomodation|null>(null);
    const slides = accomodation ? accomodation.pictures : [];

    useEffect(() => {
        accomodations.forEach((accomodation) => {
            if (params.id === accomodation.id) {
                setAccomodation(accomodation);
            }
        })
    }, [params.id]);

    return(<div>
        {accomodation ? (
        <AccomodationCardContainer>
            <ImageSliderContainer>
                <ImageSlider slides={slides} />
            </ImageSliderContainer>
        </AccomodationCardContainer>
        ) : (<div></div>)}
    </div>);
};

export default AccomodationCard;