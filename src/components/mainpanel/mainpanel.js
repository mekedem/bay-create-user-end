import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import UserManagement from "./usermanagement/usermanagement";
import ServiceRequest from "./servicerequest/servicerequest";
import HomePage from "../homepage/homepage";
import "./mainpanel.scss";


export default function MainPanel(props) {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="wrapper">

            <div className="sidenav">
                <img className="logoimg" src="./bayerlogo.png" width="200" height="100" />
                <Link className={location.pathname == "/" ? "onsidelink" : "notonsidelink"} to="/">Home</Link>
                <Link className={location.pathname == "/usermanagement" ? "onsidelink" : "notonsidelink"} to="/usermanagement">User Management</Link>
                <Link className={location.pathname == "/servicerequest" ? "onsidelink" : "notonsidelink"} to="/servicerequest">Service Requests</Link>
            </div>

            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/usermanagement">
                        <UserManagement />
                    </Route>
                    <Route path="/servicerequest">
                        <ServiceRequest {...props} />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}