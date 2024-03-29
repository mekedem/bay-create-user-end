import "../constants/constants"
import {
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE,
    SIGNUP_REQUEST, SIGNUP_SUCCESS, INITIALDATA_FETCHED, LOGOUT_SUCCESS,
    UPDATED_LOGIN_SUCCESS
} from "../constants/constants";

export const signupRequested = ({ email, fullname, password, affiliationcode, phonenumber }, history) => ({
    type: SIGNUP_REQUEST,
    payload: {
        email: email,
        fullName: fullname,
        password: password,
        affiliationCode: affiliationcode,
        phone: phonenumber,
        history,
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

export const updatedSigninResponse = (data) => ({
    type: UPDATED_LOGIN_SUCCESS,
    payload: {
        data,
    }
});

export const signinError = (message) => ({
    type: LOGIN_FAILURE,
    payload: {
        message,
    },
});

export const initialDataFetched = (data) => ({
    type: INITIALDATA_FETCHED,
    payload: {
        data,
    }
});


export const logoutUserAction = () => ({
    type: LOGOUT_SUCCESS,
});