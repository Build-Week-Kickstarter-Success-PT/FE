import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";
import "./LoginForm.css";
import { axiosWithAuth, setToken } from "../utils";

const LoginForm = () => {
  const history = useHistory();

  const [user, setUser] = useState({

    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({

    email: "",
    password: "",
  });

  let schema = yup.object().shape({

    email: yup
      .string()
      .required("Please provide an email")
      .email("This is not a valid email")
      .required("Enter a monetary goal"),
    password: yup.string().min(5).required("You need to enter a password"),
  });

  useEffect(() => {
    schema.isValid(user).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [user]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    validateForm(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCreds(user);
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

  const loginCreds = (credentials) => {
    axiosWithAuth()
      .post("/api/auth/login", credentials)
      .then((res) => {
        setToken(res.data.token);
        history.push(`/user/${res.data.auth.id}`);
        console.log(res);
      })
      .catch((err) =>
        console.error("bk: Login.js: login: err.message: ", err.message)
      );
  };

  return (
    <div className="Login__Component">
      <div className="Login__InnerBox">
        <h3 className="Component__Title">Log in</h3>
        <form className="Login__Form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
          <p className="errors">{errors.email}</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <p className="errors">{errors.password}</p>
          <NavLink style={{ fontSize: ".8rem", marginTop: "13px" }} to="">
            Forgot your password?
          </NavLink>
          <button
            disabled={buttonDisabled}
            className="Submit__Btn"
            type="submit"
          >
            Log in
          </button>
          <label className="RememberMe__Checkbox">
            <input type="checkbox" />
            Remember Me
          </label>
        </form>
      </div>
      <div className="SignUp__Content">
        New to Kickstarter SP? <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default LoginForm;