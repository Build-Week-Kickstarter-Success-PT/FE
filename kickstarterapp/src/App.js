import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/SignUpForm";
import PredictionForm from "./components/PredictionForm";
import User from "./protected/user";

import { GlobalProvider } from "./context";
import UserContent from "./pages/userContent";
import EditCampaign from "./components/EditCampaign";

function App() {
  const [loggedUser, setLoggedUser] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState({});

  return (
    <GlobalProvider>
      <div className="app">
        <Navbar user={loggedUser} />
        <Switch>
          <Route path="/login">
            <LoginForm setLoggedUser={setLoggedUser} />
          </Route>
          <Route path="/signup" component={SignUpForm} />
          <User exact path="/user/:id">
            <UserContent user={loggedUser} setSelectedCampaign={setSelectedCampaign} />
          </User>
          <User exact path="/user/:id/edit">
            <EditCampaign campaign={selectedCampaign}/>
          </User>
          <User exact path="/user/:id/prediction" component={PredictionForm} />
          <Route exact path="/">
            <LoginForm setLoggedUser={setLoggedUser} />
          </Route>
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
