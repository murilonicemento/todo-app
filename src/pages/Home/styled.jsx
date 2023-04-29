import styled from "styled-components";
import * as colors from "../../config/colors";
import check from "../../assets/images/icon-check.svg";

export const Main = styled.main`
  display: grid;
  place-items: center;

  input {
    background-color: ${colors.darkTheme.cardColor};
    color: ${colors.darkTheme.placeholderColor};
    border-radius: 4px;

    ::placeholder {
      font-size: 14px;
      color: ${colors.darkTheme.placeholderColor};
    }
  }

  input[type="text"] {
    width: 90%;
    height: 50px;
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .custom-checkbox {
    width: 12%;
    height: 50px;
    background-color: ${colors.darkTheme.cardColor};
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  .custom-checkbox input {
    display: none;
  }

  .custom-checkbox input + label:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${colors.darkTheme.cardColor};
    border: none;
    display: inline-block;
    vertical-align: middle;
  }

  .custom-checkbox input:checked + label:before {
    background-image: url(${check});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${colors.darkTheme.buttonsColor};
    border-radius: 25px;
  }
`;

export const Input = styled.section`
  display: flex;
  width: 90%;
  position: absolute;
  top: 120px;
`;
