import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        @media (max-width: 336px) {
            margin: auto;
            width: 95%;
        }
    }
`;

export default GlobalStyle;