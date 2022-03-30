import { InfoOutlined, PlayCircleOutline } from '@mui/icons-material'
import './featured.scss'

export default function Featured({type}) {
  return (
    <div className="featured">

        {type && (
            <div className="category">
                <span>{type==="movie" ? "Movies" : "Series" }</span>
                 <select name="genre" id="genre">
                     <option>
                            Genre
                     </option>
                     <option value="adventure">Adventure</option>
                     <option value="comedy">Comedy</option>
                     <option value="crime">Crime</option>
                     <option value="fantasy">Fantasy</option>
                     <option value="historical">Historical</option>
                     <option value="horror">Horror</option>
                     <option value="romance">Romance</option>
                     <option value="sci-fi">Sci-fi</option>
                     <option value="thriller">Thriller</option>
                     <option value="western">Western</option>
                     <option value="drama">Drama</option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                 </select>
            </div>
        )}

      <img src={`${process.env.PUBLIC_URL}/img/pexels-ali-pazani-2613260.jpg`} alt="avatar" />
      <div className="info">
        <img src={`${process.env.PUBLIC_URL}/img/photo-1494790108377-be9c29b29330.jpg`} alt="featured_movie" />
        <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
What is Lorem Ipsum?


        </span>
        <div className="buttons">
            <button className="play"><div>play</div><PlayCircleOutline  className='icon'/></button>
            <button className="more"><div>more</div> <InfoOutlined className="icon" /></button>
        </div>
      </div>
    </div>
  )
}
