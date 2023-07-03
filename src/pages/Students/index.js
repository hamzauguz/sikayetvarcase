import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./Styles.Students.css";
import EditTableRow from "../../components/edit-table-row";
import ReadOnlyRow from "../../components/read-only-row";
import data from "../../mock-data.json";
import useTable from "../../utils/useTable";
import TableFooter from "../../components/table-footer";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "@react-hook/media-query";
import MobileTable from "../../components/mobile-table";
import tableHeaderItem from "../../apis/tableHeaderItem";

const Students = () => {
  const isMobile = useMediaQuery("(max-width: 750px)");

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [selectedOptionNumber, setSelectedOptionNumber] = useState(6);
  console.log(selectedOptionNumber);

  const { slice, range } = useTable(contacts, page, selectedOptionNumber);

  return (
    <div className="app-container">
      <form className="table-form" onSubmit={handleEditFormSubmit}>
        <div className="table-header">
          <span className="students-title">Students</span>
          <div className="table-header-right">
            <div className="inputwithSearch">
              <input className="form-header-input" placeholder="Search..." />
              <AiOutlineSearch size={18} className="form-header-searchicon" />
            </div>
            <span className="table-header-button">ADD NEW STUDENT</span>
          </div>
        </div>
        <table>
          {!isMobile && (
            <thead>
              <tr>
                {tableHeaderItem.map((item, key) => (
                  <th key={key}>{item.title}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {slice.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditTableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : isMobile ? (
                  <MobileTable contact={contact} />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
          setSelectedOptionNumber={setSelectedOptionNumber}
        />
      </form>

      {/* <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form> */}
    </div>
  );
};

export default Students;
