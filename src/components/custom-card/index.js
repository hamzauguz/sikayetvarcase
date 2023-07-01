import React from "react";
import { SlGraduation } from "react-icons/sl";

import "./Styles.customcard.css";

const CustomCard = ({ icon, title, number, style, customCardStyle }) => {
  return (
    <div style={style} className={`custom-card-container ${customCardStyle}`}>
      <div className="custom-card-inside">
        {/* <SlGraduation color="#74C1ED" size={34} /> */}
        {icon}
        <span className="custom-card-title">{title}</span>
        <span className="custom-card-number">{number}</span>
      </div>
    </div>
  );
};

export default CustomCard;
