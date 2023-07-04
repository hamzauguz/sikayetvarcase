import React, { useState, Fragment, useEffect, useMemo } from "react";

import EditTableRow from "../../components/edit-table-row";
import ReadOnlyRow from "../../components/read-only-row";
import MobileTable from "../../components/mobile-table";
import MobileEditTable from "../../components/mobile-edit-table";
import TableFooter from "../../components/table-footer";

import useTable from "../../utils/useTable";
import tableHeaderItem from "../../utils/tableHeaderItem";

import { AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "@react-hook/media-query";

import { API_USERS_URL } from "../../apis";
import debounce from "lodash.debounce";
import axios from "../../services";

import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

import "./Styles.Students.css";

const Students = () => {
  const isMobile = useMediaQuery("(max-width: 750px)");

  const [addFormData, setAddFormData] = useState({
    image: "",
    firstName: "",
    email: "",
    phone: "",
    domain: "",
    university: "",
  });

  const [editFormData, setEditFormData] = useState({
    image: "",
    firstName: "",
    email: "",
    phone: "",
    domain: "",
    university: "",
  });

  const [editContactId, setEditContactId] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedOptionNumber, setSelectedOptionNumber] = useState(6);
  const [addItem, setAddItem] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const { slice, range } = useTable(usersData, page, selectedOptionNumber);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(API_USERS_URL + `/search?q=${searchData}`, {
          params: {
            skip: (page - 1) * selectedOptionNumber,
            limit: 110,
          },
        })
        .then((res) => {
          console.log("datas: ", res.data);
          setUsersData(res.data.users);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [selectedOptionNumber, searchData]);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = () => {
    const newContact = {
      id: 100,
      image:
        "https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg",
      firstName: addFormData.firstName,
      email: addFormData.email,
      phone: addFormData.phone,
      domain: addFormData.domain,
      university: addFormData.university,
    };

    console.log("usersData: ", usersData);

    axios
      .post(API_USERS_URL + "/add", newContact)
      .then((response) => {
        console.log(response);
        toast.success("Data successfully added");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      email: editFormData.email,
      phone: editFormData.phone,
      domain: editFormData.domain,
      university: editFormData.university,
    };

    Swal.fire({
      title: "Edit",
      text: "Would you like to change this event?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(API_USERS_URL + "/" + editContactId, editedContact)
          .then((response) => {
            console.log("response edit: ", response);
            toast.success("Data successfully changed");
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });

    setEditContactId(null);
    console.log("edit");
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      email: contact.email,
      phone: contact.phone,
      domain: contact.domain,
      university: contact.university,
    };

    setEditFormData(formValues);
  };

  const handleDeleteClick = (contactId) => {
    Swal.fire({
      title: "Delete",
      text: "Would you like to delete this event?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(API_USERS_URL + "/" + contactId)
          .then((response) => {
            console.log(response.data);
            toast.success("Data successfully deleted.");
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleSearch = (event) => {
    setPage(1);
    setSearchData(event.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  console.log("search: ", searchData);

  return (
    <div className="app-container">
      <Toaster position="top-right" reverseOrder={false} />
      <form className="table-form" onSubmit={handleEditFormSubmit}>
        <div className="table-header">
          <span className="students-title">Students</span>
          <div className="table-header-right">
            <div className="inputwithSearch">
              <input
                onChange={debouncedResults}
                className="form-header-input"
                placeholder="Search..."
              />
              <AiOutlineSearch size={18} className="form-header-searchicon" />
            </div>
            <span
              onClick={() => setAddItem(!addItem)}
              className="table-header-button"
            >
              ADD NEW STUDENT
            </span>
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
            {addItem && (
              <tr>
                <td></td>
                <td>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Enter a name..."
                    onChange={handleAddFormChange}
                    value={addFormData.firstName}
                  />
                </td>
                <td>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter an email..."
                    onChange={handleAddFormChange}
                    value={addFormData.email}
                  />
                </td>
                <td>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Enter a phone number..."
                    onChange={handleAddFormChange}
                    value={addFormData.phoneNumber}
                  />
                </td>
                <td>
                  <input
                    name="domain"
                    type="text"
                    placeholder="Enter an domain..."
                    onChange={handleAddFormChange}
                    value={addFormData.domain}
                  />
                </td>
                <td>
                  <input
                    name="university"
                    type="text"
                    required="required"
                    placeholder="Enter an university..."
                    onChange={handleAddFormChange}
                    value={addFormData.university}
                  />
                </td>
                <td>
                  <span
                    className="add-table-button"
                    onClick={() => handleAddFormSubmit()}
                  >
                    Add
                  </span>
                </td>
              </tr>
            )}
            {slice.map((contact, key) => (
              <Fragment key={key}>
                {editContactId === contact.id ? (
                  isMobile ? (
                    <MobileEditTable
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <EditTableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  )
                ) : isMobile ? (
                  <MobileTable
                    key={key}
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    // handleDeleteClick={openAlert}
                  />
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
      </form>
      <TableFooter
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
        setSelectedOptionNumber={setSelectedOptionNumber}
      />
    </div>
  );
};

export default Students;
