import React from "react";
import './login.scss';
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { signinRequested } from "../../actions/authActions";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const SigninComponent = ({ errors, touched, signInInfo }) => {

    const [serverError, setServerError] = React.useState('');
    const history = useHistory();

    React.useEffect(() => {
        if (signInInfo.LoginError) {
            const err = signInInfo.LoginError;
            setServerError(err);
        }


    }, [signInInfo.LoginError]);

    const gotoSignup = () => { history.push('/signup'); }
    const gotoForgotpass = () => { history.push('/forgotpassword'); }

    return (
        <div className="signinflexcontainer">

            <div className="signinformcontainer">
                <Form>
                    <div className="signininputfield-container">
                        <h1 className="signintitle">Sign In</h1>

                        <p className="signinformerror">{serverError}</p>
                        {touched.email && errors.email && <p className="signinformerror">{errors.email}</p>}
                        <Field type="email" placeholder="Email" name="email" />

                        {touched.password && errors.password && <p className="signinformerror">{errors.password}</p>}
                        <Field type="password" placeholder="Password" name="password" />

                        <button className="signinbtn" type="submit">Login</button>
                        <div>

                            <span id="notmemberl" onClick={gotoSignup}>Not a Member? Register Now</span>
                            <span id="forgotpass" onClick={gotoForgotpass}>Forgot Password?</span>
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
        props.dispatch(signinRequested(values, props.history));
    }

})(SigninComponent));


const mapStateToProps = (state) => {
    return {
        signInInfo: state.authenticationRed
    };
};

export default connect(mapStateToProps)(Login)