
import {Link,useLocation} from "react-router-dom"
//import './user.scss'
import ProductComp from './product';
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';




export default function Product() {

    const location=useLocation();
    const movie=location.movie;
    console.log("location movie=>",location);

  return (
    <div className="App-container">
        Astro Admin
        <Topbar />
        <div className="adminContainer">
            <SideBar />
        
            <ProductComp />
        
        </div>
    </div>
  )
}
