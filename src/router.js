import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import { mainRoutes } from "./routes";
import App from "./routes/App";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/admin"
          render={(routeProps) => {
            return <App {...routeProps} />;
          }}
        />
        {mainRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.path}
              component={route.component}
            />
          );
        })}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
