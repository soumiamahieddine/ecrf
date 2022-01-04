import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

}

/* button {
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #243153;
    background: transparent;
    color: white;
    transition: all 0.5 ease;
    &:hover{
        background-color:#243153;
        color: white;
    }
}  */
`;

export default GlobalStyle;
