import { GET_SERVICE_REQUEST, SERVICE_REQUEST_RESPONSE, SERVICE_REQUEST_ERROR } from "../constants/constants";

export const getServiceRequestAction = ({ pagevalue }) => ({
    type: GET_SERVICE_REQUEST,
    payload: {
        pagevalue: pagevalue,
    },
});

export const serviceResponse = (data) => ({
    type: SERVICE_REQUEST_RESPONSE,
    payload: {
        data,
    },
});

export const serviceResponseError = (message) => ({
    type: SERVICE_REQUEST_ERROR,
    payload: {
        message,
    },
});