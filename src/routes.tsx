import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
