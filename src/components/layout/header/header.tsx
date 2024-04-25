import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import {
  fetchUserFromIndexedDB,
  getUserTokenFromLocalStorage,
} from "../../../store/indexDb";
import Navbar from "./navbar";

const Header: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const userId = getUserTokenFromLocalStorage();
  const [activeItem, setActiveItem] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const showHeader = [
    "/dashboard",
    "/profile",
    "/providers",
    "/partner",
    "/addPartner",
    "/records",
    "/access",
  ].includes(location.pathname);

  useEffect(() => {
    async function fetchData() {
      if (userId !== null) {
        const userIdNumber = parseInt(userId, 10);
        if (!isNaN(userIdNumber)) {
          const savedUser = await fetchUserFromIndexedDB(userIdNumber);
          setUser(savedUser);
        }
      }
    }
    fetchData();
  }, [userId]);

  // Define an array of menu items with their corresponding URLs
  const menuItems = [
    { name: "Dashboard", url: `/dashboard` },
    { name: "My Profile", url: `/profile` },
    { name: "Provider", url: `/providers` },
    { name: "Partner", url: `/partner` },
    { name: "Access", url: `/access` },
    { name: "Records", url: `/records` },
  ];

  function handleItemClick(index: any) {
    setActiveItem(index);
    setShowDropdown(false);
  }

  function handleMouseLeave() {
    setTimeout(() => {
      if (dropdownRef.current) {
        const isHovering = (dropdownRef.current as HTMLElement).matches(
          ":hover"
        );
        if (!isHovering) {
          setShowDropdown(false);
        }
      }
    }, 200);
  }

  return (
    <>
      {" "}
      {showHeader && (
        <div className="navContainer">
          <Navbar user={user} userId={userId ? parseInt(userId, 10) : null} />
          <hr className="hr_line" />
          <nav className="flex items-center menu-item">
            <div>
              <ul className="flex space-x-4">
                {menuItems.map((menuItem, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setShowDropdown(index === 2)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={menuItem.url}
                      className={`nav-link ${activeItem === index ? "active" : ""}`}
                      onClick={() => handleItemClick(index)}
                    >
                      {menuItem.name}
                    </Link>
                    {index === 2 && showDropdown && (
                      <div className="dropdown" ref={dropdownRef}>
                        <span className="dropdown-item">
                          Create React TSX file
                        </span>
                        <span className="dropdown-item">Create CSS file</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
