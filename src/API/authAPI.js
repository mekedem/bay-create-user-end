import { baseURL, SIGNUP_URL } from './API_URLS';

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
