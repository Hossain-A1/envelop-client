import React from "react";

const Button = ({ btnText, submit, logout,handleLogout }) => {
  return (
    <button
    onClick={handleLogout ? handleLogout : null}
      type={submit ? "submit" : ""}
      className={`bg-violet-500 
    py-2 px-6 rounded text-white hover:bg-violet-600 duration-300  ${
      logout
        ? "bg-rose-500 hover:bg-rose-600"
        : "bg-violet-500  hover:bg-violet-600 mt-5"
    }`}
    >
      {btnText}
    </button>
  );
};

export default React.memo(Button);
