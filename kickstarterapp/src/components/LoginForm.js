import React from "react";
import  {NavLink} from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
    return (
        <div className="Login__Component">
            <div className="Login__InnerBox">
                <h3 className="Component__Title">Log in</h3>
                <form className="Login__Form">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <NavLink style={{fontSize:".8rem", marginTop:"13px"}} to="">Forgot your password?</NavLink>
                    <button className="Submit__Btn" type="submit">Log in</button>
                    <label className="RememberMe__Checkbox">
                    <input type="checkbox"/>
                    Remember Me
                    </label>

                </form>
     
            </div>
            <div className="SignUp__Content">
                    New to Kickstarter SP? <NavLink to="/signup">Sign Up</NavLink> 
                </div>
        </div>
    )
}

export default LoginForm;
