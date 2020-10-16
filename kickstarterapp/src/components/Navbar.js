import React from 'react'
import  { NavLink } from "react-router-dom";
import logo from "../logo.png";
import SearchIcon from '@material-ui/icons/Search';
import "./Navbar.css"

const Navbar = () => {
    return ( 
    <div className="navbar">
        <div className="links__left links">
            <NavLink to="">Explore</NavLink>
            <NavLink to="/prediction">Start a Prediction</NavLink>
        </div> 
        <div className="links__center links">
            <img src={logo} alt="Kickstarter Success Predictor" />
            <h2>Success Predictor</h2>
        </div> 
        <div className="links__right links">
            <NavLink to="" style={{display:"flex", marginRight:"5px"}}><div>Search</div><SearchIcon style={{ fontSize: 17 , marginLeft: "5px", marginTop:"3px" }} /></NavLink>
            <NavLink to="/login">Log in</NavLink>
            <NavLink to="/signup">Register</NavLink>
        </div> 
    </div>
    )
}

export default Navbar