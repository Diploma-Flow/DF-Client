import { useAuthContext } from "./useAuthContext"
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { user, dispatch } = useAuthContext();
    const {access_token} = user;
    const navigate = useNavigate();
    const baseURL = 'http://localhost:8080';

    const logout = () => {
        setIsLoading(true);
        setError(null);

        axios.post(`${baseURL}/auth/logout`, null, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                dispatch({type: 'LOGOUT'});
            })
            .catch(e => {
                setError(e?.response?.data?.response || "An error occurred during logout.");
            })
            .finally(() => {
                localStorage.removeItem('user');
                setIsLoading(false);
                navigate("/login");
            });
    };

    return {logout, error, isLoading};
}