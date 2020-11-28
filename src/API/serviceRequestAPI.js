import axios from "axios";
import { baseURL, GETSERVICEREQUEST_URL, GETLISTOFUSERS_URL } from "../API/API_URLS";
import { USER_TOKEN } from "../constants/constants";

const API = axios.create({
    baseURL: `${baseURL}`,
});

API.defaults.headers.common["Authorization"] = localStorage.getItem(USER_TOKEN);
API.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


export const getServiceRequests = (pagevalue) => {
    return API.get(baseURL + `/${GETSERVICEREQUEST_URL}?page=${pagevalue}`).then((d) => d.data);
};

export const getListOfUsers = (pagevalue) => {
    return API.get(baseURL + `/${GETLISTOFUSERS_URL}?page=${pagevalue}`).then((d) => d.data);
};