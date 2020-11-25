import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/signuppage/signuppage";
import Login from "./components/loginpage/loginpage";
import ForgotPassword from "./components/forgotpassword/forgotpassword";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/signup"
          name="signup"
          component={(props) => <Signup {...props} />}
        />
        <Route
          path="/login"
          name="signin"
          component={(props) => <Login {...props} />}
        />
        <Route
          path="/forgotpassword"
          name="forgotpassword"
          component={(props) => <ForgotPassword {...props} />}
        />
        <Route
          path="/adminpanel"
          name="adminpanel"
          component={(props) => <AdminPanel {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
