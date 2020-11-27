import { put, takeLatest, takeEvery, call } from "redux-saga/effects";
import { signupuser } from "../API/authAPI";

const signupRequestSaga = function* (action) {
    const userCredential = action.payload;
    try {
        const response = yield call(signupuser, userCredential);
        if (response.success) {
            console.log("yemetaw keserver nw : ", response.data);
        } else console.log("signup error has occured");
    } catch (error) {
        console.log("Connection Error happened", error);
    }
};

export const watchSignupRequest = function* () {
    yield takeLatest('SIGNUP_REQUEST', signupRequestSaga);
};
