import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

const HostContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    @media (max-width: 336px) {
        align-items: center;
    }
`;

const HostNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    align-items: flex-end;
    padding-right: 5px;
    @media (max-width: 336px) {
        justify-content: center;
    }
`;

const HostName = styled.p`
    height: 25px;
    margin: 0;
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 336px) {
        font-size: 12px;
        display: block;
        height: 20%;
    }
`;

const HostPicture = styled.img`
    height: 64px;
    border-radius: 64px;
    @media (max-width: 336px) {
        height: 32px;
        margin-bottom: 5px;
    }
`;

type Props = {
    host: { name: string, picture: string }
};

const Host = ({ host }: Props) => {
    const firstName = host.name.split(' ')[0];
    const lastName = host.name.split(' ')[1];

    return (
        <HostContainer>
            <HostNameWrapper>
                <HostName>{firstName}</HostName>
                <HostName>{lastName}</HostName>
            </HostNameWrapper>
            <HostPicture src={host.picture} alt={`${host.name}`} />
        </HostContainer>
    );
};

export default Host;