import axios from "axios"
import {loginStart, loginFailure , loginSuccess,logout} from "./authActions"


export const login=async(user,dispatch)=>{
    dispatch(loginStart());
    try{
        const res=await axios.post("auth/login",user);
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure());
    }
}

//myown codes

export const logOutHandle=(dispatch)=>{
    dispatch(logout)
}
