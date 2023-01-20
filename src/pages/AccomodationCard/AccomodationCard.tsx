import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { accomodations, Accomodation } from "../../models/accomodations";
import ImageSlider from "../../components/ImageSlider";
import Tag from "../../components/Tag";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Dropdown from "../../components/Dropdown";
import { AccomodationCardContainer, DropdownContainer, HostContainer, ImageSliderContainer, Location, MainBlock, TagContainer, Title, TitleContainer } from "./AccomodationCard.style";
import NotFound from "../NotFound";

const AccomodationCard = () => {
    const params = useParams();
    const [accomodation, setAccomodation] = useState<Accomodation | null>(null);

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
        ) : (<NotFound />)}
    </div>);
};

export default AccomodationCard;