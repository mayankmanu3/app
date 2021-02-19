import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
