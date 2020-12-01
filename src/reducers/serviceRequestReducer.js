import "../constants/constants";
import { SERVICE_REQUEST_RESPONSE, SERVICE_REQUEST_ERROR, ADD_SERVICE_REQUEST } from "../constants/constants";

const initialState = {
    requestData: [],
    ErrorMessage: "",
    total: 0
};

const serviceRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE_REQUEST_RESPONSE:
            return {
                requestData: action.payload.data,
                ErrorMessage: "",
                total: action.payload.total
            }

        case SERVICE_REQUEST_ERROR:
            return {
                requestData: [],
                ErrorMessage: action.payload.message,
                total: 0
            }

        case ADD_SERVICE_REQUEST:
            const newRequestData = { ...state };
            newRequestData.total = newRequestData.total + 1;
            newRequestData.requestData.unshift(action.payload.data);

            return newRequestData;
        default:
            return state;
    }
}


export default serviceRequestReducer