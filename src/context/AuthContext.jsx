import { createContext, useReducer, useEffect } from "react";

// creates context that will be passed along the components
export const AuthContext = createContext();

// this function will be used to change the state and
// we have LOGIN, LOGOUT options for changing the state
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

//This will generate a component that wraps around the children
// the children are components and can be multiple
// all children will have this context and shared state of the user
export const AuthContextProvider = ({children}) => {
    //The initial state will be set to null if the user is not present in the localstorage
    const [state, dispatch] = useReducer(authReducer, {
        user: JSON.parse(localStorage.getItem('user'))
    })

    //This will check for a valid token in the local storage
    //if the token is valid then the user is logged in
    //if the token is not valid then the user is not logged in and we remove the invalid token
    const checkIfUserIsLoggedIn = () => {
        try{
            let userInfo = JSON.parse(localStorage.getItem('user'));
            if(userInfo && userInfo.access_token && userInfo.refresh_token){
                dispatch({type: 'LOGIN', payload: userInfo});
            }

        }catch(e){
            console.error(e + "Unexpected error occured!");
            localStorage.removeItem('user');
        }
    }


    //when the app first loads this will check if the token is set already
    //this means that the user is logged in by now
    useEffect(() =>{
        checkIfUserIsLoggedIn();
    }, [])

    // Determine if the user is authenticated based on the presence of the user object
    const isAuthenticated = !!state.user;

    // console.log('AuthContext state: ', state);

    //...state is the context that we will share to the children components
    return (
        <AuthContext.Provider value={{...state, dispatch, isAuthenticated}}>
            { children }
        </AuthContext.Provider>
    )
}