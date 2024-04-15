import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import MoonIcon from "./svg/moon.svg";
import Hamburger from "./svg/hamburger.svg";
import { Button, Stack } from "@mui/material";
import { deleteUserDataFromIndexedDB } from "../../../store/indexDb";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LogoutApi } from "../../../services/AuthApi/logout";
import { NavbarProps } from "./state";

const Navbar: React.FC<NavbarProps> = ({ user, userId }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleLogout = async () => {
    if (userId !== null && user.token) {
      try {
        const response = await LogoutApi(user.token);
        if (response.success) {
          deleteUserDataFromIndexedDB(userId);
          navigate("/");
          toast.success(response.message
          );
        } else {
          toast.error("Failed to logout.");
        }
      } catch (error) {
        console.error("Error logging out:", error);
        toast.error("An error occurred.");
      }
    }
  };

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Set the body class based on the darkMode state
  document.body.className = darkMode ? "dark" : "light";
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={Logo} className="logo" title="image" />
        </div>
        <div className="navbar-right">
          <Stack spacing={2} direction="row">
            <Button className="hamburger">
              <img src={Hamburger} alt="Hamburger" />
            </Button>
            <span className="admin-name">
              {user?.userName ?? "Loading"}
            </span>

            <button className="border-btn" onClick={handleLogout}>
              Logout
            </button>
            <Button variant="outlined" onClick={toggleMode} className="border-btn">
              <img src={MoonIcon} alt="MoonIcon" />
            </Button>
          </Stack>{" "}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
