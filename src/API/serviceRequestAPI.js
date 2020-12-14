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

export const getDownloadFile = (fileurl, filename) => {
    const url = baseURL + fileurl;
    const token = localStorage.getItem(USER_TOKEN);

    axios.get(url, {
        responseType: 'blob',
        headers: { Authorization: token, }
    }).then(function (response) {
        const url = window.URL.createObjectURL(
            new Blob([response.data], {
                type: response.headers["content-type"],
            })
        );

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
    });
}

export const requireService = (request) => {
    const token = localStorage.getItem(USER_TOKEN);
    const url = baseURL + `/${GETSERVICEREQUEST_URL}`;

    var bodyFormData = new FormData();
    bodyFormData.append('description', request.description);
    for (var x = 0; x < request.files.length; x++) {
        bodyFormData.append('files', request.files[x])
    }

    return axios.post(url, bodyFormData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: token } })
        .then(d => d.data)
        .catch(function (response) {
            console.log(response);
        });
}

// "{{local_url}}/requests/5fd5d5a7d4e76e1718c9f680"
export const editRequestService = (request) => {
    const token = localStorage.getItem(USER_TOKEN);
    const url = baseURL + `/${GETSERVICEREQUEST_URL}/${request.requestID}`;

    console.log(request.statusID);

    var bodyFormData = new FormData();
    bodyFormData.append('description', request.description);
    bodyFormData.append('status', request.statusID);
    for (var x = 0; x < request.files.length; x++) {
        bodyFormData.append('files', request.files[x])
    }

    return axios.put(url, bodyFormData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: token } })
        .then(d => d.data)
        .catch(function (response) {
            console.log(response);
        });
}