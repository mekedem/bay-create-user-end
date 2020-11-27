import { baseURL, SIGNUP_URL, LOGIN_URL } from './API_URLS';

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
        if (response.ok) {
            return await response.json();
        }
        if (response.status == 401) {
            console.log(response);
            return await response.json();
        }
    }
    catch {
        throw new Error("Unexpected error!!!");
    }

}