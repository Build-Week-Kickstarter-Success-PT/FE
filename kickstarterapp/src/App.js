import React, {useContext, useReducer} from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/SignUpForm";
import PredictionForm from "./components/PredictionForm";
import User from "./protected/user";
import UserContent from "./pages/userContent";

import {KickStartContext, campaignReducer} from './context';

function App() {

  const updateContext = useContext(KickStartContext);

  const [state, dispatch] = useReducer(campaignReducer, updateContext);


  return (

    <KickStartContext.Provider value={{state, dispatch}} >
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/prediction" component={PredictionForm} />
        <User exact path="/user" component={UserContent} />
      </Switch>
    </div>
    </KickStartContext.Provider>
  );
}

export default App;
