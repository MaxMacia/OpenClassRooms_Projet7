import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { accomodations, Accomodation } from "../../models/accomodations";
import ImageSlider from "../../components/ImageSlider";
import Tag from "../../components/Tag";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Dropdown from "../../components/Dropdown";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

const AccomodationCardContainer = styled.div`
    margin: 0 auto;
    width: 85%;
    display: flex;
    flex-direction: column;
    @media (max-width: 336px) {
        width: 100%;
    }
`;

const ImageSliderContainer = styled.div`
    width: 100%;
    height: 415px;
    margin: 0 auto;
    @media (max-width: 336px) {
        height: 255px;
    }
`;

const MainBlock = styled.div`
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

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: ${colors.primary};
    @media (max-width: 336px) {
        font-size: 18px;
    }
`;

const Location = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: ${colors.primary};
    @media (max-width: 336px) {
        font-size: 14px;
    }
`;

const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const HostContainer = styled.div`
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

const DropdownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 336px) {
        flex-direction: column;
    }
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
            <MainBlock>
                <TitleContainer>
                    <div>
                        <Title>{accomodation.title}</Title>
                        <Location>{accomodation.location}</Location>
                    </div>
                    <TagContainer>
                        {accomodation.tags.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))}
                    </TagContainer>
                </TitleContainer>
                <HostContainer>
                    <Host host={accomodation.host} />
                    <Rate rating={accomodation.rating} />
                </HostContainer>
            </MainBlock>
            <DropdownContainer>
                <Dropdown heading="Description" accomodation>
                    {accomodation.description}
                </Dropdown>
                <Dropdown heading="Equipements" accomodation>
                    {accomodation.equipments}
                </Dropdown>
            </DropdownContainer>
        </AccomodationCardContainer>
        ) : (<div></div>)}
    </div>);
};

export default AccomodationCard;