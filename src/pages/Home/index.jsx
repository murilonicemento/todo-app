import { Checklists } from "../../components/Checklists";
import { MyHeader } from "../../components/Header";
import { Main, Input } from "./styled";

export function Home() {
  return (
    <Main>
      <MyHeader />
      <Input>
        <div className="custom-checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
        <input type="text" name="" id="" placeholder="Create a new todo..." />
      </Input>
      <Checklists />
    </Main>
  );
}
