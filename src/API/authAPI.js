import { baseURL, SIGNUP_URL, LOGIN_URL, LOGOUT_URL, FORGOTPASSWORD_URL, FORGOTPASSWORDOTP_URL, FORGOTPASSWORDCOMPLETE_URL } from './API_URLS';
import { USER_TOKEN } from "../constants/constants";

export const signupuser = async (signupCredentials) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupCredentials)
    };

    let response = await fetch(`${baseURL}/${SIGNUP_URL}`, requestOptions);
    if (response.ok) {
        return await response.json();
    } else {
        if (response.status === 400) {
            return await response.json();
        }
        throw new Error("Unexpected error!!!");
    }
}

export const signinuser = async (signinCredentials) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signinCredentials)
    };
    let response = await fetch(`${baseURL}/${LOGIN_URL}`, requestOptions);
    try {
        return await response.json();
    }
    catch {
        if (response.status === 400) {
            return await response.json();
        }
        throw new Error("Unexpected error!!!");
    }

}

export const logoutuser = async () => {
    const token = localStorage.getItem(USER_TOKEN);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': token },
        body: JSON.stringify({})
    };
    try {
        let response = await fetch(`${baseURL}/${LOGOUT_URL}`, requestOptions)
        return await response.json();
    }
    catch {
        throw new Error("Unexpected error!!!");
    }
}

export const userforgetspassword = async (email) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
    };
    try {
        let response = await fetch(`${baseURL}/${FORGOTPASSWORD_URL}`, requestOptions)
        return await response.json();
    }
    catch {
        throw new Error("Unexpected error!!!");
    }
}

export const verifyforgotpasswordotp = async (otp) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp: otp })
    };
    try {
        let response = await fetch(`${baseURL}/${FORGOTPASSWORD_URL}/${FORGOTPASSWORDOTP_URL}`, requestOptions)
        return await response.json();
    }
    catch {
        throw new Error("Unexpected error!!!");
    }
}

export const setthenewpassword = async (password) => {
    const sessionId = localStorage.getItem("sessionId");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password, sessionId: sessionId })
    };
    try {
        let response = await fetch(`${baseURL}/${FORGOTPASSWORD_URL}/${FORGOTPASSWORDCOMPLETE_URL}`, requestOptions)
        return await response.json();
    }
    catch {
        throw new Error("Unexpected error!!!");
    }
}