import { useState } from "react";
import { Header } from "./styled";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";

export function MyHeader() {
  const [theme, setTheme] = useState("darkTheme");
  const [toggleImage, setToggleImage] = useState(moon);

  function toggleTheme() {
    toggleImage === moon ? setToggleImage(sun) : setToggleImage(moon);
  }

  return (
    <Header>
      <h1>TODO</h1>
      <img src={toggleImage} alt="Moon Image" onClick={toggleTheme} />
    </Header>
  );
}
