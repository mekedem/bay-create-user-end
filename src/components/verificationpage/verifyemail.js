import React from "react";
import './verifyemail.scss';
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const verifySchema = () => {
    return Yup.object().shape({
        verificationCode: Yup.string().max(6).required("*required")
    });
};

const VerifyEmail = () => {

    const onSubmit = (values) => {
        setTimeout(() => {
            console.log(values);
        }, 600);
    };

    return (
        <div className="verifyflexcontainer">
            <div className="verifyformcontainer">
                <Formik
                    initialValues={{
                        verificationCode: "",
                    }}
                    validationSchema={verifySchema()}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="verifyinputfield-container">
                                <h1 className="verifytitle">Verify Email</h1>

                                {touched.verificationCode && errors.verificationCode && <p className="verifyformerror">{errors.verificationCode}</p>}
                                <Field type="number" placeholder="Enter code" name="verificationCode" />

                                <button className="verifybtn" type="submit">Verify</button>
                                <div id="resendcode">
                                    <span>resend code again</span>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default VerifyEmail