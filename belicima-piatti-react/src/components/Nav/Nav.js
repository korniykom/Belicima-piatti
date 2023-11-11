import React from "react";
import { Link } from "react-router-dom"; // Імпорт компонента Link з React Router
import "./Nav.css";

export default function Nav({ backLink, title }) {
  return (
    <div className="nav">
      <div className="arrow_back-button">
        {backLink && (
          <Link to={backLink}>
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        )}
      </div>
      <span className="title">
        <strong>{title}</strong>
      </span>
      <div className="menu-button">
        <Link to="/menu">
          <span className="material-symbols-outlined">menu</span>
        </Link>
      </div>
    </div>
  );
}
