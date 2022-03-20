import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./constants";
import "./App.css";

// TODO: Check map function
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              component={route.page}
              exact={route.exact}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
