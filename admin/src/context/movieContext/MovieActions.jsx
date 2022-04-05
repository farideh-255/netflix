export const getMoviesStart=()=>({
    type:"GET_MOVIES_START"
})


export const getMoviesSuccess=(movies)=>{
    console.log("action movies success=>",movies);
   return ({
        type:"GET_MOVIES_SUCCESS",
        payload:movies
    }
   )
};

export const getMoviesFailure=()=>({
    type:"GET_MOVIES_FAILURE",
   
})


/**********************************************8 */

export const deleteMovieStart=()=>({
    type:"DELETE_MOVIE_START"
})


export const deleteMovieSuccess=(movieId)=>{
    console.log("action movies success=>",movieId);
   return ({
        type:"DELETE_MOVIE_SUCCESS",
        payload:movieId
    }
   )
};

export const deleteMovieFailure=()=>({
    type:"DELETE_MOVIE_FAILURE",
   
})


/**************************** */

export const getMovie=(id)=>{

    return ({
        type:"GET_MOVIE",
        payload:id
    })
}

