import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./header.scss";
import Logo from "../../../assets/logo.png";
import MoonIcon from "./svg/moon.svg";
import Hamburger from "./svg/hamburger.svg";

function Header() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  useEffect(() => {
    setActiveItem("Dashboard");
  }, []);

  const handleItemClick = (item: any) => {
    setActiveItem(item);
  };
  return (
    <>
      {" "}
      <div className="navContainer">
        <nav className="navbar">
          <div className="navbar-left">
            <img src={Logo} className="logo" title="image" />
          </div>
          <div className="navbar-right">
            <Stack spacing={2} direction="row">
              <Button className="hamburger">
              <img src={Hamburger} alt="Hamburger"  />
              </Button>
              <span className="admin-name">Admin: </span>
              <Button variant="outlined" className="button custom-button">
                Logout
              </Button>
              <Button variant="outlined" className="button">
              <img src={MoonIcon} alt="MoonIcon" />
              </Button>
            </Stack>{" "}
          </div>
        </nav>
        <hr className="hr_line" />
        <ul className="nav">
          <li className={activeItem === "Dashboard" ? "active" : ""}>
            <span onClick={() => handleItemClick("Dashboard")}>Dashboard</span>
          </li>
          <li className={activeItem === "profile" ? "active" : ""}>
            <span onClick={() => handleItemClick("profile")}>My Profile</span>
          </li>
          <li className={activeItem === "provider" ? "active" : ""}>
            <span onClick={() => handleItemClick("provider")}>Providers</span>
          </li>
          <li className={activeItem === "partner" ? "active" : ""}>
            <span onClick={() => handleItemClick("partner")}>Partner</span>
          </li>
          <li className={activeItem === "access" ? "active" : ""}>
            <span onClick={() => handleItemClick("access")}>Access</span>
          </li>

          <li className={activeItem === "record" ? "active" : ""}>
            <span onClick={() => handleItemClick("record")}>Records</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
