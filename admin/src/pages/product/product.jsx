import {Link} from "react-router-dom"
import './product.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';



export default function ProductComp() {
  return (
    <div className='user-page'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit Movie</h1>
            <Link to="/newmovie">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="../img/pexels-ali-pazani-2613260.jpg" alt="userpic" className='UserShowImage' />
                    <div className="userShowTopTitle">
                        <div className="userShowUsername">Anna Becker</div>
                        <div className="userShowUserTitle">Software Engineer</div>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span> 
                        <div className="userShowInfo">
                            <PermIdentityIcon  className='userShowIcon'/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon  className='userShowIcon'/> 
                            <div className="userShowInfoTitle">10.12.1999</div>
                        </div>
                        <div className="userShowInfo">
                           <EmailIcon className='userShowIcon'/> 
                            <div className="userShowInfoTitle">+1 123 456 57</div>
                        </div>
                        <div className="userShowInfo">
                            <PermIdentityIcon  className='userShowIcon'/>
                            <div className="userShowInfoTitle">anabeck99@gmail.com</div>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon  className='userShowIcon'/>
                            <div className="userShowInfoTitle">NewYork | Us</div>
                        </div>
                        <div className="userShowInfo">
                            <div className="userShowInfoTitle"></div>
                        </div>
                 </div>
            </div>
            <div className="userUpdate">
                <div className="userUpdateTitle">
                    <div className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" 
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" 
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" 
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" 
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" 
                                placeholder='annabeck99'
                                className="userUpdateInput"
                                />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={process.env.PUBLIC_URL +"/img/pexels-ali-pazani-2613260.jpg"} alt="ok" className="userUpdateImg" />
                                <label htmlFor="file" ><PublishIcon  className="uploadIcon" /></label>
                                <input type="file" id="file"  style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">UPDATE</button>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    </div>
  )
}
