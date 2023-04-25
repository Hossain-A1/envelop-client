import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import FormControl from "../components/FormControl";
import Button from "../components/Button";
import { useSignup } from "../hooks/useSignup";
import ErrorMessage from "../components/ErrorMessage";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();

    await signup(formFields.name, formFields.email, formFields.password);
  

    // clear form fields-------------
  
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-10 xl:mt-20 max-md:mt-0">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register..."} />

        <FormControl
          label="name"
          labelText="name"
          inputType="text"
          placeholder="Write your name."
          formFields={formFields}
          setFormFields={setFormFields}
        />
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
        <Button btnText={isLoading ? "Registering.." : "Register" } submit />
      {error && <ErrorMessage error={error}/>}
      </form>  
    </div>
  );
};

export default React.memo(Register);
