
import NotFound from "../components/NotFound";
import Home from '../pages/admin/home/index.jsx';
import User from '../pages/admin/user/User';
import NewUser from '../pages/admin/newUser/NewUser';
import UserList from '../pages/admin/userList/UserList';

//import Gsap2 from "../projects/gsap2/";

//import {Gsap2,Gsap2Home,Gsap2Opportunities,Gsap2Contact,Gsap2Solutions} from "../projects/gsap2";



const approutes = [
    {
        path : '/' , 
        component : Home
    } , 
    {
        path : '/userlist' , 
        component : UserList
    } , 

    {
        path : '*' , 
        component : NotFound
    } 
]

export default approutes 
