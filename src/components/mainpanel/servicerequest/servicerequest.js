import { connect } from "react-redux";
import React, { useState } from "react";
import { MdEdit } from 'react-icons/md';
import { getServiceRequestAction, addServiceRequest } from "../../../actions/serviceReqAction";
import "./servicerequest.scss";
import RequestServiceModal from "../../../utilcomponents/requestservicemodal/requestservicemodal";
import ReactPaginate from 'react-paginate';

const ServiceRequestComponent = ({ requestServiceFirst, requestsList, addRequest, role, totalRequest }) => {

    const [showModal, setShowModal] = useState(false);
    const [pageCount, setPageCount] = useState(2);
    const [currentPage, setCurrentPage] = useState("0");

    React.useEffect(() => {
        requestServiceFirst({ pagevalue: currentPage });
        setPageCount(Math.ceil(totalRequest / 10));
    }, [currentPage, totalRequest]);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage.toString());
    };

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
            <div>
                {role && <button className="buttonadd" onClick={() => { setShowModal(true) }}>+ add</button>}
                {showModal && <RequestServiceModal handleClose={setShowModal} addRequest={addRequest} />}
            </div>
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
                            <td className="item-action"> <button className="actionbuttons"> <MdEdit /> </button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        </div>
    );
};




const mapStateToProps = (state) => {
    return {
        requestsList: state.serviceRequestRed.requestData,
        totalRequest: state.serviceRequestRed.total
    };
};

const mapDispatchToProps = (dispatch) => ({
    requestServiceFirst: (pagevalue) => {
        dispatch(getServiceRequestAction(pagevalue));
    },
    addRequest: (data) => {
        dispatch(addServiceRequest(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceRequestComponent);