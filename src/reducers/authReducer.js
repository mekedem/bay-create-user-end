import "../constants/constants";
import {
    LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE,
    SIGNUP_SUCCESS, USER_TOKEN, INITIALDATA_FETCHED,
    LOGOUT_SUCCESS, UPDATED_LOGIN_SUCCESS
} from "../constants/constants";

const initialState = {
    user_Info: [],
    ErrorMessage: "",
    initialData: false,
    statusList: [],
    LoginError: "",
    SignupError: ""
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem(USER_TOKEN, action.payload.data.token);
            alert(action.payload.data.message + "");
            return {
                user_Info: state.user_Info,
                ErrorMessage: "",
                initialData: state.initialData,
                statusList: state.statusList,
                LoginError: "",
                SignupError: ""
            };

        case SIGNUP_FAILURE:
            return {
                user_Info: state.userInfo,
                ErrorMessage: action.payload.message,
                initialData: state.initialData,
                statusList: state.statusList,
                LoginError: "",
                SignupError: action.payload.message
            };

        case LOGIN_SUCCESS:
            localStorage.setItem(USER_TOKEN, action.payload.data.token);
            return {
                user_Info: action.payload.data.user_info,
                ErrorMessage: "",
                initialData: true,
                statusList: action.payload.data.status,
                LoginError: "",
                SignupError: ""
            };

        case UPDATED_LOGIN_SUCCESS:
            return {
                user_Info: action.payload.data.user_info,
                ErrorMessage: "",
                initialData: state.initialData,
                statusList: action.payload.data.status,
                LoginError: "",
                SignupError: ""
            };

        case LOGIN_FAILURE:
            return {
                user_Info: state.userInfo,
                ErrorMessage: action.payload.message,
                initialData: false,
                statusList: state.statusList,
                LoginError: action.payload.message,
                SignupError: ""
            };

        case INITIALDATA_FETCHED:
            return {
                user_Info: action.payload.data.user_info,
                ErrorMessage: "",
                initialData: true,
                statusList: action.payload.data.status,
                LoginError: "",
                SignupError: ""
            };

        case LOGOUT_SUCCESS:
            localStorage.removeItem(USER_TOKEN);
            return {
                user_Info: [],
                ErrorMessage: "",
                initialData: false,
                statusList: state.statusList,
                LoginError: "",
                SignupError: ""
            };

        default:
            return state;
    }
};

export default authenticationReducer;