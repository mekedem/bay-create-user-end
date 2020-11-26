import React from "react";
import "./usermgmt.scss"

const UserManagement = () => {

    return (<>
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
                        <td className="department-item-name">Email</td>
                        <td className="department-item-member">buttons here</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
    );
};

export default UserManagement