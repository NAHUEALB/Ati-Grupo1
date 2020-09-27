import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ServersCreated from "./servers/pages/ServersCreated";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main className="header">
        <h1 className="text-center text-primary ">PRUEBAS</h1>

        <Switch>
          <Route path="/" exact>
            <ServersCreated />
          </Route>
        </Switch>
        <Redirect to="/" />
      </main>
    </Router>
  );
}

export default App;
