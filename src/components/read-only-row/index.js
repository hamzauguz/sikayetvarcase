import React from "react";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import "./Styles.readonlyrow.css";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="table-item">
      <td className="table-avatar-image-container">
        <img className="table-avatar-image" src={contact.image} />
      </td>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.website}</td>
      <td>{contact.email}</td>
      <td>
        <BsPencil
          size={20}
          onClick={(event) => handleEditClick(event, contact)}
          color="#FEAF00"
          cursor={"pointer"}
        />
        <AiOutlineDelete
          style={{ marginLeft: 30 }}
          size={20}
          onClick={() => handleDeleteClick(contact.id)}
          color="#FEAF00"
          cursor={"pointer"}
        />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
