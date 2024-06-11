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
    
    const logout = async () => {
        try{
            setError(null);
            setIsLoading(true);
            //FIXME logout not working
            await axios.post('http://localhost:8080/auth/logout', null, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                }
            });

            setIsLoading(false);
        
            //remove user from storage
            //This will remove all user related info from the local storage of the browser
            localStorage.removeItem('user');
            
            //dispatch logout action
            //This will clear the authContext and set it to null
            dispatch({type: 'LOGOUT'});
            navigate("/login")
        } catch (e) {
            // console.error(e);
            setError(e.message);
            setIsLoading(false);
        }
    }

    return {logout, error, isLoading};
}