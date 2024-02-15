import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserSignup.css";
import FormInput from "../components/FormInput";
import axios from 'axios'; // Import Axios

const UserSignup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9_ ]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords do not match.",
      label: "Confirm Password",
      validate: (value) => value === values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(values);
    // Validate the form
    let valid = true;
    const newErrors = { ...errors };

    inputs.forEach((input) => {
      if (input.required && !values[input.name]) {
        valid = false;
        newErrors[input.name] = `Please enter ${input.label.toLowerCase()}.`;
      } else if (input.pattern && !new RegExp(input.pattern).test(values[input.name])) {
        valid = false;
        newErrors[input.name] = input.errorMessage;
      } else if (input.validate && !input.validate(values[input.name])) {
        valid = false;
        newErrors[input.name] = input.errorMessage;
      } else {
        newErrors[input.name] = "";
      }
    });

    setErrors(newErrors);

    if (valid) {
      // If form is valid, make a POST request to create a new admin user
      axios.post('http://localhost:8080/api/v1/auth/register', {
email:values.email,name:values.username,password:values.password,confirmPassword:values.confirmPassword
      })
        .then(response => {
          console.log('Admin user created successfully:', response.data);
          // Optionally, you can redirect the user to a different page after successful signup
          // history.push('/admin/dashboard');
        })
        .catch(error => {
          console.error('Error creating admin user:', error);
          // Handle error and display appropriate message to the user
        });
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="lok">
      <div className="signup-card-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <br></br>
          <h1 className="signup-header">Sign Up</h1>
          <br></br>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              error={errors[input.name]}
            />
          ))}
          <p className="signup-login-link">
            Already have an account? <Link to='/AdminLogin'>Login</Link>
          </p>
          <button type="submit" className="signup-submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
