export const signupRequested = ({ email, fullname, password, affiliationcode, phonenumber }) => ({
    type: 'SIGNUP_REQUEST',
    payload: {
        email: email,
        fullName: fullname,
        password: password,
        affiliationCode: affiliationcode,
        phone: phonenumber
    },
});