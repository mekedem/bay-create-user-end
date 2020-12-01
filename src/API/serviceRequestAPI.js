import axios from "axios";
import { baseURL, GETSERVICEREQUEST_URL, GETLISTOFUSERS_URL, GETINITIALDATA_URL } from "../API/API_URLS";
import { USER_TOKEN } from "../constants/constants";

export const getServiceRequests = (pagevalue) => {
    const token = localStorage.getItem(USER_TOKEN);
    console.log("@getsrvicereq: ", token);
    const url = baseURL + `/${GETSERVICEREQUEST_URL}?page=${pagevalue}`;
    return axios.get(url, { headers: { Authorization: token, } }).then(d => d.data);
};

export const getListOfUsers = (pagevalue) => {
    const token = localStorage.getItem(USER_TOKEN);
    const url = baseURL + `/${GETLISTOFUSERS_URL}?page=${pagevalue}`;
    return axios.get(url, { headers: { Authorization: token, } }).then(d => d.data);
};

export const getInitialData = () => {
    const token = localStorage.getItem(USER_TOKEN);
    const url = baseURL + `/${GETINITIALDATA_URL}`;
    return axios.get(url, { headers: { Authorization: token, } }).then(d => d.data);
}

export const requireService = (request) => {
    const tokenauth = localStorage.getItem(USER_TOKEN);
    console.log("@requireservice: ", tokenauth);
    const url = baseURL + `/${GETSERVICEREQUEST_URL}`;
    return axios.post(url, { headers: { Authorization: tokenauth, }, body: { request } }).then(d => d.data);
}