import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        width: 100vw;
        font-family: 'Lexend Deca', sans-serif;
    }

    .root{
        min-height: 100vh;
    }

`;

export default GlobalStyle;
