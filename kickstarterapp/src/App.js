import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/SignUpForm";
import User from "./protected/user";
import UserContent from "./protected/userContent";

function App() {
  return (
    <div className="app">
      
      <Navbar />
      <Route path="/login"  component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
      <User exact path="/user" component={UserContent} ></User>
     
    </div>
  );
}

export default App;
