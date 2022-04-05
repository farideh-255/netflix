import {createContext,useReducer, useEffect} from "react";
import MovieReducer from './MovieReducer'

const initialState={
    movies:[],
   
    isFetching:false,
    error:false
}


export const MovieContext=createContext(initialState);

export const MovieContextProvider=({children})=>{
    const [state,dispatch]=useReducer( MovieReducer,initialState);


    return (
        <MovieContext.Provider value={{
            movies:state.movies,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>{children}
        </MovieContext.Provider>
    )
}



///we create a provider function whcih recieves children and define all 
//needed functions and we assign this provider function to ourcontext.Provider
// with passing all defined functions and states to its value object



