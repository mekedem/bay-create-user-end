import { GET_SERVICE_REQUEST, SERVICE_REQUEST_RESPONSE, SERVICE_REQUEST_ERROR, ADD_SERVICE_REQUEST, UPDATE_SERVICE_REQUEST } from "../constants/constants";

export const getServiceRequestAction = ({ pagevalue }) => ({
    type: GET_SERVICE_REQUEST,
    payload: {
        pagevalue: pagevalue,
    },
});

export const serviceResponse = (data, total) => ({
    type: SERVICE_REQUEST_RESPONSE,
    payload: {
        data,
        total
    },
});

export const addServiceRequest = (data) => ({
    type: ADD_SERVICE_REQUEST,
    payload: {
        data
    }
});

export const updateServiceRequest = (data) => ({
    type: UPDATE_SERVICE_REQUEST,
    payload: {
        data
    }
});

export const serviceResponseError = (message) => ({
    type: SERVICE_REQUEST_ERROR,
    payload: {
        message,
    },
});