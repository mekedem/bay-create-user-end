import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import UserManagement from "./usermanagement/usermanagement";
import ServiceRequest from "./servicerequest/servicerequest";
import HomePage from "../homepage/homepage";
import { getInitialData } from "../../API/serviceRequestAPI";
import { logoutuser } from "../../API/authAPI";
import { initialDataFetched, logoutUserAction } from "../../actions/authActions";
import "./mainpanel.scss";
import { USER_TOKEN, OTP_REGISTERY } from "../../constants/constants";


const MainPanel = ({ usersRole, getInitData, logmeout, isInitialDataFetched }, props) => {
    const location = useLocation();
    const history = useHistory();
    const [isUser, setIsUser] = React.useState(true);

    React.useEffect(() => {
        if (localStorage.getItem(USER_TOKEN)) {
            if (!isInitialDataFetched) pullInitialData();
            if (isInitialDataFetched) {
                if (usersRole.user_Info.verified === false) {
                    localStorage.setItem(OTP_REGISTERY, true);
                    history.push("./verifyemail");
                }
            }
        }
        if (usersRole.user_Info.role === "admin") setIsUser(false);
        // if (usersRole.initialData) { }
        // else {
        //     // if (localStorage.getItem(USER_TOKEN)) {
        //     //     pullInitialData();
        //     // }
        // }
    }, [usersRole]);

    const pullInitialData = async () => {
        const initdata = await getInitialData();
        if (initdata.success) {
            getInitData(initdata.data);
            // if (initdata.data.user_info.verified === false) {
            //     localStorage.setItem(OTP_REGISTERY, true);
            //     history.push("./verifyemail");
            // }
        }
        else {
            // sth happened 
        }
    }


    const logOutOfhere = async () => {
        const logoutresponse = await logoutuser();
        if (logoutresponse.success) {
            logmeout();
            history.push('/login');
        }
    }

    const gotoChangepass = () => { history.push('/changepassword'); }

    return (
        !initialDataFetched ? <div>Loading...</div> :
            <div className="wrapper">
                <div className="sidenav">
                    <img className="logoimg" src="./bayerlogo.png" width="200" height="100" />
                    <Link className={location.pathname == "/app" ? "onsidelink" : "notonsidelink"} to="/app">Home</Link>
                    {!isUser ? <Link className={location.pathname == "/usermanagement" ? "onsidelink" : "notonsidelink"} to="/usermanagement">User Management</Link> : ""}
                    <Link className={location.pathname == "/servicerequest" ? "onsidelink" : "notonsidelink"} to="/servicerequest">Service Requests</Link>

                    <button id="logoutbutton" onClick={logOutOfhere}> Logout </button>
                    <button id="changepasswordbutton" onClick={gotoChangepass}> Change Password </button>
                </div>

                <div className="main">
                    <Switch>
                        <Route exact path="/app">
                            <HomePage />
                        </Route>
                        <Route path="/usermanagement">
                            <UserManagement />
                        </Route>
                        <Route path="/servicerequest">
                            <ServiceRequest {...props} role={isUser} />
                        </Route>
                    </Switch>
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        usersRole: state.authenticationRed,
        isInitialDataFetched: state.authenticationRed.initialData
    };
};

const mapDispatchToProps = (dispatch) => ({
    getInitData: (data) => {
        dispatch(initialDataFetched(data));
    },
    logmeout: () => {
        dispatch(logoutUserAction());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);