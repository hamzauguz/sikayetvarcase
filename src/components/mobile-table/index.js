import React from "react";
import "./Styles.mobiletable.css";
import tableHeaderItem from "../../apis/tableHeaderItem";

const MobileTable = ({ contact }) => {
  return (
    <div className="mobile-table-container">
      <div className="mobile-header">
        {tableHeaderItem.map((item, key) => (
          <span className={`table-header-item  header-img-${key}`}>
            {item.title}
          </span>
        ))}
      </div>
      <div className="mobile-desc">
        <img className="mobile-desc-img" src={contact.image} />
        <span>{contact.fullName}</span>
        <span>{contact.address}</span>
        <span>{contact.phoneNumber}</span>
        <span>{contact.website}</span>
        <span>{contact.email}</span>
        <span>edit delete</span>
      </div>
    </div>
  );
};

export default MobileTable;
