import {jwtDecode} from "jwt-decode";

export const generatePrincipalPayload = (response) => {
    const { data } = response;

    const userRole = jwtDecode(data.data.access_token)?.role;

    return {
        access_token: data.data.access_token,
        refresh_token: data.data.refresh_token,
        role: userRole,
    };
};