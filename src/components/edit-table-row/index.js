import React from "react";
import "./Styles.edittablerow.css";

const EditTableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          required="required"
          placeholder="Enter an domain..."
          name="domain"
          value={editFormData.domain}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          required="required"
          placeholder="Enter an university..."
          name="university"
          value={editFormData.university}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="last-butons-container">
        <button
          className="edit-table-button"
          style={{ marginRight: 10 }}
          type="submit"
        >
          Save
        </button>
        <button
          className="edit-table-button"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditTableRow;
