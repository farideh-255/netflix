 import {getMoviesStart,getMoviesSuccess, getMoviesFailure,
    deleteMovieStart,deleteMovieSuccess,deleteMovieFailure} from "./MovieActions"
 import axios from "axios"

 export const getMovies=async(dispatch)=>{
    dispatch(getMoviesStart);

    try{
        const res=await axios.get("/movies",
                {headers:{
                    token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
                        }
                }
        );

        dispatch(getMoviesSuccess(res.data));
        console.log("api caa=>",res.data)
    }catch(err){
        dispatch(getMoviesFailure);
    }

 }


 
 export const deleteMovie=async(id,dispatch)=>{
    
    dispatch(deleteMovieStart());

    try{
        await axios.delete("/movies/"+id,
                {headers:{
                    token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
                        }
                }
        );

        dispatch(deleteMovieSuccess(id));
        console.log("api call res=>",id)
    }catch(err){
        dispatch(deleteMovieFailure);
    }

 }



  /*
 export const getMovie=async(id)=>{
    
    try{
       const res= await axios.get("/movies/find/"+id,
                {headers:{
                    token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
                        }
                }
        );

      //  console.log("api call res get movie for id=>",id,res.data);
        return res.data;
    }catch(err){
        console.log(err);
    }

 }
*/

export const getMovie = (callback,id) => {

   // try{
        const res= axios.get("/movies/find/"+id,
                 {headers:{
                     token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
                         }
                 }
         ).then(response => {
            callback(response.data);
        })
 
         console.log("api call res get movie for id=>",id,res.data);
         return res.data;
   //  }catch(err){
     //    console.log(err);
    // }

  }


