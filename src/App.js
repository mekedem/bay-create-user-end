import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/signuppage/signuppage";
import Login from "./components/loginpage/loginpage";
import ForgotPassword from "./components/forgotpassword/forgotpassword";
import MainPanel from "./components/mainpanel/mainpanel";
import VerifyEmail from "./components/verificationpage/verifyemail";
import NewPassword from "./components/newpassword/newpassword";
import ChangePassword from "./components/changepassword/changepassword";
import ProtectedRoute from "./protectedRoutes";



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
          <ProtectedRoute
            path="/changepassword"
            name="changepassword"
            component={(props) => <ChangePassword {...props} />}
          />
          <Route
            path="/setnewpassword"
            name="setnewpassword"
            component={(props) => <NewPassword {...props} />}
          />
          <Route
            path="/verifyemail"
            name="verifyemail"
            component={(props) => <VerifyEmail {...props} />}
          />
          <ProtectedRoute
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
