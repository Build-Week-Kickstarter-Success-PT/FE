import React, {useContext} from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/SignUpForm";
import PredictionForm from "./components/PredictionForm";
import User from "./protected/user";


import { GlobalProvider, KickStartContext } from "./context";
import Campaign from "./components/Campaign";
import UserContent from './pages/userContent';
import EditCampaign from './components/EditCampaign';

function App() {

  const state = useContext(KickStartContext);

  return (
    <GlobalProvider>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
        {state.currentCampaign  === null ?  (<User exact path="/user/:id/campaigns" component={UserContent} />
         ): <EditCampaign/> } <Route exact path="/user/:id/campaigns/:campaign_id" component={Campaign} />
          <User exact path="/user/:id/prediction" component={PredictionForm} />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
