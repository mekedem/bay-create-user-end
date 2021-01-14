import React from "react";
import './forgotpassword.scss';
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const forgotPassSchema = () => {
    return Yup.object().shape({
        email: Yup.string().email().required("*required")
    });
};

const ForgotPassword = () => {

    const onSubmit = (values) => {
        setTimeout(() => {
            console.log(values);
        }, 600);
    };

    return (
        <div className="forgotflexcontainer">
            <div className="forgotformcontainer">
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={forgotPassSchema()}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="forgotinputfield-container">
                                <h1 className="forgottitle">Forgot password?</h1>

                                {touched.email && errors.email && <p className="forgotformerror">{errors.email}</p>}
                                <Field type="email" placeholder="Enter your email..." name="email" />

                                <button className="forgotbtn" type="submit">Submit</button>
                                <div id="signintomember">
                                    <span>Sign-in to members account</span>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ForgotPassword