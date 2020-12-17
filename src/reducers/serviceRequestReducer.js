import "../constants/constants";
import { SERVICE_REQUEST_RESPONSE, SERVICE_REQUEST_ERROR, ADD_SERVICE_REQUEST, UPDATE_SERVICE_REQUEST } from "../constants/constants";

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

        case UPDATE_SERVICE_REQUEST:
            const updatedRequestData = { ...state };
            const newData = [];
            newData.push(action.payload.data);

            updatedRequestData.total = state.total;
            updatedRequestData.requestData = updatedRequestData.requestData.map(obj => newData.find(o => o._id === obj._id) || obj);

            return updatedRequestData;
        default:
            return state;
    }
}


export default serviceRequestReducer