import { GET_SERVICE_REQUEST } from "../constants/constants";

export const getServiceRequest = ({ pagevalue }) => ({
    type: GET_SERVICE_REQUEST,
    payload: {
        pagevalue: pagevalue,
    },
});