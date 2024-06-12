import { createContext, useReducer, useEffect } from "react";

// creates context that will be passed along the components
export const AuthContext = createContext(null);

// ! THE 'state' is the previous state
export const authReducer = (state, action) => {
    switch (action.type){
        case 'LOGIN':
            return {user: action.payload};
        case 'LOGOUT':
            return {user: null};
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}) => {
    const initialState = {user: JSON.parse(localStorage.getItem('user'))};
    const [state, dispatch] = useReducer(authReducer, initialState)
    const isAuthenticated = !!state.user;

    useEffect(() =>{
        checkIfUserIsLoggedIn();
    }, [])
    const checkIfUserIsLoggedIn = () => {
        try{
            let user = JSON.parse(localStorage.getItem('user'));
            if(user && user.access_token && user.refresh_token){
                dispatch({type: 'LOGIN', payload: user});
            }

        }catch(e){
            console.error(e + "Unexpected error occured!");
            localStorage.removeItem('user');
        }
    }


    return (
        <AuthContext.Provider value={{...state, dispatch, isAuthenticated}}>
            { children }
        </AuthContext.Provider>
    )
}