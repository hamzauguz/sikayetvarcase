import React from "react";
import "./Styles.mobiletable.css";
import tableHeaderItem from "../../apis/tableHeaderItem";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const MobileTable = ({ contact, handleEditClick, handleDeleteClick }) => {
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
        <span>{contact.firstName}</span>
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.domain}</span>
        <span>{contact.university}</span>
        <span>
          <BsPencil
            onClick={(event) => handleEditClick(event, contact)}
            cursor={"pointer"}
            color="#FEAF00"
            size={20}
          />
          <AiOutlineDelete
            onClick={() => handleDeleteClick(contact.id)}
            cursor={"pointer"}
            color="#FEAF00"
            size={20}
          />
        </span>
      </div>
    </div>
  );
};

export default MobileTable;
