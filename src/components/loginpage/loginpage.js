import React from "react";
import './login.scss';
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const SigninComponent = ({ errors, touched }) => {

    return (
        <div className="signinflexcontainer">

            <div className="signinformcontainer">
                <Form>
                    <div className="signininputfield-container">
                        <h1 className="signintitle">Sign In</h1>

                        {touched.email && errors.email && <p className="signinformerror">{errors.email}</p>}
                        <Field type="email" placeholder="Email" name="email" />

                        {touched.password && errors.password && <p className="signinformerror">{errors.password}</p>}
                        <Field type="password" placeholder="Password" name="password" />

                        <Field type="text" placeholder="Enter Code" name="affiliationcode" />

                        <button className="signinbtn" type="submit">Login</button>
                        <div>
                            <Field type="checkbox" name="terms" checked={true} />
                            <span id="remembermetext">Remember me</span>

                            <span id="forgetpassword">Forget Password?</span>
                            <span id="notmember">Not a Member? Register Now</span>
                        </div>
                        <br /><br /><br /><br />
                        <br /><br /><br /><br />
                        <div id="footerlinks">
                            <span className="terms"> Privacy Policy </span> <span className="terms"> T & C </span> <span className="terms"> User Policy </span>
                        </div>
                    </div>
                </Form>

            </div>
        </div>
    );
};

const Login = withRouter(withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().email().required("*required"),
        password: Yup.string().min(8).max(50).required("*required")
    }),

    handleSubmit(values, { props }) {
        // console.log("heyde", values);
    }

})(SigninComponent));


export default Login