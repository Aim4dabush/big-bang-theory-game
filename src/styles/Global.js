import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");

    *, *::after, *::before{
        box-sizing: border-box;
    }

    body{
        font-family: "Barlow Semi Condensed", sans-serif;
        margin: 0;
        padding: 0;
    }
`;