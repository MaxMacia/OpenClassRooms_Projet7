import { Background, Img, Paragraph, Thumb } from "./Card.style";

type Props = {
    title: string,
    cover: string
};

const Card = ({ title, cover }: Props) => {
    return (
        <Thumb>
            <Img
                src={cover}
                alt={`image ${title}`}
            />
            <Paragraph>{title}</Paragraph>
            <Background />
        </Thumb>
    );
};

export default Card;