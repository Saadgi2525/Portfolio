import React from "react";

const FormInput = ({ label, name, type = "text", value, onChange, isTextarea = false }) => {
  return (
    <div>
      <label className="block font-medium">{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border-b-2 border-tblack outline-none p-2"
          rows="4"
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border-b-2 border-tblack outline-none p-2"
          required
        />
      )}
    </div>
  );
};

export default FormInput;
