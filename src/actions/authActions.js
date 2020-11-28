import "../constants/constants"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constants/constants";

export const signupRequested = ({ email, fullname, password, affiliationcode, phonenumber }) => ({
    type: SIGNUP_REQUEST,
    payload: {
        email: email,
        fullName: fullname,
        password: password,
        affiliationCode: affiliationcode,
        phone: phonenumber
    },
});


export const signupResponse = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: {
        data,
    },
});

export const signupError = (message) => ({
    type: SIGNUP_FAILURE,
    payload: {
        message,
    },
});


export const signinRequested = ({ email, password }, history) => ({
    type: LOGIN_REQUEST,
    payload: {
        email: email,
        password: password,
        history,
    },
});


export const signinResponse = (data) => ({
    type: LOGIN_SUCCESS,
    payload: {
        data,
    },
});

export const signinError = (message) => ({
    type: LOGIN_FAILURE,
    payload: {
        message,
    },
});