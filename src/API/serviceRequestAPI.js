import axios from "axios";
import { baseURL, GETSERVICEREQUEST_URL, GETLISTOFUSERS_URL, GETINITIALDATA_URL } from "../API/API_URLS";
import { USER_TOKEN } from "../constants/constants";

export const getServiceRequests = (pagevalue) => {
    const token = localStorage.getItem(USER_TOKEN);
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
    return axios.get(url, { headers: { Authorization: token, something: 'this is' } }).then(d => d.data);
}

export const getDownloadFile = async (fileurl) => {
    return axios.get(`${baseURL}${fileurl}`, {
        responseType: 'blob',
    }).then(response => response.blob())
}

export const requireService = (request) => {
    const token = localStorage.getItem(USER_TOKEN);
    const url = baseURL + `/${GETSERVICEREQUEST_URL}`;

    var bodyFormData = new FormData();
    bodyFormData.append('description', request.description);
    bodyFormData.append('files', request.files);
    return axios({
        method: 'post',
        url: url,
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data', Authorization: token }
    })
        .then(d => d.data)
        .catch(function (response) {
            console.log(response);
        });

    // return axios.post(url, request, { headers: { Authorization: token } }).then(d => d.data);
}