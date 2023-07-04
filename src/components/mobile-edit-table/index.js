import React from "react";
import "./Styles.mobileedittable.css";
import tableHeaderItem from "../../apis/tableHeaderItem";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const MobileEditTable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <div className="mobile-table-container">
      <div className="mobile-header">
        {tableHeaderItem.map((item, key) => (
          <span
            className={`table-header-item edit-mobile-table  header-img-${key}`}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className="mobile-desc">
        <img className="mobile-desc-img " src={editFormData.image} />
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        />
        <input
          required="required"
          placeholder="Enter an domain..."
          name="domain"
          value={editFormData.domain}
          onChange={handleEditFormChange}
        />
        <input
          required="required"
          placeholder="Enter an university..."
          name="university"
          value={editFormData.university}
          onChange={handleEditFormChange}
        />
        {/* <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        /> */}
        {/* <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.domain}</span>
        <span>{contact.university}</span> */}
        {/* <span>
        
        </span> */}
        <div>
          <button style={{ marginRight: 10 }} type="submit">
            Save
          </button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileEditTable;
