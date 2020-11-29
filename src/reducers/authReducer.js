import "../constants/constants";
import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS, USER_TOKEN, INITIALDATA_FETCHED } from "../constants/constants";

const initialState = {
    userInfo: [],
    ErrorMessage: ""
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                userInfo: action.payload.data,
                ErrorMessage: "",
            };

        case SIGNUP_FAILURE:
            return {
                userInfo: state.userInfo,
                ErrorMessage: action.payload.message,
            };

        case LOGIN_SUCCESS:
            localStorage.setItem(USER_TOKEN, action.payload.data.token);
            return {
                userInfo: action.payload.data,
                ErrorMessage: "",
            };

        case LOGIN_FAILURE:
            return {
                userInfo: state.userInfo,
                ErrorMessage: action.payload.message,
            };

        case INITIALDATA_FETCHED:
            return {
                userInfo: action.payload.data,
                ErrorMessage: "",
            };

        default:
            return state;
    }
};

export default authenticationReducer;