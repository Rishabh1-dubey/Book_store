import React from "react";

const InputField = ({ label, name, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      )}
    </div>
  );
};

export default InputField;
