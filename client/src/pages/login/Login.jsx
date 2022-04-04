import React,{useState ,useRef} from 'react';
import './login.scss'

const Login = () => {

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const EmailRef=useRef(null);
    const PassRef=useRef(null);

    const handleStart=()=>{
        
        setEmail(EmailRef.current.value);
        console.log("email=>", EmailRef.current.value);
    
    }
    const handleFinish=()=>{
        setPass(PassRef.current.value);
        console.log("email=>", PassRef.current.value);
    }


    return (
        
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png" alt="logo" />
                    <button className="loginButton">Sign Up</button>
                </div>
            </div>
            <div className="container">

                <h1>
                    Unimited Movies,TV shows and more
                </h1>
                <h2>watch anywhere cancel any time</h2>
                {
                     !email ? (
                        <div className="input">
                          <input ref={EmailRef} type="email" className="emailinp" placeholder=' email address' />
                          <button onClick={(e)=>handleStart(e)} className='regiterButton'>Send</button>
                       </div>
                     ):(
                        <form className="input">
                          <input ref={PassRef} type="password" className="passinp" placeholder=' password' />
                          <button onClick={e=>handleFinish(e)} className='regiterButton'>Send</button>
                       </form>  
                     )
                    
                }
             
            </div>
        </div>
    );
}



export default Login;