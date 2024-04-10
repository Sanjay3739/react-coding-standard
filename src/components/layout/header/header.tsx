import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import { fetchUserFromIndexedDB } from "../../../store/indexDb";
import Navbar from "./navbar";

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();
  const [user, setUser] = useState<any>(null);
  const id = location.pathname.split("/").pop();
  const userId = id !== undefined ? parseInt(id, 10) : undefined;

  useEffect(() => {
    setActiveItem("");
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (userId !== undefined) {
        const savedUser = await fetchUserFromIndexedDB(userId);
        setUser(savedUser);
      }
    }
    fetchData();
  }, [userId]);
  const handleItemClick = (item: any) => {
    setActiveItem(item);
  };
 
  return (
    <>
      {" "}
      <div className="navContainer">
        <Navbar user={user} userId={userId ?? null} />
        <hr className="hr_line" />
        <ul className="nav">
          <li className={activeItem === "Dashboard" ? "active" : ""}>
            <Link
              className="link"
              to={`/dashboard/${userId}`}
              onClick={() => handleItemClick("Dashboard")}
            >
              Dashboard
            </Link>
          </li>
          <li className={activeItem === "profile" ? "active" : ""}>
            <Link
              className="link"
              to={`/profile/${userId}`}
              onClick={() => handleItemClick("profile")}
            >
              My Profile
            </Link>
          </li>
          <li className={activeItem === "provider" ? "active" : ""}>
            <Link
              className="link"
              to={`/providers/${userId}`}
              onClick={() => handleItemClick("provider")}
            >
              Providers
            </Link>
          </li>
          <li className={activeItem === "partner" ? "active" : ""}>
            <Link
              className="link"
              to={`/partner/${userId}`}
              onClick={() => handleItemClick("partner")}
            >
              Partner
            </Link>
          </li>
          <li className={activeItem === "access" ? "active" : ""}>
            <Link
              className="link"
              to={`/access/${userId}`}
              onClick={() => handleItemClick("access")}
            >
              Access
            </Link>
          </li>
          <li className={activeItem === "record" ? "active" : ""}>
            <Link
              className="link"
              to={`/records/${userId}`}
              onClick={() => handleItemClick("record")}
            >
              Records
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
