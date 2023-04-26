import styled from "styled-components";
import * as colors from "../../config/colors";

export const Main = styled.main`
  display: grid;
  place-items: center;

  input {
    all: unset;
    background-color: ${colors.darkTheme.cardColor};
    color: ${colors.darkTheme.placeholderColor};
    border-radius: 4px;

    ::placeholder {
      color: ${colors.darkTheme.placeholderColor};
    }
  }

  input[type="text"] {
    width: 80%;
    height: 40px;
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
    padding-left: 20px;
  }

  input[type="checkbox"] {
    width: 20%;
    height: 40px;
    margin-right: -18px;
    border: none;
  }
`;

export const Input = styled.section`
  display: flex;
  width: 90%;
  position: absolute;
  top: 140px;
`;
