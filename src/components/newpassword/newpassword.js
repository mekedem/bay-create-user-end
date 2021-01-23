import React from "react";
import { connect } from "react-redux";
import './newpassword.scss';
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { setthenewpassword } from "../../API/authAPI";
import { updatedSigninResponse } from "../../actions/authActions";

const newPassSchema = () => {
    return Yup.object().shape({
        password: Yup.string().required("*required"),
        confirmationpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });
};

const NewPassword = ({ newlogin }) => {
    const history = useHistory();

    const onSubmit = (values) => {
        setTimeout(() => {
            setthenewpassword(values.password)
                .then((response) => {
                    if (response.success) {
                        newlogin(response.data);
                        history.push("/app");
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
        <div className="newpasswordflexcontainer">
            <div className="newpasswordformcontainer">
                <Formik
                    initialValues={{
                        password: "",
                        confirmationpassword: ""
                    }}
                    validationSchema={newPassSchema()}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="newpasswordinputfield-container">
                                <h1 className="newpasswordtitle">Set new password</h1>

                                {touched.password && errors.password && <p className="newpasswordformerror">{errors.password}</p>}
                                <Field type="password" placeholder="Enter your new password" name="password" />

                                {touched.confirmationpassword && errors.confirmationpassword && <p className="newpasswordformerror">{errors.confirmationpassword}</p>}
                                <Field type="password" placeholder="confirm new password" name="confirmationpassword" />

                                <button className="newpasswordbtn" type="submit">Submit</button>

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    newlogin: (data) => {
        dispatch(updatedSigninResponse(data));
    }
});

export default connect(null, mapDispatchToProps)(NewPassword);