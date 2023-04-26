import { Checklists } from "../../components/Checklists";
import { MyHeader } from "../../components/Header";
import { Main, Input } from "./styled";

export function Home() {
  return (
    <Main>
      <MyHeader />
      <Input>
        <input type="checkbox" placeholder="Create a new todo..." />
        <input type="text" name="" id="" />
      </Input>
      <Checklists />
    </Main>
  );
}
