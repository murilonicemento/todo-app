import { useState } from "react";
import { Checklists } from "../../components/Checklists";
import { MyHeader } from "../../components/Header";
import { Main, Input, Filter } from "./styled";

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function saveTask() {
    localStorage.setItem("myToDoList", JSON.stringify(tasks));
  }

  return (
    <Main>
      <MyHeader />
      <Input>
        <div className="custom-checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
        <input
          type="text"
          name="input"
          id="input"
          placeholder="Create a new todo..."
          value={newTask}
          onChange={(event) => {
            event.preventDefault();
            setNewTask(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              setTasks([...tasks, newTask]);
              saveTask();
              setNewTask("");
            }
          }}
        />
      </Input>
      <Checklists tasks={tasks} setTasks={setTasks} />
      <Filter>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </Filter>
    </Main>
  );
}
