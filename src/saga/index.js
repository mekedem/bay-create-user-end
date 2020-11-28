import { all } from "redux-saga/effects";
import { watchSignupRequest, watchSigninRequest } from "./authSaga";
import { watchServiceRequest } from "./serviceRequestSaga";
import { watchUsersListRequest } from "./userManagementSaga";

export default function* rootSaga() {
    yield all([
        watchSignupRequest(),
        watchSigninRequest(),
        watchServiceRequest(),
        watchUsersListRequest()
    ]);
}