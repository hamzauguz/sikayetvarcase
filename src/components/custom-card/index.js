import React from "react";

import "./Styles.customcard.css";

const CustomCard = ({ icon, title, number, style, customCardStyle }) => {
  return (
    <div style={style} className={`custom-card-container ${customCardStyle}`}>
      <div className="custom-card-inside">
        {icon}
        <span className="custom-card-title">{title}</span>
        <span className="custom-card-number">{number}</span>
      </div>
    </div>
  );
};

export default CustomCard;
