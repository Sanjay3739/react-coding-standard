import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import MoonIcon from "./svg/moon.svg";
import Hamburger from "./svg/hamburger.svg";
import { Button, Stack } from "@mui/material";
import { deleteUserDataFromIndexedDB } from "../../../store/indexDb";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  userName: string;
  email: string;
}

interface NavbarProps {
  user: { user: User } | null;
  userId: number | null;
}

const Navbar: React.FC<NavbarProps> = ({ user, userId }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleLogout = () => {
    if (userId !== null) {
      // Delete user data from IndexedDB
      deleteUserDataFromIndexedDB(userId);
      navigate("/");
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
              {user?.user.userName ?? "Loading"}
            </span>
            <Button
              variant="outlined"
              className="button custom-button"
              onClick={handleLogout}
            >
              Logout
            </Button>
            <Button variant="outlined" onClick={toggleMode} className="button">
              <img src={MoonIcon} alt="MoonIcon" />
            </Button>
          </Stack>{" "}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
