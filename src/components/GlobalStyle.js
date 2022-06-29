import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* outline: 1px solid limegreen !important;
    background-color: rgb(0 100 0/0.1); */
}

body{
    background: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}


`;

export default GlobalStyle;
