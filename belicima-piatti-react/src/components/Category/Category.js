import "./Category.css";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  return (
    <div className="flex-container">
      <div className="category">
        <div className="box">
          <div className="ticked">
            <span class="material-symbols-outlined">done</span>
          </div>
          <div className="text">{category}</div>
        </div>
      </div>
      <Link to="category"></Link>
    </div>
  );
}
