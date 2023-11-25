import React, { useState } from 'react';
import "./SideNav.css";
import {FaBars} from 'react-icons/fa';
const SideNav = () =>
{
   const [Nav, setNav] = useState(false)
   return <div class = "SideNavContainer"><FaBars size = "5vh" className='SideNavIcon' onClick={()=>setNav(!Nav)}/>
   <div className = {Nav ? "Active" : "SideNavMenu"}>
     <div className = "insideSideNav">
      <h2 className='SideNavMenuItem'>Menu</h2>
      </div>
   </div>
   </div>;
}
export default SideNav;