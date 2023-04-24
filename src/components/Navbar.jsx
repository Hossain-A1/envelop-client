import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="py-10 flex justify-between">
      <div className="logo">
        <Link to="/" className="text-2xl font-semibold hover:text-violet-500">Envelop</Link>
      </div>

      <nav >
        <div className="flex gap-5">
          <Link to="login" className="hover:text-violet-500 hover:underline underline-offset-2 duration-300">Login</Link>
          <Link to="register" className="hover:text-rose-500 hover:underline underline-offset-2 duration-300">Register</Link>
        </div>

        {/* <div>
          <p>Logged in as: <span>Hossain</span></p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
