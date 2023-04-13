import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        list-style: none;
        text-decoration: none;
        outline: none;
    }

    body {
        overflow-x: hidden;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-family: "Poppins";
    }

    a {
        transition: .5s;
        cursor: pointer;
        color: ${(props) => props.theme.colors.text};
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
    width: 20px;
    }

    ::-webkit-scrollbar-track {
        background: #bdbdbd;
    }

    ::-webkit-scrollbar-thumb {
        background: white; 
        border-radius: 10px;
        transition: .5s;
        width: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #747474; 
    }
`;
