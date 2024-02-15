import React, { useState } from "react";
import "./FormInput.css"; // Assuming the correct CSS file name

const FormInput = ({ id, name, type, placeholder, errorMessage, label, pattern, required, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => (name === "confirmPassword" && setFocused(true))}
        pattern={pattern}
        required={required}
        focused={focused.toString()}
        // Removed the `validate` prop
      />
      {error && <span className="error-message">{error}</span>}
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
