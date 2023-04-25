import { Checklists } from "../../components/Checklists";
import { MyHeader } from "../../components/Header";
import { Main } from "./styled";

export function Home() {
  return (
    <Main>
      <MyHeader />
      <input type="text" placeholder="Create a new todo..." />
      <Checklists />
    </Main>
  );
}
