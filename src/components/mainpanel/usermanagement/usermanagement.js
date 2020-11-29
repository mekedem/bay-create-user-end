import { connect } from "react-redux";
import React from "react";
import { MdDelete, MdAttachFile, MdEdit } from 'react-icons/md';
import { getUsersList } from "../../../actions/userMgmtAction";
import "./usermgmt.scss"

const UserManagementComponent = ({ usersList, getListofusers }) => {

    React.useEffect(() => {
        getListofusers({ pagevalue: "0" });
    }, []);

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
        </div>
    );
};




const mapStateToProps = (state) => {
    return {
        usersList: state.userManagementRed.usersData
    };
};

const mapDispatchToProps = (dispatch) => ({
    getListofusers: (pagevalue) => {
        dispatch(getUsersList(pagevalue));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagementComponent);