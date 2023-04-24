const Button = ({ btnText, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-violet-500 
    py-2 px-6 rounded text-white hover:bg-violet-600 duration-300 mt-5"
    >
      {btnText}
    </button>
  );
};

export default Button;
