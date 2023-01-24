import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { accomodations, Accomodation } from "../../models/accomodations";
import ImageSlider from "../../components/ImageSlider";
import Tag from "../../components/Tag";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Dropdown from "../../components/Dropdown";
import { AccomodationCardContainer, DropdownContainer, DropdownWrapper, HostContainer, ImageSliderContainer, Location, MainBlock, TagContainer, Title, TitleContainer } from "./AccomodationCard.style";
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
                    <Rate rating={parseInt(accomodation.rating)} />
                </HostContainer>
            </MainBlock>
            <DropdownContainer>
                <DropdownWrapper>
                    <Dropdown heading="Description" fixedHeight>
                        {accomodation.description}
                    </Dropdown>
                </DropdownWrapper>
                <DropdownWrapper>
                    <Dropdown heading="Equipements" fixedHeight>
                        {accomodation.equipments}
                    </Dropdown>
                </DropdownWrapper>
            </DropdownContainer>
        </AccomodationCardContainer>
        ) : (<NotFound />)}
    </div>);
};

export default AccomodationCard;