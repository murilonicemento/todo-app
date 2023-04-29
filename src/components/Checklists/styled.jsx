import styled from "styled-components";
import * as colors from "../../config/colors";
import check from "../../assets/images/icon-check.svg";

export const Cards = styled.section`
  width: 90%;
  display: grid;
  place-items: center;
  margin-top: -20px;
  color: ${colors.darkTheme.fontColor};

  input {
    background-color: ${colors.darkTheme.cardColor};
    color: ${colors.darkTheme.placeholderColor};
    border-radius: 4px;
  }

  .card {
    width: 100%;
    height: 50px;
    background-color: ${colors.darkTheme.cardColor};
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .card input {
    display: none;
  }

  .card input + label:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${colors.darkTheme.cardColor};
    border: none;
    display: inline-block;
    vertical-align: middle;
  }

  .card input:checked + label:before {
    background-image: url(${check});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${colors.darkTheme.buttonsColor};
    border-radius: 25px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 15px;
    height: 15px;
    margin-left: 95px;
  }
`;
