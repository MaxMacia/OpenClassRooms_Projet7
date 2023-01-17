import fullStar from '../../assets/full-star.svg';
import emptyStar from '../../assets/empty-star.svg';

type Props = {
    rating: string
};

const Rate = ({ rating }: Props) => {
    const ratingNum = parseInt(rating);
    const range = [1, 2, 3, 4, 5];
    
    return (
        <div>
            {range.map((rangeElt, index) => {
            return ratingNum > rangeElt ? (
            <img
                src={fullStar}
                alt="étoile pleine"
                key={index}
            />
            ) : (
            <img
                src={emptyStar}
                alt="étoile vide"
                key={index}
            />
            )
            })}
        </div>
    );
};

export default Rate;