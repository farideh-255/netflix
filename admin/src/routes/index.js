//import approutes from './Routes'
import React,{useContext} from 'react';

import {
    BrowserRouter,
    Route,
    Routes,
    Redirect
} from 'react-router-dom';

import Home from '../pages/home/index.jsx';
import NewUserPage from '../pages/newUser/NewUserPage.jsx';
import User from '../pages/user/User.jsx';
import UserList from '../pages/userList/UserList';
import ShopIndex from '../pages/shop/template1/home/index.js';
import Login from '../pages/login/Login'
import { AuthContext } from '../context/authcontext/authContext.jsx';






const RoutesComp = (props) => {

    //console.log(" size paassed=>",props.size);
  //  const ResizeHoc = WithWindowResize(RoutesComp);

  const {user}=useContext(AuthContext);

    return (
                <Routes> 
                       <Route path="/login"  element={<Login />} />       
                        <Route exact path="/admin"   element={user ? <Home /> : <Login />} />
                        <Route path="/users"  element={ user ?  <UserList /> :<Login/> } />
                        <Route path="/user/:userId"  element={ user ? <User /> : <Login/>} />
                        <Route path="/newuser"  element={ user ? <NewUserPage /> : <Login /> } />                  
                </Routes>
    )
}


export default RoutesComp