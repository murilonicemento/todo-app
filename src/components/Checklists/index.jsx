import PropTypes from "prop-types";
import { Cards } from "./styled";
import cross from "../../assets/images/icon-cross.svg";

export function Checklists({ tasks }) {
  return (
    <Cards>
      <ul>
        {tasks.map((tasks, index) => (
          <li key={tasks}>
            <div className="card">
              <input
                type="checkbox"
                name="checkbox"
                id={`checklist-${index}`}
              />
              <label htmlFor={`checklist-${index}`}>{tasks}</label>
              <img src={cross} alt="Cross Icon" />
            </div>
          </li>
        ))}
      </ul>
    </Cards>
  );
}

Checklists.propTypes = {
  tasks: PropTypes.array.isRequired,
};
