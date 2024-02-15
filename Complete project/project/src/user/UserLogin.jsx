import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css";
import FormInput from "../components/FormInput";
import axios from 'axios'
const UserLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
  ];
  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      // Add other headers if needed
    },
    validateStatus: (status) => status < 500, // Resolve only if the status code is less than 500
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform email validation here if necessary
      // Define validateEmail function or remove the call if not needed

      const response = await axiosInstance.post(
        'http://localhost:8080/api/v1/auth/login',
        values
      );

      const token = response.data.token;
      localStorage.setItem('token', token);

      const { email, password } = values;
      if (email === 'admin@gmail.com' && password === 'Admin@123') {
        navigate('/UserHome');
      } else if (response.data.role === 'ADMIN') {
        navigate('/UserHome');
      } else {
        navigate('/UserHome');
      }

      console.log('Login successful:', response.data);
      sessionStorage.setItem('isLoggedIn', 'true');
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error, show an error message, etc.
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="appadmin">
      <form onSubmit={handleSubmit}>
        <br></br>
        <h1 className="lh">User_Login</h1>
        <br></br>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <p>
          Don't have an account? <Link to='/signupad'>Sign up</Link>
        </p>
        <button type="submit" className="logb1a">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
