import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/signuppage/signuppage";
import Login from "./components/loginpage/loginpage";
import ForgotPassword from "./components/forgotpassword/forgotpassword";
import MainPanel from "./components/mainpanel/mainpanel";



const App = () => {

  return (
    <>
      <Router>
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
            path="/"
            name="home"
            component={(props) => <MainPanel {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
