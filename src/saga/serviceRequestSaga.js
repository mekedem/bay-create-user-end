import { put, takeLatest, takeEvery, call } from "redux-saga/effects";
import { getServiceRequests } from "../API/serviceRequestAPI";
import "../constants/constants";
import { GET_SERVICE_REQUEST } from "../constants/constants";

const serviceRequestSaga = function* () {
    const pagevalue = "1";
    try {
        const response = yield call(getServiceRequests, pagevalue);
        if (response.success) {
            console.log(response);
        } else console.log("hello error");
    } catch (error) {
        console.log("Connection Error happened", error);
    }
};


export const watchServiceRequest = function* () {
    yield takeLatest(GET_SERVICE_REQUEST, serviceRequestSaga);
};
