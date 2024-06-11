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

    const login = async (loginRequest) => {
        setIsLoading(true);
        setError(null);

        try{
            const response = await axios.post('http://localhost:8080/auth/login', loginRequest);

            if (response.status !== 200) {
                setError(response.data);
                setIsLoading(false);
                return;
            }

            let customPayload = generatePayload(response);
            localStorage.setItem("user", JSON.stringify(customPayload));
            dispatch({ type: "LOGIN", payload: customPayload });
            setIsLoading(false);
            navigate("/");
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    return {login, error, isLoading};
}