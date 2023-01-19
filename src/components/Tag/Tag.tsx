import { TagStyle } from "./Tag.style";

type Props = {
    tag: string
};

const Tag = ({ tag }: Props) => {
    return (
        <TagStyle>{tag}</TagStyle>
    );
};

export default Tag;