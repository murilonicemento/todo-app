import styled from "styled-components";
import * as colors from "../../config/colors";
import check from "../../assets/images/icon-check.svg";

export const Cards = styled.section`
  width: 90%;
  margin-top: -20px;
  font-size: 14px;
  color: ${colors.darkTheme.fontColor};

  ul li {
    list-style: none;
  }

  .card {
    width: 100%;
    height: 50px;
    background-color: ${colors.darkTheme.cardColor};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 18px;
    border-bottom: 1px solid ${colors.darkTheme.placeholderColor};
  }

  input {
    background-color: ${colors.darkTheme.cardColor};
    color: ${colors.darkTheme.placeholderColor};
    border-radius: 4px;
  }

  .card input {
    display: none;
  }

  .card input + label:before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: ${colors.darkTheme.cardColor};
    border: 1px solid ${colors.darkTheme.buttonsColor};
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .card input:checked + label:before {
    background-image: url(${check});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${colors.darkTheme.buttonsColor};
    border-radius: 50%;
  }

  ul li div:first-child {
    border-radius: 0px;
  }

  ul li:first-child div {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 5px;
    margin-top: 5px;
  }

  img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

export const Status = styled.div`
  height: 50px;
  background-color: ${colors.darkTheme.cardColor};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  color: ${colors.darkTheme.placeholderColor};

  button {
    background-color: ${colors.darkTheme.cardColor};
    font-family: "Josefin Sans", sans-serif;
    color: ${colors.darkTheme.placeholderColor};
    cursor: pointer;

    &:hover {
      color: ${colors.buttonSelected};
    }
  }
`;
