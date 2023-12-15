import React from "react";
import { Link } from "react-router-dom";
import "../../components/Category/Category";
import Nav from "../../components/Nav/Nav";
import HelpIcon from "../../components/Advice/HelpIcon.png";
import Avatar from "./Avatar.png";
import "./ProfilePage.css";

function Profilepage() {
  const profileInfo = [
    { label: "Красавчик" },
    { label: "Баланс", value: "£100" },
    { label: "Рівень", value: "досвідчений" },
    { label: "Досвід", value: "1000xp" },
  ];

  return (
    <div class="flex">
      <Nav backLink="/" />
      <div className="AvatarIcon">
        <img src={Avatar} width="200px" height="200px" alt="Avatar.png" />
      </div>

      {profileInfo.map((info, index) => (
        <div key={index} className="flex-container">
          <div className="category">
            <div className="box">
              <div className="text">
                {info.label}
                {info.value ? `: ${info.value}` : ""}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="HelpIcon">
        <img src={HelpIcon} width="50px" height="50px" alt="HelpIcon.png" />
      </div>
      <Link to="profile"></Link>
    </div>
  );
}

export default Profilepage;
