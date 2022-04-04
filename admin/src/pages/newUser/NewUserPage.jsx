import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';
import NewUser from './NewUser';


export default function NewUserPage() {
  return (
    <div className="App-container">
        Astro Admin
        <Topbar />
        <div className="adminContainer">
            <SideBar />
              
            <NewUser />
        
        </div>
    </div>
  )
}
