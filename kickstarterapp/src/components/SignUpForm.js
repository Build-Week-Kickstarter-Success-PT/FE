import React from 'react'
import  {NavLink} from "react-router-dom";
import "./SignUpForm.css"

const SignUpForm = () => {
    return (
        <div className="SignUp__Component">
                <div className="Login__Content">
                    Have an account? <NavLink to="/login">Log in</NavLink> 
                </div>
            <div className="SignUp__InnerBox">
                <h3 className="Component__Title">Sign Up</h3>
                <form className="SignUp__Form">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button className="Submit__Btn" type="submit">Sign up</button>

                </form>
     
            </div>

        </div>
    )
}

export default SignUpForm
