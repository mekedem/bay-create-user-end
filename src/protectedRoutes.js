import React from "react";
import { Redirect } from "react-router-dom";
import { USER_TOKEN } from "../src/constants/constants";

class ProtectedRoute extends React.Component {
    render() {
        const Component = this.props.component;
        let isAuthenticated = false;

        if (localStorage.getItem(USER_TOKEN)) {
            isAuthenticated = true;
        }
        return isAuthenticated ? (
            <Component />
        ) : (
                <Redirect to={{ pathname: "/login" }} />
            );
    }
}

export default ProtectedRoute;