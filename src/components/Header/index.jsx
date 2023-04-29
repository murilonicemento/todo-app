import { useState } from "react";
import { Container, Header } from "./styled";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";

export function MyHeader() {
  const [toggleImage, setToggleImage] = useState(sun);

  function toggleTheme() {
    toggleImage === moon ? setToggleImage(sun) : setToggleImage(moon);
  }

  return (
    <Container>
      <Header>
        <h1>TODO</h1>
        <img src={toggleImage} alt="Sun Image" onClick={toggleTheme} />
      </Header>
    </Container>
  );
}
