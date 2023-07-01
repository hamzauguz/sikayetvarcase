import React from "react";
import { SlGraduation } from "react-icons/sl";

import "./Styles.customcard.css";

const CustomCard = () => {
  return (
    <div className="custom-card-container">
      <div className="custom-card-inside">
        <SlGraduation color="#74C1ED" size={34} />
        <span className="custom-card-title">Student</span>
        <span className="custom-card-number">22</span>
      </div>
    </div>
  );
};

export default CustomCard;
