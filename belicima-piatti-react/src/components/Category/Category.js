
import "./Category.css";
export default function Category({category, active}) {
  return (
    <div className="flex-container">
      <div className="category">
        <div className= {active ? "categoryChoosenBox" : "box"}>
          <div className="ticked">
            <span class="material-symbols-outlined">done</span>
          </div>
          <div className={active ? "categoryChoosenText" : "text"}>{category}</div>
        </div>
      </div>
    </div>
  );
}
