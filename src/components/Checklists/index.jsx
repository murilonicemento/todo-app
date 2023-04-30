import { useEffect } from "react";
import PropTypes from "prop-types";
import { Cards } from "./styled";
import cross from "../../assets/images/icon-cross.svg";

export function Checklists({ tasks, setTasks }) {
  function handleDelete(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem("myToDoList");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <Cards>
      <ul>
        {tasks.map((value, index) => (
          <li key={index}>
            <div className="card">
              <input
                type="checkbox"
                name="checkbox"
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
    </Cards>
  );
}

Checklists.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};
