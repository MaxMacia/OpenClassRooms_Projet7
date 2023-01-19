import fullStar from '../../assets/full-star.svg';
import emptyStar from '../../assets/empty-star.svg';
import styled from 'styled-components';

const StarContainer = styled.div`
    display: flex;
`;

const Img = styled.img`
    margin-left: 2px;
    @media (max-width: 336px) {
        height: 15px;
    }
`;

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