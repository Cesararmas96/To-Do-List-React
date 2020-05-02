import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import TaskEdit from "../pages/TaskEdit";
import TaskDetailsContainer from "./TaskDetailsContainer";
import "./styles/github-fork-ribbon-css.css";
class App extends Component {
  render() {
    return (
      <Router>
        <a
          className="github-fork-ribbon fixed"
          href="https://facebook.com/"
          title="Fork me on GitHub"
        >
          Fork me on GitHub
        </a>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos/:todoId" component={TaskDetailsContainer} />
          <Route exact path="/todos/:todoId/edit" component={TaskEdit} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
