import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Components/Home"
import List from "./Components/List"
import Battle from "./Components/Battle"
import Details from "./Components/Details"
import Scoreboard from "./Components/Scoreboard"

import { connect } from 'react-redux';
import { fetchFirstHeroes } from './actions/creators';

const App = props => {

  useEffect(() => {
    if(props.heroes.length === 0){
        props.fetchFirstHeroes();
    }
  },[]);

  return (
    <Router>
      <Switch>
        <Route path="/list" component={List} />
        <Route path="/battle" component={Battle} />
        <Route path="/details/:id" component={Details} />
        <Route path="/scoreboard" component={Scoreboard} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {

  return {heroes: state.heroes};
}

export default connect(
  mapStateToProps,
   { fetchFirstHeroes })
   (App);