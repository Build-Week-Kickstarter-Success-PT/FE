import React, {useState} from 'react';
import  {NavLink, useHistory} from "react-router-dom";
import "./SignUpForm.css";
import axios from 'axios';
import {setToken} from '../utils';

const SignUpForm = () => {

    const history = useHistory();


    const [signUp, setSignUp] = useState({
        name: "",
        email: "",
        password: ""
      });

      const handleChange = e => {
        setSignUp({...signUp, [e.target.name] : e.target.value})
   
     }

     const signUpCreds = (credentials) => {  axios.post("https://kickstarter-success-api.herokuapp.com/api/auth/register", credentials)
     .then(res => {
       setToken();
       history.push("/login");
         console.log(res);
     })  
     .catch(err =>
       console.error("bk: SignUp.js: signup: err.message: ", err.message)
     );
    }

    const handleSubmit = e => {

        e.preventDefault();
        signUpCreds(signUp);
  
  
      }

    return (
        <div className="SignUp__Component">
                <div className="Login__Content">
                    Have an account? <NavLink to="/login">Log in</NavLink> 
                </div>
            <div className="SignUp__InnerBox">
                <h3 className="Component__Title">Sign Up</h3>
                <form className="SignUp__Form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="name" onChange={handleChange} value={signUp.name} />
                    <input type="email" placeholder="Email" name="email" onChange={handleChange} value={signUp.email} />
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} value={signUp.password}/>
                    <button className="Submit__Btn" type="submit">Sign up</button>

                </form>
     
            </div>

        </div>
    )
}

export default SignUpForm
