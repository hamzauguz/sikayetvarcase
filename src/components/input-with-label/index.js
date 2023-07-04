import React from "react";

import "./Styles.inputwithlabel.css";

const InputWithLabel = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  containerStyle,
  labelStyle,
  inputStyle,
}) => {
  return (
    <div className={`inputwithlabelContainer ${containerStyle}`}>
      <span className={`label-iwlc ${labelStyle}`}>{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`input-iwlc ${inputStyle}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWithLabel;
