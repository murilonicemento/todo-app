import { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
    }

    body {
        background: ${colors.darkTheme.backgroundColor};
        font-family: "Josefin Sans";
    }
`;
