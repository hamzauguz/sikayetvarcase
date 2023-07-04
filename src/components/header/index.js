import React from "react";

import { PiCaretCircleLeftBold } from "react-icons/pi";
import { GrNotification } from "react-icons/gr";

import "./Styles.header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inside">
        <PiCaretCircleLeftBold cursor={"pointer"} size={25} color="#C4C4C4" />
        <GrNotification cursor={"pointer"} size={22} color="#C4C4C4" />
      </div>
    </div>
  );
};

export default Header;
