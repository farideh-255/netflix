
import {Link} from 'react-router-dom'
import './sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArticleIcon from '@mui/icons-material/Article';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupIcon from '@mui/icons-material/Group';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sideBarWrapper">
        <div className="sidebarMenu">
          <div className="sideBarTitle">
            Dashboard
          </div>
          <ul className="sidebar-list">
            
            <li className="sidebar-list-item active">
              <Link to="/admin" >
                <HomeIcon  className="list-icon"/>
                Home
              </Link>
            </li>
            <li className="sidebar-list-item">
              < BarChartIcon  className="list-icon"/>
              Analytics
            </li>
            <li className="sidebar-list-item">
              <ArticleIcon className="list-icon" />
              posts
            </li>
            <li className="sidebar-list-item">
              <TimelineIcon  className="list-icon"/>
              Sales
            </li>
            <li className="sidebar-list-item">
              <GroupIcon  className="list-icon"/>
              users
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <div className="sideBarTitle">
            Notifications
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <HomeIcon  className="list-icon"/>
              Home
            </li>
            <li className="sidebar-list-item">
              < BarChartIcon  className="list-icon"/>
              Analytics
            </li>
            <li className="sidebar-list-item">
              <ArticleIcon className="list-icon" />
              posts
            </li>
            <li className="sidebar-list-item">
              <TimelineIcon  className="list-icon"/>
              Sales
            </li>
            <li className="sidebar-list-item">
              <Link to="/users" >
              <GroupIcon  className="list-icon"/>
                users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
