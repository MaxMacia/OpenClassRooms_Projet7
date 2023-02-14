import { Container, TitleContainer, Error404, Title, StyledLink } from "./NotFound.styles";

const NotFound = () => {
    return (
        <Container>
            <TitleContainer>
                <Error404>404</Error404>
                <Title>Oups! La page que vous demandez n'existe pas.</Title>
            </TitleContainer>
            <StyledLink to='/Projet_OpenClassrooms_Kasa'>Retourner sur la page d'accueil</StyledLink>
        </Container>
    );
};

export default NotFound;