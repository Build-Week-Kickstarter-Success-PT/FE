import React, { useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/SignUpForm";
import PredictionForm from "./components/PredictionForm";
import User from "./protected/user";

import { GlobalProvider } from "./context";
import Campaign from "./components/Campaign";
import UserContent from "./pages/userContent";

function App() {
  const [loggedUser, setLoggedUser] = useState("");
  const history = useHistory();

  return (
    <GlobalProvider>
      <div className="app">
        <Navbar user={loggedUser} />
        <Switch>
          <Route path="/login">
            <LoginForm setLoggedUser={setLoggedUser} />
          </Route>
          <Route path="/signup" component={SignUpForm} />
          <User exact path="/user/:id" component={UserContent} />
          <User exact path="/user/:id/prediction" component={PredictionForm} />
          <Route exact path="/">
            {history.push("/login")}
          </Route>
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
