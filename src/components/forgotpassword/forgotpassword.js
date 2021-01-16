import React from "react";
import './forgotpassword.scss';
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { userforgetspassword } from '../../API/authAPI';
import { useHistory } from "react-router-dom";
import { OTP_REGISTERY } from "../../constants/constants";


const forgotPassSchema = () => {
    return Yup.object().shape({
        email: Yup.string().email().required("*required")
    });
};

const ForgotPassword = () => {
    const history = useHistory();

    const gotoEmailVerification = () => {
        localStorage.setItem(OTP_REGISTERY, false);
        history.push("./verifyemail");
    }

    const onSubmit = (values) => {
        setTimeout(() => {
            userforgetspassword(values.email)
                .then((response) => {
                    if (response.success) {
                        console.log("IT IS A SUCCESS");
                        gotoEmailVerification();
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

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ForgotPassword