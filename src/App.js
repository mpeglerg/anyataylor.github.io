import React from "react";
import "./App.css";

import AppTabs from "./AppTabs.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import CampaignPage from "./CampaignPage.js";
import AboutUsPage from "./AboutUsPage.js";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <AppTabs className="testing" />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/AboutUs">
              <AboutUsPage />
            </Route>
            <Route exact path="/Campaign">
              <CampaignPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
