import React from "react";
import { Switch, Route, Redirect } from "dva/router";
import { adminRoutes } from "../routes";
import Layout from "../components/Layout";
import { isLoged } from "../utils/token";

const App = () => {
  return isLoged() ? (
    <Layout>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
      </Switch>
    </Layout>
  ) : (
    <Redirect to="/login" />
  );
};

export default App;
