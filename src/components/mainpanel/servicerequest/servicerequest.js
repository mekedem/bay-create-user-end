import { connect } from "react-redux";
import React from "react";
import { getServiceRequest } from "../../../actions/serviceReqAction";
import "./servicerequest.scss";

const ServiceRequestComponent = ({ requestService, requestsList }) => {

    React.useEffect(() => {
        requestService({ pagevalue: "0" });
    }, []);

    const dateFormatter = (d) => {
        const ddmmyy = new Date(d);
        const retdate = ddmmyy.getDay() + "/" + ddmmyy.getMonth() + "/" + ddmmyy.getFullYear();
        return retdate
    }

    const isFileAttached = (f) => {
        if (f.length == 0) return "No";
        return "Yes"
    }

    return (
        <div>
            <div className="items-title"><h2>Service Requests</h2></div>
            <hr />
            <table>
                <tbody>
                    <tr className="header-item-container">

                    </tr>

                    <tr className="department-item-container">
                        <td className="item-name"><strong>Requested By</strong></td>
                        <td className="item-date"><strong>Requested</strong></td>
                        <td className="item-description"><strong>Description</strong></td>
                        <td className="item-file"><strong>Files?</strong></td>
                        <td className="item-description"><strong>Status</strong></td>
                        <td className="item-action"></td>
                    </tr>
                    {requestsList.map((req, index) => (
                        <tr key={index} className="department-item-container">
                            <td className="item-name"> {req.user.fullName}</td>
                            <td className="item-date">{dateFormatter(req.createdAt)}</td>
                            <td className="item-description">{req.description}</td>
                            <td className="item-file">{isFileAttached(req.files)}</td>
                            <td className="item-description">{req.status.description}</td>
                            <td className="item-action"> <button className="actionbuttons"> Edit </button> </td>
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