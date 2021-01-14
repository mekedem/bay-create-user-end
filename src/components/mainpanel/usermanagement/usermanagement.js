import { connect } from "react-redux";
import React, { useState } from "react";
import { MdDelete, MdAttachFile, MdEdit } from 'react-icons/md';
import { getUsersList, removeUser } from "../../../actions/userMgmtAction";
import { useHistory } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import "./usermgmt.scss";
import { removeUserFromList } from "../../../API/serviceRequestAPI";
import { ConfirmationDialog } from "../../../utilcomponents/confirmationDialogue/ConfirmationDialog";

const UsersManagementItem = ({ user, removeUserById }) => {

    const [showDialogue, setShowDialogue] = useState(false);

    const dateFormatter = (d) => {
        const ddmmyy = new Date(d);
        const retdate = ddmmyy.getDate() + "/" + ddmmyy.getMonth() + "/" + ddmmyy.getFullYear();
        return retdate
    }

    const onDeleteDenied = () => {
        setShowDialogue(false);
    }

    const onDeleteComifrmed = (userid) => {
        console.log(userid);
        setTimeout(() => {
            removeUserFromList(userid)
                .then((response) => {
                    if (response.success) {
                        console.log("IT IS A SUCCESS");
                        removeUserById(userid);
                        setShowDialogue(false);
                    }
                })
                .catch((error) => {
                    alert("error while deleting user... retry");
                    console.log(error);
                })
                .then(() => { });
        }, 600);
    }

    return (
        <tr className="department-item-container">
            <td className="item-name"> {user.fullName}</td>
            <td className="item-date">{user.phone}</td>
            <td className="item-description">{user.email}</td>
            <td className="item-date">{dateFormatter(user.createdAt)}</td>
            <td className="item-action"></td>
            <td className="item-action"> <button className="actionbuttons" onClick={() => { setShowDialogue(true) }}> <MdDelete /> </button> </td>
            {showDialogue && <ConfirmationDialog
                show={setShowDialogue}
                message="Are you sure you want to remove this user?"
                cancelBtnTitle="Cancel"
                comfirmBtnTitle="Remove"
                onComfirmation={() => { onDeleteComifrmed(user._id) }}
                onDeny={onDeleteDenied}
            />}
        </tr>
    );
};


const UserManagementComponent = ({ usersList, getListofusers, totalUsers, removeUserById }) => {

    const [pageCount, setPageCount] = useState(2);
    const [currentPage, setCurrentPage] = useState("0");
    const history = useHistory();

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage.toString());
    };

    const gotoAddNewUser = () => {
        history.push('./signup');
    };

    React.useEffect(() => {
        getListofusers({ pagevalue: currentPage });
        setPageCount(Math.ceil(totalUsers / 10));
    }, [currentPage, totalUsers]);

    return (
        <div>
            <div>
                <button className="buttonadd" onClick={gotoAddNewUser}>+ add</button>
            </div>
            <div className="items-title"><h2>User Management</h2></div>
            <hr />
            <table>
                <tbody>
                    <tr className="header-item-container"></tr>

                    <tr className="department-item-container">
                        <td className="item-name"><strong>UserName</strong></td>
                        <td className="item-date"><strong>Mobile</strong></td>
                        <td className="item-description"><strong>Email</strong></td>
                        <td className="item-date"><strong>created on</strong></td>
                        <td className="item-action"></td>
                        <td className="item-action"></td>
                    </tr>
                    {usersList.map((user, index) => (
                        <UsersManagementItem
                            key={index}
                            user={user}
                            removeUserById={removeUserById}
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
        usersList: state.userManagementRed.usersData,
        totalUsers: state.userManagementRed.total
    };
};

const mapDispatchToProps = (dispatch) => ({
    getListofusers: (pagevalue) => {
        dispatch(getUsersList(pagevalue));
    },
    removeUserById: (userid) => {
        dispatch(removeUser(userid));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagementComponent);