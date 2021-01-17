import React from "react";
import './verifyemail.scss';
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { OTP_REGISTERY } from "../../constants/constants";
import { verifyforgotpasswordotp, verifyregistryemail, resendverificationcode } from "../../API/authAPI";
import { useHistory } from "react-router-dom";

const verifySchema = () => {
    return Yup.object().shape({
        verificationCode: Yup.string().max(6).required("*required")
    });
};

const VerifyEmail = () => {
    const history = useHistory();

    const onSubmit = (values) => {
        if (JSON.parse(localStorage.getItem(OTP_REGISTERY))) {
            setTimeout(() => {
                verifyregistryemail(values.verificationCode)
                    .then((response) => {
                        if (response.success) {
                            history.push("/");
                        }
                    })
                    .catch((error) => {
                        alert("error while verifying... retry");
                        console.log(error);
                    })
                    .then(() => { });
            }, 600);
        }
        else {
            setTimeout(() => {
                verifyforgotpasswordotp(values.verificationCode)
                    .then((response) => {
                        if (response.success) {
                            localStorage.setItem("sessionId", response.data.sessionId);
                            history.push("./setnewpassword");
                        }
                    })
                    .catch((error) => {
                        alert("error while verifying... retry");
                        console.log(error);
                    })
                    .then(() => { });
            }, 600);
        }
    };

    const resendCode = () => {
        setTimeout(() => {
            resendverificationcode()
                .then((response) => {
                    if (response.success) {
                        alert(response.data.message);
                    }
                })
                .catch((error) => {
                    alert("error while verifying... retry");
                    console.log(error);
                })
                .then(() => { });
        }, 600);
    }

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
                                <Field type="text" placeholder="Enter code" name="verificationCode" />

                                <button className="verifybtn" type="submit">Verify</button>
                                <div id="resendcode">
                                    <span onClick={resendCode}>resend code again</span>
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