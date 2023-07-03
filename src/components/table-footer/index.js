import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Styles.tablefooter.css";

const TableFooter = ({
  range,
  setPage,
  page,
  slice,
  selectItem,
  optionValue,
  optionTitle,
  setSelectedOptionNumber,
}) => {
  const [selectedOption, setSelectedOption] = useState(6);
  console.log("selectedOption: ", selectedOption);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionNumber(event.target.value);
  };

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  const options = [];
  for (let i = 3; i <= 6; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  console.log("range: ", range);
  return (
    <div className={"tableFooter"}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`button ${
            page === el ? "activeButton" : "inactiveButton"
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
      <div className="nextPre-buttons">
        <div className="nextPre-buttons-left">
          <button style={{ marginRight: 5 }}>Change</button>
          <select value={selectedOption} onChange={handleOptionChange}>
            {options}
          </select>
        </div>
        <div className="nextPre-buttons-left">
          <AiOutlineLeft
            onClick={() => {
              page != 1 && setPage(page - 1);
            }}
            cursor={"pointer"}
            size={22}
            style={{ marginRight: 15 }}
          />
          <AiOutlineRight
            onClick={() => {
              range.length != page && setPage(page + 1);
            }}
            cursor={"pointer"}
            size={22}
          />
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
