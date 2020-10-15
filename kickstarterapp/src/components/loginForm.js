import React, {useState} from "react";
import  {NavLink, useHistory} from "react-router-dom";
import "./LoginForm.css";
import {axiosWithAuth, setToken} from '../utils';

const LoginForm = () => {

    const history = useHistory();

    const [user, setUser] = useState({
      username:"",
      password: ""
    });
   
    const handleChange = e => {
     setUser({...user, [e.target.name] : e.target.value})

  }


  const handleSubmit = e => {
    e.preventDefault();
    loginCreds(user);


  }



  const loginCreds = (credentials) => {  axiosWithAuth().post("/api/auth/login", credentials)
  .then(res => {
    setToken();
    history.push("/user");
      console.log(res);
  })  
  .catch(err =>
    console.error("bk: Login.js: login: err.message: ", err.message)

  );
  }


    return (
        <div className="Login__Component">
            <div className="Login__InnerBox">
                <h3 className="Component__Title">Log in</h3>
                <form className="Login__Form" onSubmit={handleSubmit}>
                    <input type="username" placeholder="Username" name="username" value={user.username} onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" value={user.password}  onChange={handleChange} />
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
