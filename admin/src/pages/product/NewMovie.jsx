import { useState } from "react"
import {Link} from "react-router-dom"
import './product.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';





export default function NewMovie({}) {

    const [movie,setMovie]=useState(null)
    const [img,setImg]=useState(null)
    const [imgTitle,setTitle]=useState(null)
    const [imgSm,setimgSm]=useState(null)
    const [trailer,setTrailer]=useState(null)
    const [video,setVideo]=useState(null)

  // console.log("mvie=>",movie);

  const handleChange=(e)=>{
      const value=e.target.value;
      setMovie({...movie, [e.target.name]:value});
  }

  console.log(movie);

  return (
    <div className='user-page'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit Movie</h1>
            <Link to="/newmovie">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
           {/* <div className="userShow">
                <div className="userShowTop">
                    <img src={`../img/${movie.img}`} alt="userpic" className='UserShowImage' />
                    <div className="userShowTopTitle">
                        <div className="userShowUsername">{movie.title}</div>
                        <div className="userShowUserTitle">{movie.year}</div>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle"> Details</span> 
                        <div className="userShowInfo">
                            <PermIdentityIcon  className='userShowIcon'/>
                            <span className="userShowInfoTitle">{movie.title}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon  className='userShowIcon'/> 
                            <div className="userShowInfoTitle">{movie.year}</div>
                        </div>
                        <div className="userShowInfo">
                           <EmailIcon className='userShowIcon'/> 
                            <div className="userShowInfoTitle">{movie.genre}</div>
                        </div>
                        <div className="userShowInfo">
                            <PermIdentityIcon  className='userShowIcon'/>
                            <div className="userShowInfoTitle">{movie.limit}</div>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon  className='userShowIcon'/>
                            <div className="userShowInfoTitle">{movie.isSeries ? "series" : "movie" }</div>
                        </div>
                        <div className="userShowInfo">
                            <div className="userShowInfoTitle"></div>
                        </div>
                 </div>
            </div>
            */}
            <div className="userUpdate">
                <div className="userUpdateTitle">
                    <div className="userUpdateForm">
                        <div className="itemUpdateLeft">
                            
                            <div className="itemUpdateItem">
                                <label>image1</label>
                                <input type="file" name="img"
                                  className="userUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem">
                                <label>image 2</label>
                                <input type="file" name="imgTitle"
                                  className="userUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem" >
                                <label>image 3</label>
                                <input type="file" name="imgSm"
                                  className="userUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem">
                                <label>title</label>
                                <input type="text" name="title" onChange={handleChange}
                                placeholder='annabeck99'
                                className="itemUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem">
                                <label>descrition</label>
                                <input type="text" name="desc" onChange={handleChange}
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem">
                                <label>year</label>
                                <input type="text" name="year" onChange={handleChange}
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem">
                                <label>genre</label>
                                <input type="text" name="genre" onChange={handleChange}
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem">
                                <label>limit</label>
                                <input type="text" name="limit" onChange={handleChange}
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="itemUpdateItem">
                                <label>Is Series</label>
                                <select name="isSeries" id="isSeries" onChange={handleChange} >
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                            </div>
                            <div className="itemUpdateItem">
                                <label>Trailer</label>
                                <input type="file" name="trailer"  onChange={handleChange}
                                  className="userUpdateInput"
                                />
                            </div>

                            <div className="itemUpdateItem">
                                <label>video</label>
                                <input type="file" name="video" onChange={handleChange}
                                   className="userUpdateInput"
                                />
                            </div>
                            <button className="userUpdateButton">UPDATE</button>
                            
                        </div>
                        {/*
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={process.env.PUBLIC_URL +"/img/pexels-ali-pazani-2613260.jpg"} alt="ok" className="userUpdateImg" />
                                <label htmlFor="file" ><PublishIcon  className="uploadIcon" /></label>
                                <input type="file" id="file"  style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">UPDATE</button>
                        </div>
                          */}

                       
                    </div>


                </div>
            </div>


        </div>
    </div>
  )
}
