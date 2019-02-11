import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Daily from "./containers/Daily";
import NotFound from "./containers/NotFound";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/daily" exact component={Daily} />
    { /* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);