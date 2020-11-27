import { all } from "redux-saga/effects";
import { watchSignupRequest, watchSigninRequest } from "./authSaga";
import { watchServiceRequest } from "./serviceRequestSaga";

export default function* rootSaga() {
    yield all([
        watchSignupRequest(),
        watchSigninRequest(),
        watchServiceRequest()
    ]);
}