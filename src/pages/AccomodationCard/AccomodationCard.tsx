import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { accomodations, Accomodation } from "../../models/accomodations";
import ImageSlider from "../../components/ImageSlider";
import Tag from "../../components/Tag";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

const AccomodationCardContainer = styled.div`
    margin: 0 auto;
    width: 85%;
`;

const ImageSliderContainer = styled.div`
    width: 100%;
    height: 415px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: ${colors.primary};
`;

const Location = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: ${colors.primary};
`;

const AccomodationCard = () => {
    const params = useParams();
    const [accomodation, setAccomodation] = useState<Accomodation|null>(null);

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
                <ImageSlider slides={accomodation.pictures} />
            </ImageSliderContainer>
            <div>
                <div>
                    <Title>{accomodation.title}</Title>
                    <Location>{accomodation.location}</Location>
                </div>
                <div>
                    {accomodation.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
            <div>
                <Host host={accomodation.host} />
                <Rate rating={accomodation.rating} />
            </div>
        </AccomodationCardContainer>
        ) : (<div></div>)}
    </div>);
};

export default AccomodationCard;