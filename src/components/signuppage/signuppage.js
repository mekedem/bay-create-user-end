import React, { useEffect } from "react";
import './signup.scss';
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from 'react-redux';
import { signupRequested } from '../../actions/authActions';
import { useHistory } from "react-router-dom";

const SignupComponent = ({ errors, touched, signupInfo }) => {

    const [serverError, setServerError] = React.useState('');
    const history = useHistory();

    React.useEffect(() => {
        if (signupInfo.SignupError) {
            const err = signupInfo.SignupError;
            setServerError(err);
        }
    }, [signupInfo.SignupError]);

    const gotoLogin = () => {
        history.push('/login');
    }

    return (
        <div className="signupflexcontainer">

            <div className="signupformcontainer">
                <Form>
                    <div className="signupinputfield-container">
                        <h1 className="signuptitle">New User Registration</h1>

                        <p className="signupformerror">{serverError}</p>
                        {touched.email && errors.email && <p className="signupformerror">{errors.email}</p>}
                        <Field type="email" placeholder="Email" name="email" />

                        {touched.phonenumber && errors.phonenumber && <p className="signupformerror">{errors.phonenumber}</p>}
                        <Field type="text" placeholder="Phone Number" name="phonenumber" />

                        {touched.fullname && errors.fullname && <p className="signupformerror">{errors.fullname}</p>}
                        <Field type="text" placeholder="Full Name" name="fullname" />

                        {touched.password && errors.password && <p className="signupformerror">{errors.password}</p>}
                        <Field type="password" placeholder="Password" name="password" />

                        <button className="signupbtn" type="submit">Register</button>
                        <span id="signinlink" onClick={gotoLogin}> Sign-in to members account </span>
                    </div>
                </Form>

            </div>
        </div>
    );
};

const Signup = withRouter(withFormik({
    mapPropsToValues({ email, password, fullname, phonenumber }) {
        return {
            email: email || '',
            password: password || '',
            fullname: fullname || '',
            phonenumber: phonenumber || ''
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().email().required("*required"),
        password: Yup.string().min(8).max(50).required("*required"),
        phonenumber: Yup.string().required("*required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "phone number not valid"),
        fullname: Yup.string().min(3).required("*required").test("username", "Name should contain first name and last name", (fullname) => {
            return fullname && fullname.trim().split(" ").length === 2;
        })
    }),

    handleSubmit(values, { props }) {
        // console.log("heyde", values);
        props.dispatch(signupRequested(values, props.history));
    }

})(SignupComponent));

// signupDefaultState
const mapStateToProps = (state) => {
    return {
        signupInfo: state.authenticationRed
    };
};


export default connect(mapStateToProps)(Signup)