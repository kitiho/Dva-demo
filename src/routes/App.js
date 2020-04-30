import React from "react";
import { Switch, Route, Redirect } from "dva/router";
import { adminRoutes } from "../routes";
import Layout from "../components/Layout";

const App = () => {
  return (
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
        <Redirect to="/404" />
      </Switch>
    </Layout>
  );
};

export default App;
