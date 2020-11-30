import "../constants/constants";
import {
    LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE,
    SIGNUP_SUCCESS, USER_TOKEN, INITIALDATA_FETCHED,
    LOGOUT_SUCCESS
} from "../constants/constants";

const initialState = {
    user_Info: [],
    ErrorMessage: "",
    initialData: false
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                user_Info: action.payload.data,
                ErrorMessage: "",
            };

        case SIGNUP_FAILURE:
            return {
                user_Info: state.userInfo,
                ErrorMessage: action.payload.message,
            };

        case LOGIN_SUCCESS:
            console.log("logintoken", action.payload.data.token);
            localStorage.setItem(USER_TOKEN, action.payload.data.token);
            return {
                user_Info: action.payload.data,
                ErrorMessage: "",
                initialData: true
            };

        case LOGIN_FAILURE:
            return {
                user_Info: state.userInfo,
                ErrorMessage: action.payload.message,
                initialData: false
            };

        case INITIALDATA_FETCHED:
            return {
                user_Info: action.payload.data,
                ErrorMessage: "",
                initialData: true
            };

        case LOGOUT_SUCCESS:
            localStorage.removeItem(USER_TOKEN);
            return {
                user_Info: [],
                ErrorMessage: "",
                initialData: false
            };

        default:
            return state;
    }
};

export default authenticationReducer;