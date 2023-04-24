import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register flex flex-col justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register..."} />

        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formFields.name}
            onChange={(e) =>
              setFormFields({ ...formFields, name: e.target.value })
            }
            placeholder="Enter your name."
            className="py-2 px-6 rounded lg:w-[22rem] max-md::w-24 border border-violet-300 outline-none focus:border-violet-500 duration-300"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formFields.email}
            onChange={(e) =>
              setFormFields({ ...formFields, email: e.target.value })
            }
            placeholder="Enter your email."
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formFields.password}
            onChange={(e) =>
              setFormFields({ ...formFields, password: e.target.value })
            }
            placeholder="Enter your password"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
