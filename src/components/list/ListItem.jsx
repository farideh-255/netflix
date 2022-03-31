import { Add, AddAPhoto, AddCircle, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './listitem.scss'
import {Link}  from 'react-router-dom'

export default function ListItem({value}) {
  return (
    <div className="listitem">
      <div className="innerbox">
       <img  src={`${process.env.PUBLIC_URL}/img/movies/momentum.jpg`}  alt="movie_title" className="item_pic"  />
       {/* <video src={`${process.env.PUBLIC_URL}/movies/Momentum Official Trailer 1 (2015) - Olga Kurylenko, Morgan Freeman Movie HD.mp4`} autoPlay={true} loop className='trailer' /> */}
      <video className="trailer" autoPlay loop muted>
          <source src={`${process.env.PUBLIC_URL}/movies/Momentum Official Trailer 1 (2015) - Olga Kurylenko, Morgan Freeman Movie HD.mp4`} type="video/mp4" />
          <source src={`${process.env.PUBLIC_URL}/movies/Momentum Official Trailer 1 (2015) - Olga Kurylenko, Morgan Freeman Movie HD.mp4`} type="video/ogg" />
      </video>

         <div className="itemInfo">
           <div className="icons">
             <Link to="/watch" ><PlayArrow className="icon" /></Link>
             <AddCircle className="icon"  />
             <ThumbUpAltOutlined className="icon"  />
             <ThumbDownAltOutlined className="icon"  />
           </div>
           <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className="limit">+16</span>
              <span>1999</span>
           </div>

           <div className="desc">
           What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

           </div>
           <div className="genre">
             Action
           </div>

         </div>
      </div>
    </div>
  )
}
