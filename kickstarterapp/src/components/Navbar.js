import React, { useState, useEffect } from "react";
import { NavLink, useParams, useRouteMatch } from "react-router-dom";
import logo from "../logo.png";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  if (loggedUser !== "") {
    return (
      <div className="navbar">
        <div className="links__left links">
          <NavLink exact to={`/user/${user.id}`}>
            Explore
          </NavLink>
          <NavLink exact to={`/user/${user.id}/prediction`}>
            Start a Prediction
          </NavLink>
        </div>
        <div className="links__center links">
          <img src={logo} alt="Kickstarter Success Predictor" />
          <h2>Success Predictor</h2>
        </div>
        <div className="links__right links">
          <NavLink
            exact
            to={`/user/${user.id}`}
            style={{ display: "flex", marginRight: "5px" }}
          >
            <div>Search</div>
            <SearchIcon
              style={{ fontSize: 17, marginLeft: "5px", marginTop: "3px" }}
            />
          </NavLink>
          <div className="welcome">
            Welcome{" "}
            <span
              style={{
                textTransform: "capitalize",
                fontWeight: "600",
                color: "#037362",
              }}
            >
              {user.name}
            </span>{" "}
          </div>
          <NavLink
            to="/login"
            onClick={() => {
              setLoggedUser("");
            }}
          >
            Log out
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div className="links__left links">
          <NavLink to="/login">Explore</NavLink>
          <NavLink to="/login">Start a Prediction</NavLink>
        </div>
        <div className="links__center links">
          <img src={logo} alt="Kickstarter Success Predictor" />
          <h2>Success Predictor</h2>
        </div>
        <div className="links__right links">
          <NavLink to="/login" style={{ display: "flex", marginRight: "5px" }}>
            <div>Search</div>
            <SearchIcon
              style={{ fontSize: 17, marginLeft: "5px", marginTop: "3px" }}
            />
          </NavLink>
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </div>
      </div>
    );
  }
};

export default Navbar;
