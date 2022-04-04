import { Add, AddAPhoto, AddCircle, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './listitem.scss'
import {Link ,navigate}  from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from "axios"

export default function ListItem({item,index}) {
 
  const[movie,setMovie]=useState({});
    
    useEffect(()=>{
      const getMovie=async ()=>{
        try{
          const res=await axios.get("/movies/find/"+item , 
          {
            headers:{
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDgyNzYxOWRhMzM3MGM2YWJiMzRiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODkyODM5NywiZXhwIjoxNjQ5MzYwMzk3fQ.HWh0LC4DUBN2CvUegHiYOLhR5D-ZVF_Q6rCQ2IoTt5U"
            }
          });

          setMovie(res.data);

        }catch(err){
          console.log(err);
        }
      }

       getMovie();

       

    },[item]); 

    console.log("moviee=>", movie);

  return (
    <div className="listitem">
      <div className="innerbox">
      { movie.img && <img  src={`${process.env.PUBLIC_URL}/img/movies/${movie.img}`}  alt="movie_title" className="item_pic"  />}
       {/* <video src={`${process.env.PUBLIC_URL}/movies/Momentum Official Trailer 1 (2015) - Olga Kurylenko, Morgan Freeman Movie HD.mp4`} autoPlay={true} loop className='trailer' /> */}
      <video className="trailer" autoPlay loop muted>
     {movie.trailer && (<>
           <source src={`${process.env.PUBLIC_URL}/trailer/${movie.trailer}`} type="video/mp4" />
          <source src={`${process.env.PUBLIC_URL}/trailer/${movie.trailer}`} type="video/ogg" />
          </>)}
      </video>

         <div className="itemInfo">
           <div className="icons">
             <Link to={{ pathname: `/watch/${movie._id}`, state:{movie: "123"}}}  >< PlayArrow className="icon" /></Link>
             <AddCircle className="icon"  />
             <ThumbUpAltOutlined className="icon"  />
             <ThumbDownAltOutlined className="icon"  />
           </div>
           <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
           </div>

           <div className="desc">
            {movie.desc}
           </div>
           <div className="genre">
             {movie.genre}
           </div>

         </div>
      </div>
    </div>
  )
}
