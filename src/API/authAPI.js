import { baseURL, SIGNUP_URL, LOGIN_URL, LOGOUT_URL } from './API_URLS';
import { USER_TOKEN } from "../constants/constants";

export const signupuser = async (signupCredentials) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupCredentials)
    };

    let response = await fetch(`${baseURL}/${SIGNUP_URL}`, requestOptions)
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Unexpected error!!!");
    }
}

export const signinuser = async (signinCredentials) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signinCredentials)
    };
    try {
        let response = await fetch(`${baseURL}/${LOGIN_URL}`, requestOptions)
        return await response.json();
    }
    catch {
        throw new Error("Unexpected error!!!");
    }

}

export const logoutuser = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem(USER_TOKEN) },
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