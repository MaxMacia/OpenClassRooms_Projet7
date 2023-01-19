import fullStar from '../../assets/full-star.svg';
import emptyStar from '../../assets/empty-star.svg';
import { Img, StarContainer } from './Rate.style';

type Props = {
    rating: string
};

const Rate = ({ rating }: Props) => {
    const ratingNum = parseInt(rating);
    const range = [1, 2, 3, 4, 5];
    
    return (
        <StarContainer>
            {range.map((rangeElt, index) => {
            return ratingNum > rangeElt ? (
            <Img
                src={fullStar}
                alt="étoile pleine"
                key={index}
            />
            ) : (
            <Img
                src={emptyStar}
                alt="étoile vide"
                key={index}
            />
            )
            })}
        </StarContainer>
    );
};

export default Rate;