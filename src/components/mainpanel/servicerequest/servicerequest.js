import { connect } from "react-redux";
import React from "react";
import { getServiceRequest } from "../../../actions/serviceReqAction";
import "./servicerequest.scss";

const ServiceRequestComponent = ({ requestService, requestsList }) => {

    React.useEffect(() => {
        requestService({ pagevalue: "1" });
    }, []);

    // console.log("requestllist >>>>>>>> ", requestsList);

    return (
        <div>
            <table>
                <tbody>
                    <tr className="department-item-container">
                        <td className="department-item-name"><button className="buttonadd">+</button></td>
                        <td className="department-item-description"><h2>User Info</h2></td>
                    </tr>
                    <tr className="department-item-container">
                        <td className="department-item-name">UserName</td>
                        <td className="department-item-name">Mobile</td>
                        <td className="department-item-description">Email</td>
                        <td className="department-item-member">buttons here</td>
                    </tr>
                    {requestsList.map((req) => (
                        <tr className="department-item-container">
                            <td className="department-item-name"> {req._id}</td>
                            <td className="department-item-name">nothing here</td>
                            <td className="department-item-description">{req.description}</td>
                            <td className="department-item-name"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};




const mapStateToProps = (state) => {
    return {
        requestsList: state.serviceRequestRed.requestData
    };
};

const mapDispatchToProps = (dispatch) => ({
    requestService: (pagevalue) => {
        dispatch(getServiceRequest(pagevalue));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceRequestComponent);