import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";
import "./SignUpForm.css";
import axios from "axios";
import { setToken } from "../utils";

const SignUpForm = () => {
  const history = useHistory();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  let schema = yup.object().shape({
    name: yup.string().min(2).required("Enter a username"),
    email: yup
      .string()
      .required("Please provide an email")
      .email("This is not a valid email")
      .required("Enter a monetary goal"),
    password: yup.string().min(5).required("You need to enter a password"),
  });

  useEffect(() => {
    schema.isValid(signUp).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [signUp]);

  const handleChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    validateForm(e);
  };

  const signUpCreds = (credentials) => {
    axios
      .post(
        "https://kickstarter-success-api.herokuapp.com/api/auth/register",
        credentials
      )
      .then((res) => {
        setToken();
        history.push("/login");
        console.log("Sign up: ", res);
      })
      .catch((err) => {
        alert(`Can't Sign up! ${err.apiMessage}`);
        console.error("bk: SignUp.js: signup: err.message: ", err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpCreds(signUp);
  };

  const validateForm = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => setErrors({ ...errors, [e.target.name]: "" }))
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  };

  return (
    <div className="SignUp__Component">
      <div className="Login__Content">
        Have an account? <NavLink to="/login">Log in</NavLink>
      </div>
      <div className="SignUp__InnerBox">
        <h3 className="Component__Title">Sign Up</h3>
        <form className="SignUp__Form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="name"
            onChange={handleChange}
            value={signUp.name}
          />
          <p className="errors">{errors.name}</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={signUp.email}
          />
          <p className="errors">{errors.email}</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={signUp.password}
          />
          <p className="errors">{errors.password}</p>
          <button
            disabled={buttonDisabled}
            className="Submit__Btn"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
