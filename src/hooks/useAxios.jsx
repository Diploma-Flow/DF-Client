import axios from 'axios';
import {useAuthContext} from "./useAuthContext";
import {useRefreshTokens} from "./useRefreshTokens";
import {useLogout} from './useLogout';
const useAxios = () => {
    const baseURL = 'http://localhost:8080';
    const {principle} = useAuthContext();
    const {access_token, refresh_token} = principle;
    const {refreshTokens} = useRefreshTokens();
    const {logout} = useLogout();


    const axiosInstance = axios.create({
        baseURL,
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    });

    axiosInstance.interceptors.request.use(async req => {
        return req;
    });

    //response interceptor to handle 401 error and refresh token if needed
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const originalRequest = error.config;
            if (error.response.status !== 401 || originalRequest._retry || error.response.data.response !== 'TOKEN EXPIRED') {
                return Promise.reject(error);
            }

            originalRequest._retry = true;

            try {
                const newTokens = await refreshTokens(refresh_token);
                originalRequest.headers['Authorization'] = `Bearer ${newTokens.access_token}`;

                console.log("2. New RefreshToken", newTokens);
            } catch (e) {
                //REFRESH TOKEN IS EXPIRED OR INVALID
                logout();
                return Promise.reject(e.response.data.response);
            }

            try {
                const nextResponse = await axiosInstance(originalRequest);
                return nextResponse;
            } catch (e) {
                //USER IS NOT AUTHORIZTED FOR THIS ACTION
                return Promise.reject(e.response.data.response);
            }
        }
    );

    return axiosInstance;
}

export default useAxios;