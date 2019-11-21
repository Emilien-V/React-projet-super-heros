import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Components/Home"
import List from "./Components/List"
import Battle from "./Components/Battle"
import Details from "./Components/Details"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list" component={List} />
        <Route path="/battle" component={Battle} />
        <Route path="/details/:id" component={Details} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}