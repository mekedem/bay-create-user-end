import "../constants/constants";
import { USERS_LIST_RESPONSE, USERS_LIST_ERROR } from "../constants/constants";

const initialState = {
    usersData: [],
    ErrorMessage: ""
};

const userManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_LIST_RESPONSE:
            return {
                usersData: action.payload.data,
                ErrorMessage: ""
            }

        case USERS_LIST_ERROR:
            return {
                usersData: action.payload,
                ErrorMessage: action.payload.message
            }

        default:
            return {
                usersData: state.usersData,
                ErrorMessage: state.ErrorMessage,
            };
    }
}


export default userManagementReducer