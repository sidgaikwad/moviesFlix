import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  id,
  value,
  className,
  required,
  onChange,
}) => {
  return (
    <>
      <div className="flex flex-col p-5">
        <label htmlFor="" className="pb-[4px] font-semibold text-white">
          {label}
        </label>

        <input
          type={type}
          placeholder={placeholder}
		  onChange={onChange}
          id={id}
          value={value}
          required={required}
          className={`px-3 py-2 rounded-lg border-2 drop-shadow-sm outline-none  duration-200  focus:border-blue-600 focus:text-black  ${className} `}
        />
      </div>
    </>
  );
};

export default Input;
