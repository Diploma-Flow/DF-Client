import axios from 'axios';
import {useAuthContext} from "./useAuthContext";
import {useRefreshTokens} from "./useRefreshTokens";
import {useLogout} from './useLogout';
const useAxios = () => {
    const {principle} = useAuthContext();
    const {access_token, refresh_token} = principle;
    const {refreshTokens} = useRefreshTokens();
    const {logout} = useLogout();


    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    });

    axiosInstance.interceptors.request.use(req => req);

    //response interceptor to handle 401 error and refresh token if needed
    axiosInstance.interceptors.response.use(
        response => response, // Directly return the response if successful
        async error => {
            const originalRequest = error.config;

            // Check if the error status is 401 and the token has expired
            if (error.response?.status === 401 && error.response.data.response === 'TOKEN EXPIRED' && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    // Refresh tokens and update the request header
                    const newTokens = await refreshTokens(refresh_token);
                    originalRequest.headers['Authorization'] = `Bearer ${newTokens.access_token}`;
                    return axiosInstance(originalRequest); // Retry the original request with new token
                } catch (refreshError) {
                    logout(); // Logout if token refresh fails
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error); // Reject other errors as usual
        }
    );

    return axiosInstance; // Return the customized Axios instance
}

export default useAxios;