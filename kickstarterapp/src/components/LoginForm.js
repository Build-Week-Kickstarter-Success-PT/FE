import React from "react";
import  {NavLink} from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
    return (
        <div className="Login__Component">
            <div className="Login__InnerBox">
                <h2>Log in</h2>
                <form className="Login__Form">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <NavLink to="">Forgot your password?</NavLink>
                    <button type="submit">Log in</button>
                    <br/>
                    <label>
                    <input type="checkbox"/>
                    Remember Me
                    </label>

                </form>
                <br/>
                <div>
                    New to Kickstarter? <NavLink to="">Sign Up</NavLink> 
                </div>
            </div>
            
        </div>
    )
}

export default LoginForm;
