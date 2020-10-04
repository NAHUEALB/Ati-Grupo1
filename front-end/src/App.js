import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ServersCreated from "./servers/pages/ServersCreated";
import Formulario from "./shared/components/Navigation/Formulario";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main className="header">
        <Switch>
          <Route path="/" exact>
            <ServersCreated />
          </Route>
          <Route exact path="/create" component={Formulario} />
        </Switch>
        <Redirect to="/" />
      </main>
    </Router>
  );
}

export default App;
