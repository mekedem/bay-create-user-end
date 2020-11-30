import "../constants/constants";
import { SERVICE_REQUEST_RESPONSE, SERVICE_REQUEST_ERROR } from "../constants/constants";

const initialState = {
    requestData: [],
    ErrorMessage: ""
};

const serviceRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE_REQUEST_RESPONSE:
            return {
                requestData: action.payload.data,
                ErrorMessage: ""
            }

        case SERVICE_REQUEST_ERROR:
            return {
                requestData: [],
                ErrorMessage: action.payload.message
            }

        default:
            return state;
    }
}


export default serviceRequestReducer