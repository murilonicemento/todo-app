import { Cards } from "./styled";
import cross from "../../assets/images/icon-cross.svg";

export function Checklists() {
  return (
    <Cards>
      <div className="card">
        <input type="checkbox" name="checkbox" id="checklist" />
        <label htmlFor="checklist">Lorem ipsum dolor sit amet.</label>
        <img src={cross} alt="Cross Icon" />
      </div>
    </Cards>
  );
}
