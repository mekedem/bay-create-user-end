import { USERS_LIST_REQUEST, USERS_LIST_RESPONSE, USERS_LIST_ERROR } from "../constants/constants";
export const getUsersList = ({ pagevalue }) => ({
    type: USERS_LIST_REQUEST,
    payload: {
        pagevalue: pagevalue,
    },
});

export const usersListResponse = (data, total) => ({
    type: USERS_LIST_RESPONSE,
    payload: {
        data,
        total
    },
});

export const usersListError = (message) => ({
    type: USERS_LIST_ERROR,
    payload: {
        message,
    },
});