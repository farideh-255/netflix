import './widgetsm.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useEffect,useState} from "react"
import axios from "axios"

export default function WidgetSm() {

    const [newUsers,setNewUsers]=useState([]);

    useEffect(()=>{
        const getNewUsers=async()=>{
        try{
            const res=await axios.get("users?new=true",{
                headers:{
                    token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDgyNzYxOWRhMzM3MGM2YWJiMzRiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODkwNDcxNCwiZXhwIjoxNjQ5MzM2NzE0fQ.de_Wpn3vCohAoD0fO97L3nAywA9MDaejsMeaAvoiPhA"
                
                }
            });
            setNewUsers(res.data)
            
        }catch(err){
            console.log(err);
        }
      };
      getNewUsers();
      
    },[]);

    //console.log("new users=>",newUsers);

    let userlist=   newUsers.map(user=>{
   return( <li className="widgetSmListItem">
        <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="ok"  />
        <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          
        </div>
        <button className="widgetSmButton">Display <VisibilityIcon className="widgetsmIcon"/></button>
    </li>
   )
})

console.log("userlist=>",userlist);

  return (
    <div className="widgetSm">
        <span className="widgetsmTitle">
            New Join Members
        </span>
        <ul className='widgetSmList'>
           
            {
                newUsers.map(user=>(
                                        
                    <li className="widgetSmListItem">
                        <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="ok"  />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                          
                        </div>
                        <button className="widgetSmButton">Display <VisibilityIcon className="widgetsmIcon"/></button>
                    </li>
                     )
                   )
            }
           {/* <li className="widgetSmListItem">
                <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="ok"  />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">Display <VisibilityIcon className="widgetsmIcon"/></button>
            </li>
            <li className="widgetSmListItem">
                <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="ok"  />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">Display <VisibilityIcon className="widgetsmIcon"/></button>
            </li>
            <li className="widgetSmListItem">
                <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="ok"  />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">Display <VisibilityIcon className="widgetsmIcon"/></button>
            </li>
            <li className="widgetSmListItem">
                <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="ok"  />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">Display <VisibilityIcon className="widgetsmIcon"/></button>
            </li>
            <li className="widgetSmListItem">
                <img src="img/photo-1494790108377-be9c29b29330.jpg" alt="ok"  />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">Display <VisibilityIcon className="widgetsmIcon"/></button>
            </li>
        */}

        </ul>
    </div>
  )
}
