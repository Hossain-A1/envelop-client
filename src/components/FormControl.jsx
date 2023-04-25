import React from "react";

const FormControl = ({
  label,
  labelText,
  inputType,
  placeholder,
  formFields,
  setFormFields,
}) => {
  return (
    <div className="form-control flex flex-col gap-1">
      <label htmlFor={label} className="cursor-pointer">
        {labelText}
      </label>
      <input
        type={inputType}
        id={label}
        value={formFields[label]}
        onChange={(e) =>
          setFormFields({ ...formFields, [label]: e.target.value })
        }
        placeholder={placeholder}
        className="py-2 px-6 rounded lg:w-[22rem] max-md::w-24 border border-violet-300 outline-none focus:border-violet-500 duration-300"
      />
    </div>
  );
};

export default React.memo(FormControl);
