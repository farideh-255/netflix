import React from 'react';
import './topbar.css'

import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className='topLeft'>
          <span className="admin-logo">Susana Admin</span>
        </div>
        <div className='topRight'>
            <div className="topbarIcons">
                <div className="topBarIconContainer">
                  <NotificationsIcon />
                  <span className="topIconBag">2</span>
                </div>
                <div className="topBarIconContainer">
                  <LanguageIcon />
                  <span className="topIconBag">2</span>
                </div>
                <div className="topBarIconContainer">
                  <SettingsIcon/>
                </div>
                <div className="topBarIconContainer">
                   <img src="img/pexels-ali-pazani-2613260.jpg" alt="avatar" className="topAvatar" />
                </div>
            </div>    
        </div>
    </div>
  )
}
