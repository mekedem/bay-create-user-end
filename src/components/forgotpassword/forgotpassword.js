import React from "react";
import './forgotpassword.scss';
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const ForgotPassComponent = ({ errors, touched }) => {

    return (
        <div className="forgotflexcontainer">
            <div className="forgotformcontainer">
                <Form>
                    <div className="forgotinputfield-container">
                        <h1 className="forgottitle">To recover your password fill and submit the form below</h1>

                        {touched.email && errors.email && <p className="forgotformerror">{errors.email}</p>}
                        <Field type="email" placeholder="Email" name="email" />

                        <button className="forgotbtn" type="submit">Submit</button>
                        <div id="signintomember">
                            <span>Sign-in to your Members Account</span>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

const ForgotPassword = withRouter(withFormik({
    mapPropsToValues({ email }) {
        return { email: email || '' }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required("*required")
    }),
    handleSubmit(values, { props }) {
        // console.log("heyde", values);
    }
})(ForgotPassComponent));


export default ForgotPassword