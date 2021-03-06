import {createContext,useReducer} from "react";

const initialState={
    user:null,
    isFetching:false,
    error:false
}


export const AuthContext=createContext(initialState);

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,initialState);

    return (
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error
        }}>{children}</AuthContext.Provider>
    )
}



