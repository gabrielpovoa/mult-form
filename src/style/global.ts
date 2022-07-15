import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        text-transform: capitalize;
        transition: all .3s linear;
        outline: none;
    }
    html {
        overflow-x: hidden;
    }
    body {
        font-family: 'Nunito', sans-serif;
    }
`;