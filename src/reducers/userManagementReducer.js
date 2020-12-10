import "../constants/constants";
import { USERS_LIST_RESPONSE, USERS_LIST_ERROR } from "../constants/constants";

const initialState = {
    usersData: [],
    ErrorMessage: "",
    total: 0
};

const userManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_LIST_RESPONSE:
            return {
                usersData: action.payload.data,
                ErrorMessage: "",
                total: action.payload.total
            }

        case USERS_LIST_ERROR:
            return {
                usersData: action.payload,
                ErrorMessage: action.payload.message,
                total: 0
            }

        default:
            return state;
    }
}


export default userManagementReducer