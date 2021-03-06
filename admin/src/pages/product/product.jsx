
import React,{ useState} from "react"
import {Link} from "react-router-dom"
import './product.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
//import storage from '../../firebase'



export default function ProductComp({movieProp}) {

 const [movie,setMovie]=useState(null)
    const [img,setImg]=useState(null)
    const [imgTitle,setImgTitle]=useState(null)
    const [imgSm,setimgSm]=useState(null)
    const [trailer,setTrailer]=useState(null)
    const [video,setVideo]=useState(null)
    const [uploaded,setUploaded]=useState(0)


  // console.log("mvie=>",movie);

  const handleChange=(e)=>{
      const value=e.target.value;
      setMovie({...movie, [e.target.name]:value});
  }

  const upload=(items)=>{
      
     items.forEach(item=>{
       console.log("upload file=>",item)
        /* const uploadTask=storage.ref(`items/${item.file.name}`).put(item);
          uploadTask.on("state_changes",
            snapshot=>{
              const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
               console.log("upload progress ",progress);
            },(err)=>{console.log(err)},
            ()=>{
                uploadTask.snapshot.ref.getDownloadURL().then(url=>{
                  setMovie(prev=>{
                      return {...prev,[item.label]:url};
                  });
                    setUploaded(prev=>prev+1)
                });
            })
            */
        })
       
  }

  const handleUpload=(e)=>{
      e.preventDefault();
      upload([
          {file:img, label:"img"},
          {file:imgTitle, label:"imgTitle"},
          {file:imgSm, label:"imgSm"},
          {file:trailer, label:"trailer"},
          {file:video, label:"video"},

      ])
  }

  console.log(img);

  return (
    <div className='user-page'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit Movie</h1>
            <Link to="/movie/newmovie">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
    
            <div className="userUpdate">
                <div className="userUpdateTitle">
                    <div className="userUpdateForm">
                    <div className="itemUpdateLeft">
                            
                            <div className="itemUpdateItem">
                                <label>image1</label>
                                <input type="file" name="img" onChange={e=>setImg(e.target.files[0])}
                                  className="userUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem">
                                <label>image 2</label>
                                <input type="file" name="imgTitle" onChange={e=>setImgTitle(e.target.files[0])}
                                  className="userUpdateInput"
                                />
                            </div>
                            <div className="itemUpdateItem" >
                                <label>image 3</label>
                                <input type="file" name="imgSm" onChange={e=>setimgSm(e.target.files[0])}
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
                                <input type="file" name="trailer" onChange={e=>setTrailer(e.target.files[0])}
                                  className="userUpdateInput"
                                />
                            </div>

                            <div className="itemUpdateItem">
                                <label>video</label>
                                <input type="file" name="video" onChange={e=>setVideo(e.target.files[0])}
                                   className="userUpdateInput"
                                />
                            </div>
                            {uploaded===5 ? (
                              <button className="userUpdateButton">CRATE</button>
                             ):(
                                <button className="userUpdateButton"
                                onClick={handleUpload}>UPLOAD</button>
                             )
                            }
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
