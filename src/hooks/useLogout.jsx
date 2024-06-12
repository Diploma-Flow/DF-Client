import { useAuthContext } from "./useAuthContext"
import axios from "axios";
import { useState } from "react";
import localStoragePrincipalService from "../services/localStoragePrincipalService";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { principle, dispatch } = useAuthContext();
    const {access_token} = principle;
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
                dispatch({type: 'REMOVE_PRINCIPAL'});
            })
            .catch(e => {
                setError(e?.response?.data?.response || "An error occurred during logout.");
            })
            .finally(() => {
                localStoragePrincipalService.deletePrincipal();
                setIsLoading(false);
                window.location.assign("/login");
            });
    };

    return {logout, error, isLoading};
}