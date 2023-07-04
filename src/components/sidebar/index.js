import React, { useState } from "react";

import menuItem from "../../utils/menuItem";

import { FaBars } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "./Styles.sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div style={{ width: isOpen ? "330px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            MANAGE COURSES
          </h1>
          <div
            style={{ marginLeft: isOpen ? "5px" : "0px", cursor: "pointer" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div
          style={{ display: !isOpen && "none" }}
          className="sidebar-user-place"
        >
          <img
            className="sidebar-avatar"
            src={require("../../assets/avatar.png")}
          />

          <span className="avatar-name">John Doe</span>
          <span className="avatar-call">Admin</span>
        </div>
        <div className="menuitem-container">
          <div className="pages-router-container">
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={isOpen ? "link-open" : "link"}
                activeclassname="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
          <NavLink
            style={{ width: isOpen ? "150px" : "auto" }}
            className={"logout-container"}
            to={"/login"}
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Logout
            </div>
            <div className="icon">
              <MdLogout size={20} />
            </div>
          </NavLink>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
