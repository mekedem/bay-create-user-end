import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import UserManagement from "./usermanagement/usermanagement";
import ServiceRequest from "./servicerequest/servicerequest";
import HomePage from "../homepage/homepage";
import { getInitialData } from "../../API/serviceRequestAPI";
import { initialDataFetched } from "../../actions/authActions";
import "./mainpanel.scss";


const MainPanel = ({ usersRole, getInitData }, props) => {
    const location = useLocation();
    const [reqFinished, setReqFinished] = React.useState(false);

    React.useEffect(() => {
        pullInitialData();
        setTimeout(() => {
            setReqFinished(true);
        }, 600);

    }, []);

    const pullInitialData = async () => {
        const initdata = await getInitialData();
        if (initdata.success) {
            getInitData(initdata.data.user_info);
        }
        else {
            // sth happened 
        }
    }

    return (
        !reqFinished ? <div></div> :
            <div className="wrapper">
                <div className="sidenav">
                    <img className="logoimg" src="./bayerlogo.png" width="200" height="100" />
                    <Link className={location.pathname == "/" ? "onsidelink" : "notonsidelink"} to="/">Home</Link>
                    {usersRole == "user" ? "" : <Link className={location.pathname == "/usermanagement" ? "onsidelink" : "notonsidelink"} to="/usermanagement">User Management</Link>}
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

const mapStateToProps = (state) => {
    return {
        usersRole: state.authenticationRed.userInfo.role
    };
};

const mapDispatchToProps = (dispatch) => ({
    getInitData: (data) => {
        dispatch(initialDataFetched(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);