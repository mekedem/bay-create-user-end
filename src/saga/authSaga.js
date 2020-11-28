import { put, takeLatest, takeEvery, call } from "redux-saga/effects";
import { signupuser, signinuser } from "../API/authAPI";
import { signupResponse, signupError, signinResponse, signinError } from "../actions/authActions";
import "../constants/constants";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../constants/constants";

const signupRequestSaga = function* (action) {
    const userCredential = action.payload;
    try {
        const response = yield call(signupuser, userCredential);
        if (response.success) {
            yield put(signupResponse(response.data));
        } else yield put(signupError(response.message));
    } catch (error) {
        console.log("Connection Error happened", error);
    }
};

const signinRequestSaga = function* (action) {
    const userCredential = action.payload;
    try {
        const response = yield call(signinuser, userCredential);
        if (response.success) {
            yield put(signinResponse(response.data));
            userCredential.history.push("/");
        } else yield put(signinError(response.message));
    } catch (error) {
        console.log("Connection Error happened", error);
    }
};

export const watchSignupRequest = function* () {
    yield takeLatest(SIGNUP_REQUEST, signupRequestSaga);
};

export const watchSigninRequest = function* () {
    yield takeLatest(LOGIN_REQUEST, signinRequestSaga);
};
