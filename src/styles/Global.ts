import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --color-green:#27ae60;
        --grey-0:#F5F5F5;
        --grey-100:#c2c2c2;
        --grey-200:#a7a7a7;
        --grey-300:#828282;
        --grey-600:#333333;

        --font-family: 'Inter', sans-serif;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
        font-family: 'Inter', sans-serif;
    }
`;
