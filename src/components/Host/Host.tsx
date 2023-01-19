import { HostContainer, HostName, HostNameWrapper, HostPicture } from "./Host.style";

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