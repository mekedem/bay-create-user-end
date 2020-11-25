import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/signuppage/signuppage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          name="BayerCreate"
          component={(props) => <Signup {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
