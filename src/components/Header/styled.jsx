import { useState } from "react";
import styled from "styled-components";
import bgDarkMobile from "../../assets/images/bg-mobile-dark.jpg";
import bgLightMobile from "../../assets/images/bg-mobile-light.jpg";
import bgDarkDesktop from "../../assets/images/bg-desktop-dark.jpg";
import bgLightDesktop from "../../assets/images/bg-desktop-light.jpg";

export const Header = styled.header`
  width: 100%;
  height: 200px;
  background-image: url(${bgDarkMobile});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    letter-spacing: 12px;
    margin-left: 20px;
  }

  img {
    margin-right: 20px;
    cursor: pointer;
  }
`;
