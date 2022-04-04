import React,{useState,useContext} from 'react';
import './login.scss'

//import { AuthContext} from '../../context/authcontext/authContext'
import {AuthContext } from '../../context/authcontext/authContext'
import {login} from '../../context/authcontext/apiCalls'

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {isFetching,dispatch}=useContext(AuthContext);

    //we fetch state and ffunctions from context and actions from actions 
    //we pass this action to this functions


    const handleLogin=(e)=>{
        e.preventDefault();
        console.log("user=>",email,password);
        login({email,password},dispatch);
    }

    return (<div className="App-container">
                    Astro Admin
               
                <div className="adminContainer">
                    <div className="login">
                        <form className="loginForm">
                            <input type="text" className="loginInput" onChange={(e)=>setEmail(e.target.value)} />
                            <input type="password" className="loginInput"
                             onChange={(e)=>setPassword(e.target.value)} />
                            <button className="loginButton"
                            onClick={handleLogin} disabled={isFetching}>Login</button>
                        </form>
                    </div>
            </div>
           </div>
            );
}


export default Login;