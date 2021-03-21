import React from "react";
import "../assets/css/Sidenav.css";
import dashboard from "../assets/images/Dashboard icon.svg";
import SidenavMain from "./SidenavMain";

function Sidenav() {
  return (
    <>
      <div className="wrapper">
        <div className="sidenav">
          <div className="sidenav__menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="sidenav__dashboard">
            <div className="sidenav__dasboard__icon">
              <img src={dashboard} alt="dashboard-logo" />
            </div>
          </div>
        </div>

        <div className="sidenav__main">
          <SidenavMain />
        </div>
      </div>
    </>
  );
}

export default Sidenav;
