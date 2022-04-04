import {createContext,useReducer, useEffect} from "react";
import authReducer from './authReducer'

const initialState={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}


export const AuthContext=createContext(initialState);

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(authReducer,initialState);
  
useEffect(()=>{
      localStorage.setItem("user",JSON.stringify(state.user))
},[state.user])

    return (
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>{children}
        </AuthContext.Provider>
    )
}



///we create a provider function whcih recieves children and define all 
//needed functions and we assign this provider function to ourcontext.Provider
// with passing all defined functions and states to its value object



