import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import UserManagement from "./usermanagement/usermanagement";
import ServiceRequest from "./servicerequest/servicerequest";
import HomePage from "../homepage/homepage";
import "./mainpanel.scss";


export default function mainPanel(props) {
    return (
        <div className="wrapper">
            <div className="sidenav">
                <Link to="/">Home</Link>
                <Link to="/usermanagement">User Management</Link>
                <Link to="/servicerequest">Service Requests</Link>
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