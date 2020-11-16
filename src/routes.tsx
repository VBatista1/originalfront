import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/produto" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
