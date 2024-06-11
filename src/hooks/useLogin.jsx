import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { generatePayload } from "../services/generatePayload";
import {useNavigate} from "react-router-dom";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    const baseURL = 'http://localhost:8080';

    const login = (loginRequest) => {
        setIsLoading(true);
        setError(null);

        axios.post(`${baseURL}/auth/login`, loginRequest)
            .then(response => {
                let customPayload = generatePayload(response);
                localStorage.setItem("user", JSON.stringify(customPayload));
                dispatch({ type: "LOGIN", payload: customPayload });
            })
            .then(() => {
                navigate("/");
            })
            .catch(e => {
                setError(e?.response?.data?.response || "An error occurred during login.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {login, error, isLoading};
}