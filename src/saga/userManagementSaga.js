import { put, takeLatest, takeEvery, call } from "redux-saga/effects";
import { getListOfUsers } from "../API/serviceRequestAPI";
import "../constants/constants";
import { USERS_LIST_REQUEST } from "../constants/constants";
import { usersListResponse, usersListError } from "../actions/userMgmtAction";

const usersListRequestSaga = function* (action) {
    const pagevalue = action.payload.pagevalue;
    try {
        const response = yield call(getListOfUsers, pagevalue);
        if (response.success) {
            yield put(usersListResponse(response.data.users));
        } else yield put(usersListError(response.message));
    } catch (error) {
        console.log("Connection Error happened", error);
    }
};


export const watchUsersListRequest = function* () {
    yield takeLatest(USERS_LIST_REQUEST, usersListRequestSaga);
};
