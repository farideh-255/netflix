import { ArrowBackIos, ArrowBackOutlined } from '@mui/icons-material';
import './watch.scss'
import {Link,useParams} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from "axios"


const Watch = ({props}) => {

    const {id} = useParams();

   // const movie2=props.location.movie;

    console.log(" params id =>",id);


    const[movie,setMovie]=useState({});
    
    useEffect(()=>{
      const getMovie=async ()=>{
        try{
          const res=await axios.get("/movies/find/"+id , 
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

    },[]); 

    console.log("moviee=>", movie);

    return (
    <div className='watch'>
        <div className="back">
            <Link to="/" >
                <ArrowBackOutlined />
                Home
            </Link>
        </div>
        <video className="trailer" controls autoPlay loop >
        {movie.trailer && (<>
         <source src={`${process.env.PUBLIC_URL}/trailer/${movie.trailer}`} type="video/mp4" />
          <source src={`${process.env.PUBLIC_URL}/trailer/${movie.trailer}`} type="video/ogg" />
          </>
        )
        }
       </video>

    </div>
    );
}


export default Watch;