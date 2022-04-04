import {Link} from "react-router-dom"
//import './user.scss'
import UserComp from './UserComp'
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';




export default function User() {
  return (
    <div className="App-container">
        Astro Admin
        <Topbar />
        <div className="adminContainer">
            <SideBar />
        
            <UserComp />
        
        </div>
    </div>
  )
}
