import { all } from "redux-saga/effects";
import { watchSignupRequest, watchSigninRequest } from "./authSaga";

export default function* rootSaga() {
    yield all([
        watchSignupRequest(),
        watchSigninRequest()
    ]);
}