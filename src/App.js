import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Components/Home"
import List from "./Components/List"
import Battle from "./Components/Battle"
import Header from "./Components/Header"

export default function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/battle">
            <Battle />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}