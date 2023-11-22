import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import SideNav from "../SideNav/SideNav";

export default function Nav({ backLink, title }) {
  return (
    <div className="nav">
      <div className="arrow_back-button">
        {backLink && (
          <Link to={backLink}>
            <p><span className="material-symbols-outlined">arrow_back</span></p>
          </Link>
        )}
      </div>
      <span className="title">
        <strong>{title}</strong>
      </span>
      <SideNav/>
    </div>
  );
}
