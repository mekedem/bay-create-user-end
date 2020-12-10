import "../constants/constants";
import {
    LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE,
    SIGNUP_SUCCESS, USER_TOKEN, INITIALDATA_FETCHED,
    LOGOUT_SUCCESS
} from "../constants/constants";

const initialState = {
    user_Info: [],
    ErrorMessage: "",
    initialData: false,
    statusList: []
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                user_Info: action.payload.data,
                ErrorMessage: "",
                initialData: state.initialData,
                statusList: state.statusList
            };

        case SIGNUP_FAILURE:
            return {
                user_Info: state.userInfo,
                ErrorMessage: action.payload.message,
                initialData: state.initialData,
                statusList: state.statusList
            };

        case LOGIN_SUCCESS:
            localStorage.setItem(USER_TOKEN, action.payload.data.token);
            return {
                user_Info: action.payload.data.user_info,
                ErrorMessage: "",
                initialData: true,
                statusList: state.statusList
            };

        case LOGIN_FAILURE:
            return {
                user_Info: state.userInfo,
                ErrorMessage: action.payload.message,
                initialData: false,
                statusList: state.statusList
            };

        case INITIALDATA_FETCHED:
            return {
                user_Info: action.payload.data.user_info,
                ErrorMessage: "",
                initialData: true,
                statusList: action.payload.data.status
            };

        case LOGOUT_SUCCESS:
            localStorage.removeItem(USER_TOKEN);
            return {
                user_Info: [],
                ErrorMessage: "",
                initialData: false,
                statusList: state.statusList
            };

        default:
            return state;
    }
};

export default authenticationReducer;