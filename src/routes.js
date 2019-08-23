import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Header from "./components/header";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/artist/:id" component={Artist} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
