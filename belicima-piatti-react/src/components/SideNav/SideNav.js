import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import { FaBars } from "react-icons/fa";

const SideNav = () => {
  const [Nav, setNav] = useState(false);
  return (
    <div class="SideNavContainer">
      <FaBars size="5vh" className="SideNavIcon" onClick={() => setNav(!Nav)} />
      <div className={Nav ? "Active" : "SideNavMenu"}>
        <div className="insideSideNav">
          <h2 className="SideNavMenuItem">Menu</h2>
          <Link class="menu-link" to="">
            Recipe of the day
          </Link>
          <Link
            class="menu-link"
            to="http://localhost:3000/dishes/my_recipes?page=1&pageSize=3"
          >
            My recipes
          </Link>
          <Link
            class="menu-link"
            to="http://localhost:3000/dishes/top?page=1&pageSize=3"
          >
            Top recipes
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
