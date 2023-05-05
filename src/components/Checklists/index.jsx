import { useState } from "react";
import PropTypes from "prop-types";
import { Cards, Status } from "./styled";
import cross from "../../assets/images/icon-cross.svg";

export function Checklists({ tasks, setTasks }) {
  // const [active, setActive] = useState(true);

  function handleDelete(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem("myToDoList", JSON.stringify(newTasks));
  }

  return (
    <Cards>
      <ul>
        {tasks.map((value, index) => (
          <li key={index}>
            <div className="card">
              <input
                type="checkbox"
                name="checkbox"
                // checked={active}
                id={`checklist-${index}`}
              />
              <label htmlFor={`checklist-${index}`}>{value}</label>
              <img
                src={cross}
                alt="Cross Icon"
                onClick={() => handleDelete(index)}
              />
            </div>
          </li>
        ))}
      </ul>
      <Status>
        <p>{tasks.length} items left</p>
        <button
          onClick={(event) => {
            event.preventDefault();
            setTasks([]);
            localStorage.removeItem("myToDoList");
          }}
        >
          Clear Completed
        </button>
      </Status>
    </Cards>
  );
}

Checklists.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};
