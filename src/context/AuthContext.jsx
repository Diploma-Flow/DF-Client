import { createContext, useReducer, useEffect } from "react";
import localStoragePrincipalService from "../services/localStoragePrincipalService";

// creates context that will be passed along the components
export const AuthContext = createContext(null);

// ! THE 'state' is the previous state
export const authReducer = (state, action) => {
    switch (action.type){
        case 'SET_PRINCIPAL':
            return {principle: action.payload};
        case 'REMOVE_PRINCIPAL':
            return {principle: null};
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}

export const AuthContextProvider = ({children}) => {
    const initialState = {principle: localStoragePrincipalService.getPrincipal()};
    const [state, dispatch] = useReducer(authReducer, initialState)
    const isAuthenticated = !!state.principle;

    useEffect(() =>{
        checkIfUserIsLoggedIn();
    }, [])
    const checkIfUserIsLoggedIn = () => {
        try{
            let principle = localStoragePrincipalService.getPrincipal();
            if(principle && principle.access_token && principle.refresh_token){
                dispatch({type: 'SET_PRINCIPAL', payload: principle});
            }

        }catch(e){
            console.error(e + "Unexpected error occured!");
            localStoragePrincipalService.deletePrincipal();
        }
    }


    return (
        <AuthContext.Provider value={{...state, dispatch, isAuthenticated}}>
            { children }
        </AuthContext.Provider>
    )
}