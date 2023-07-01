import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { AiOutlineHome, AiOutlineDollarCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { RiFileChartLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Styles.sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <AiOutlineHome size={20} />,
    },
    {
      path: "/course",
      name: "Course",
      icon: <BsBookmark size={20} />,
    },
    {
      path: "/students",
      name: "Students",
      icon: <SlGraduation size={20} />,
    },
    {
      path: "/payment",
      name: "Payment",
      icon: <AiOutlineDollarCircle size={20} />,
    },
    {
      path: "/report",
      name: "Report",
      icon: <RiFileChartLine size={20} />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <GiSettingsKnobs size={20} />,
    },
  ];
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
