import { connect } from "react-redux";
import React, { useState } from "react";
import { MdDelete, MdAttachFile, MdEdit } from 'react-icons/md';
import { getUsersList } from "../../../actions/userMgmtAction";
import ReactPaginate from 'react-paginate';
import "./usermgmt.scss";

const UserManagementComponent = ({ usersList, getListofusers, totalUsers }) => {

    const [pageCount, setPageCount] = useState(2);
    const [currentPage, setCurrentPage] = useState("0");

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage.toString());
    };

    React.useEffect(() => {
        getListofusers({ pagevalue: currentPage });
        setPageCount(Math.ceil(totalUsers / 10));
    }, [currentPage, totalUsers]);

    return (
        <div>
            <div className="items-title"><h2>User Management</h2></div>
            <hr />
            <table>
                <tbody>
                    <tr className="header-item-container">

                    </tr>

                    <tr className="department-item-container">
                        <td className="item-name"><strong>UserName</strong></td>
                        <td className="item-date"><strong>Mobile</strong></td>
                        <td className="item-description"><strong>Email</strong></td>
                        <td className="item-action"></td>
                        <td className="item-action"></td>
                        <td className="item-action"></td>
                    </tr>
                    {usersList.map((user, index) => (
                        <tr key={index} className="department-item-container">
                            <td className="item-name"> {user.fullName}</td>
                            <td className="item-date">{user.phone}</td>
                            <td className="item-description">{user.email}</td>
                            <td className="item-action"> <button className="actionbuttons"> <MdEdit /> </button> </td>
                            <td className="item-action"> <button className="actionbuttons"> <MdAttachFile /> </button> </td>
                            <td className="item-action"> <button className="actionbuttons"> <MdDelete /> </button> </td>
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
        usersList: state.userManagementRed.usersData,
        totalUsers: state.userManagementRed.total
    };
};

const mapDispatchToProps = (dispatch) => ({
    getListofusers: (pagevalue) => {
        dispatch(getUsersList(pagevalue));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagementComponent);