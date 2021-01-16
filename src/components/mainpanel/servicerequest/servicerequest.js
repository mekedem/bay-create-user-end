import { connect } from "react-redux";
import React, { useState } from "react";
import { MdEdit, MdViewAgenda, MdVisibility } from 'react-icons/md';
import { getServiceRequestAction, addServiceRequest, updateServiceRequest } from "../../../actions/serviceReqAction";
import "./servicerequest.scss";
import RequestServiceModal from "../../../utilcomponents/requestservicemodal/requestservicemodal";
import EditRequestModal from "../../../utilcomponents/editrequestmodal/editrequestmodal";
import RequestDetailsModal from "../../../utilcomponents/viewrequestdetailmodal/viewrequestdetails";
import ReactPaginate from 'react-paginate';


const ServiceRequestItem = ({ fullName, createdAt, description, files, status, requestID, statusID, updateRequest }) => {

    const [showServiceEdit, setShowServiceEdit] = useState(false);
    const [showServiceDetail, setShowServiceDetail] = useState(false);

    const dateFormatter = (d) => {
        const ddmmyy = new Date(d);
        const retdate = ddmmyy.getDate() + "/" + ddmmyy.getMonth() + "/" + ddmmyy.getFullYear();
        return retdate
    }

    const isFileAttached = (f) => {
        if (f.length == 0) return "No";
        return "Yes"
    }

    return (
        <>
            <tr className="department-item-container">
                <td className="item-name"> {fullName}</td>
                <td className="item-date">{dateFormatter(createdAt)}</td>
                <td className="item-description">{description}</td>
                <td className="item-file">{isFileAttached(files)}</td>
                <td className="item-description">{status}</td>
                <td className="item-action">
                    <button onClick={() => { setShowServiceEdit(true) }} className="actionbuttons"> <MdEdit /> </button>
                </td>
                <td className="item-action">
                    <button onClick={() => { setShowServiceDetail(true) }} className="actionbuttons"> <MdVisibility /> </button>
                </td>
                {showServiceEdit && <EditRequestModal handleEditClose={setShowServiceEdit}
                    description={description}
                    existingfiles={files}
                    status={status}
                    requestID={requestID}
                    statusID={statusID}
                    updateRequest={updateRequest}
                />}

                {showServiceDetail && <RequestDetailsModal handleEditClose={setShowServiceDetail}
                    description={description}
                    files={files}
                    status={status}
                />}
            </tr>
        </>
    );
};


const ServiceRequestComponent = ({ requestServiceFirst, requestsList, addRequest, role, totalRequest, updateRequest }) => {

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
                    <tr className="department-item-container">
                        <td className="item-name"><strong>Requested By</strong></td>
                        <td className="item-date"><strong>Requested</strong></td>
                        <td className="item-description"><strong>Description</strong></td>
                        <td className="item-file"><strong>Files?</strong></td>
                        <td className="item-description"><strong>Status</strong></td>
                        <td className="item-action">
                            <select className="requestStatus" component="select" name="status">
                                <option value="zuma">all</option>
                            </select>
                        </td>
                    </tr>
                    {requestsList.map((req, index) => (
                        <ServiceRequestItem
                            key={index}
                            fullName={req.user.fullName}
                            createdAt={req.createdAt}
                            description={req.description}
                            files={req.files}
                            status={req.status.description}
                            requestID={req._id}
                            statusID={req.status._id}
                            updateRequest={updateRequest}
                        />
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
    },
    updateRequest: (data) => {
        dispatch(updateServiceRequest(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceRequestComponent);