import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";
import { FaBars } from "react-icons/fa";

const SideNav = () => {
  const [Nav, setNav] = useState(false);

  return (
    <div className="SideNavContainer">
      <FaBars size="5vh" className="SideNavIcon" onClick={() => setNav(!Nav)} />
      <div className={Nav ? "Active" : "SideNavMenu"}>
        <div className="insideSideNav">
          <h2 className="SideNavMenuItem">Menu</h2>
          <NavLink
            onClick={window.location.reload}
            className="menu-link"
            to="/dishdetail/7"
          >
            Recipe of the day
          </NavLink>
          <NavLink
            onClick={window.location.reload}
            className="menu-link"
            to="/dishes?pageSize=10&country=&category=%D0%9C%D0%BE%D1%97%20%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%B8&page=1"
          >
            My recipes
          </NavLink>
          <NavLink
            onClick={window.location.reload}
            className="menu-link"
            to="/dishes?pageSize=10&country=&category=Топ&page=1"
          >
            Top recipes
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
