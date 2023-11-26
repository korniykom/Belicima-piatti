import { useState } from "react";
import "./Category.css";
import "../Step-List/Step-List.css";

const Category = () => {
  const { title, href } = useState("category");
  const icon = "face";

  return (
    <div className="category">
      <div className="category-title">
        <a href={href}>{title}</a>
      </div>
      <span className="category-icon material-symbols-outlined">{icon}</span>
    </div>
  );
};

export default Category;
