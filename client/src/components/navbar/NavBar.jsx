import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                 <img src="//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png" alt="logo" />
                 <Link to="/">
                 <span>Homepage</span>
                 </Link>
                 <Link to="/series">
                   <span>Series</span>
                 </Link>
                 <Link to="/movies">
                   <span>Movies</span>  
                 </Link>
                 <span>New and propular</span>
                 <span>My list</span>
           </div>
            <div className="right">
                <SearchIcon />
                    <span>KID</span>
                    <NotificationsIcon  className="icon" />
                    <img src={`${process.env.PUBLIC_URL}/img/pexels-ali-pazani-2613260.jpg`} alt="avatar" />

                    <div className="profile2">
                        <ArrowDropDownIcon className="icon" />
                        <div className='options'>
                            <span>Setting</span>
                            <span>logout</span>
                        </div>
                    </div>
               
            </div>
        </div>

    </div>
  )
}
