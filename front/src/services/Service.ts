import axios from 'axios';
import { ServiceError } from './ServiceError';

export const HTTP = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: { 'Content-Type': 'application/json ' },
    transformRequest: [
        (data, headers) => {
            if (data instanceof FormData) {
                return data;
            } else {
                return JSON.stringify(data);
            }
        },
    ],
});

HTTP.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(ServiceError.fromAxiosError(error));
    },
);
