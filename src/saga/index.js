import { all } from "redux-saga/effects";
import { watchSignupRequest } from "./authSaga";

export default function* rootSaga() {
    yield all([
        watchSignupRequest(),
    ]);
}