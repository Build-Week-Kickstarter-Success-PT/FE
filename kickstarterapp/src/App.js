import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import PredictionForm from "./components/PredictionForm";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/prediction">
        <PredictionForm />
      </Route>
    </div>
  );
}

export default App;
