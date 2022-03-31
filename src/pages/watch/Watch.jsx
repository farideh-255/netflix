import { ArrowBackIos, ArrowBackOutlined } from '@mui/icons-material';
import './watch.scss'
import {Link} from 'react-router-dom'
const Watch = () => {
    return (
    <div className='watch'>
        <div className="back">
            <Link to="/" >
                <ArrowBackOutlined />
                Home
            </Link>
        </div>
        <video className="trailer" controls autoPlay loop >
          <source src={`${process.env.PUBLIC_URL}/movies/Momentum Official Trailer 1 (2015) - Olga Kurylenko, Morgan Freeman Movie HD.mp4`} type="video/mp4" />
          <source src={`${process.env.PUBLIC_URL}/movies/Momentum Official Trailer 1 (2015) - Olga Kurylenko, Morgan Freeman Movie HD.mp4`} type="video/ogg" />
       </video>

    </div>
    );
}


export default Watch;