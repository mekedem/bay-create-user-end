import React from "react";
import './signup.scss';
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const SignupComponent = ({ errors, touched }) => {

    return (
        <div className="signupflexcontainer">

            <div className="signupformcontainer">
                <Form>
                    <div className="signupinputfield-container">
                        <h1 className="signuptitle">New User Registration</h1>

                        {touched.email && errors.email && <p className="signupformerror">{errors.email}</p>}
                        <Field type="email" placeholder="Email" name="email" />

                        <Field type="text" placeholder="Phone Number" name="phonenumber" />

                        {touched.username && errors.username && <p className="signupformerror">{errors.fullname}</p>}
                        <Field type="text" placeholder="Full Name" name="fullname" />

                        {touched.password && errors.password && <p className="signupformerror">{errors.password}</p>}
                        <Field type="password" placeholder="Password" name="password" />

                        <Field type="text" placeholder="Affiliation Code" name="affiliationcode" />

                        <button className="signupbtn" type="submit">Create a Free Account</button>
                        <span id="signinlink"> Sign-in to your members account </span>
                    </div>
                </Form>

            </div>
        </div>
    );
};

const Signup = withRouter(withFormik({
    mapPropsToValues({ email, password, fullname, affiliationcode, phonenumber }) {
        return {
            email: email || '',
            password: password || '',
            fullname: fullname || '',
            affiliationcode: affiliationcode || '',
            phonenumber: phonenumber || ''
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().email().required("*required"),
        password: Yup.string().min(8).max(50).required("*required"),
        fullname: Yup.string().min(3).required("*required").test("username", "Name should contain first name and last name", (fullname) => {
            return fullname && fullname.trim().split(" ").length === 2;
        })
    }),

    handleSubmit(values, { props }) {
        // console.log("heyde", values);
    }

})(SignupComponent));


export default Signup