import { Link } from "react-router-dom";
import { Background, Img, Paragraph, Thumb } from "./Card.style";

type Props = {
    id: string,
    title: string,
    cover: string
};

const Card = ({ id, title, cover }: Props) => {
    return (
        <Thumb>
            <Link to={`/Projet_OpenClassrooms_Kasa/${id}`}>
                <Img
                    src={cover}
                    alt={`image ${title}`}
                />
                <Paragraph>{title}</Paragraph>
                <Background />
            </Link>
        </Thumb>
    );
};

export default Card;