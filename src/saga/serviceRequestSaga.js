import { put, takeLatest, takeEvery, call } from "redux-saga/effects";
import { getServiceRequests } from "../API/serviceRequestAPI";
import "../constants/constants";
import { GET_SERVICE_REQUEST } from "../constants/constants";
import { serviceResponse, serviceResponseError } from "../actions/serviceReqAction";

const serviceRequestSaga = function* (action) {
    const pagevalue = action.payload.pagevalue;
    try {
        const response = yield call(getServiceRequests, pagevalue);
        if (response.success) {
            yield put(serviceResponse(response.data.requests, response.data.total));
        } else yield put(serviceResponseError(response.message));
    } catch (error) {
        console.log("Connection Error happened", error);
    }
};


export const watchServiceRequest = function* () {
    yield takeLatest(GET_SERVICE_REQUEST, serviceRequestSaga);
};
