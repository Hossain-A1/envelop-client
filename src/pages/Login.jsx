import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import FormControl from "../components/FormControl";
import Button from "../components/Button";

const Register = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formFields);

    // clear form fields-------------
    setFormFields({
      email: "",
      password: "",
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-10 xl:mt-20 max-md:mt-0">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <SectionTitle title={"Login..."} />

        <FormControl
          label="email"
          labelText="Email Address"
          inputType="email"
          placeholder="Enter your email."
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <FormControl
          label="password"
          labelText="Password"
          inputType="password"
          placeholder="Enter your password."
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <Button btnText="Login.." submit />
      </form>
    </div>
  );
};

export default Register;
