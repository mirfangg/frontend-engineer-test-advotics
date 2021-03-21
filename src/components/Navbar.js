import React from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/images/advotics-logo-optimize.jpg";
import profile from "../assets/images/Profile.svg";
import logout from "../assets/images/logout.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="main__logo" src={logo} alt="advotics-main-logo" />
        <span>powered by</span>
        <span>
          <img className="second__logo" src={logo} alt="advotics-second-logo" />
        </span>
      </div>

      <div className="navbar__account">
        <div className="user__info">
          <span>Username</span>
          <span>Company Name</span>
        </div>
        <img className="profile__pict" src={profile} alt="profile-logo" />
        <img className="logout__sign" src={logout} alt="profile-logo" />
      </div>
    </nav>
  );
}

export default Navbar;
