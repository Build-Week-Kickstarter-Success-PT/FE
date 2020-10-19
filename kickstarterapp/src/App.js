import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/SignUpForm";
import PredictionForm from "./components/PredictionForm";
import User from "./protected/user";
import UserContent from "./pages/userContent";

import { GlobalProvider } from "./context";
import Campaign from "./components/Campaign";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/prediction" component={PredictionForm} />
          <User exact path="/user/:id" component={UserContent} />
          <Route exact path="/">
            <div style={{ display: "flex" }}>
              <div>
                <UserContent />
              </div>
              <div className="Campaign__Area">
                <Campaign />
                <Campaign />
                <Campaign />
                <Campaign />
                <Campaign />
                <Campaign />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
