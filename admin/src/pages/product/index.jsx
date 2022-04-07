import {useContext,useState,useEffect,useCallback} from "react"
import {Link,useLocation,useParams} from "react-router-dom"
//import './user.scss'
import ProductComp from './product';
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';
import {MovieContext} from "../../context/movieContext/MovieContext"
import {getMovie} from "../../context/movieContext/apiCalls"
import axios from "axios"





 const Product=()=>{


    const {id} = useParams();
    //console.log(" movie id=>",id);

    const [movie,setMovie]=useState({});

    //here callback or IIFE should be used bacause getmovie is asyncronous and returns a promise
    //both callback and IIFE seems to listen to asyncfunction constantly and console.log inside it is being called limitless
/* //it works
    const callbackFunction = result => {
    //  console.log("getMovie3=>",result);
      setMovie(result);
    }
    
    const mainFunction = (callback ,id)=> {
    //  asynchronousFunction(callback)
      getMovie(callback,id);
    }

    mainFunction(callbackFunction,id);
   */ 


    /* it works
    const mainFunction = async () => {
      const result = await getMovie(id);
      return result
    }

    (async () => {
     
      let ff=await mainFunction();
     // console.log("*******************=>");
      //console.log("ff=",ff);
      setMovie(ff);
    })()

   // console.log("wwww=>",movie);
   */


// it works too  //it just callais once
    useEffect(()=>{
      const getMovie=async ()=>{
        try{
          const res=await axios.get("/movies/find/"+id , 
          {
            headers:{
              token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
            }
          });

          setMovie(res.data);
          console.log("api call res get movie for id=>",id,res.data);

        }catch(err){
          console.log(err);
        }
      }

       getMovie();

    },[]); 
  

    /**************************************** */


  return (
    <div className="App-container">
        Astro Admin
        <Topbar />
        <div className="adminContainer">
            <SideBar />
        
            <ProductComp movie={movie} />
        
        </div>
    </div>
  )
}

export default Product;
