import { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${colors.darkTheme.des};
    }
`;
