import {useState} from "react";
import {useAuthContext} from "./useAuthContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {generatePrincipalPayload} from "../services/generatePrincipalPayload";
import {useLogin} from "./useLogin";

/**
 * @typedef {Object} RegisterRequest
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 */

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const baseURL = 'http://localhost:8080';
    const { login } = useLogin()
    // const axios = require('axios').default;

    /**
     * Function to register a new user.
     * @param {RegisterRequest} registerRequest - The registration details.
     */
    const register = (registerRequest) => {
        setIsLoading(true);
        setError(null);

        axios.post(`${baseURL}/auth/register`, registerRequest)
            .then(response => {
                // If registration is successful, proceed with login
                const loginRequest = {
                    email: registerRequest.email,
                    password: registerRequest.password
                };

                // Call the login function from the useLogin hook
                return login(loginRequest);
            })
            .catch(e => {
                console.log(e);
                setError(e?.response?.data?.response || "An error occurred during registration.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {register, error, isLoading};
}