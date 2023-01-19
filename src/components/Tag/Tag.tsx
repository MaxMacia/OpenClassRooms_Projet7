import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

const TagStyle = styled.div`
    height: 25px;
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    margin-right: 10px;
    box-sizing: content-box;
    cursor: pointer;
    @media (max-width: 336px) {
        height: 18px;
        padding-bottom: 5px;
    }
`;

type Props = {
    tag: string
};

const Tag = ({ tag }: Props) => {
    return (
        <TagStyle>{tag}</TagStyle>
    );
};

export default Tag;