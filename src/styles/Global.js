import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *, *::after, *::before{
        box-sizing: border-box;
    }

    body{
        font-family: "Barlow Semi Condensed", sans-serif;
        margin: 0;
        padding: 0;
    }
`;
