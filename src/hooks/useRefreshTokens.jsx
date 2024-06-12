import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { generatePrincipalPayload } from "../services/generatePrincipalPayload";
import localStoragePrincipalService from "../services/localStoragePrincipalService";

export const useRefreshTokens = () => {
    const {dispatch} = useAuthContext();
    const baseURL = 'http://localhost:8080';

    const refreshTokens = async (refreshToken) => {
        try {
            const response = await axios.post(
              `${baseURL}/auth/refresh`, null,{
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                        'Content-Type': 'application/json'
                    }
                });

            let principal = generatePrincipalPayload(response);
            localStoragePrincipalService.setPrincipal(principal);
            dispatch({ type: "SET_PRINCIPAL", payload: principal });
            return principal;

          } catch (error) {
            return Promise.reject(error);
          }
    };

    return {refreshTokens};
}