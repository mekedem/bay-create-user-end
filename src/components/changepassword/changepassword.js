import React from "react";
import './changepassword.scss';
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { changepasswordnormally } from '../../API/authAPI';
import { useHistory } from "react-router-dom";
// import { OTP_REGISTERY } from "../../constants/constants";


const changePassSchema = () => {
    return Yup.object().shape({
        oldPassword: Yup.string().required("*required"),
        newPassword: Yup.string().required("*required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    });
};

const ChangePassword = () => {
    const history = useHistory();

    const gotoLogin = () => {
        history.push("./login");
    }

    const onSubmit = (values) => {
        setTimeout(() => {
            changepasswordnormally(values)
                .then((response) => {
                    if (response.success) {
                        alert(response.data.message);
                        gotoLogin();
                    }
                })
                .catch((error) => {
                    alert("error while submitting... retry");
                    console.log(error);
                })
                .then(() => { });
        }, 600);
    };

    return (
        <div className="forgotflexcontainer">
            <div className="forgotformcontainer">
                <Formik
                    initialValues={{
                        oldPassword: "",
                        newPassword: "",
                        confirmPassword: ""
                    }}
                    validationSchema={changePassSchema()}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="changepassinputfield-container">
                                <h1 className="changepasstitle">Change Password</h1>

                                {touched.oldPassword && errors.oldPassword && <p className="changepassformerror">{errors.oldPassword}</p>}
                                <Field type="password" placeholder="Old Password" name="oldPassword" />

                                {touched.newPassword && errors.newPassword && <p className="changepassformerror">{errors.newPassword}</p>}
                                <Field type="password" placeholder="New Password" name="newPassword" />

                                {touched.confirmPassword && errors.confirmPassword && <p className="changepassformerror">{errors.confirmPassword}</p>}
                                <Field type="password" placeholder="Confirm New Password" name="confirmPassword" />

                                <button className="changepassbtn" type="submit">Submit</button>

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ChangePassword