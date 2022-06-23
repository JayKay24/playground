import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cart from "./screens/Cart";
import Products from "./screens/Products";
import UserProfile from "./screens/UserProfile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/userProfile" component={UserProfile} />
        <Route path="/" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}
