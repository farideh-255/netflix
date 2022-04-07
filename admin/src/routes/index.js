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
import ItemsList from '../pages/products/products.jsx';
import Product from '../pages/product/index.jsx';
import NewMovie from '../pages/product/NewMovie.jsx';






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
                        <Route path="/movies"  element={ user ? <ItemsList /> : <Login /> } />
                        <Route path="/movie/:id"  element={ user ? <Product /> : <Login /> } />                  
                        <Route path="/movie/newmovie"  element={ user ? <NewMovie /> : <Login /> } />                  
                
                </Routes>
    )
}


export default RoutesComp