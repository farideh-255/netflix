import React from 'react'
import Chart from '../../components/charts/lineChart/Chart'
import FeaturedInfo from '../../components/featuredInfo/featuredInfo'
import './home.scss'
import {userData} from "../../dummyData"
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSml/WidgetSm'
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';
import {useState,useEffect,useMemo} from 'react'
import axios from "axios"

export default function Home() {

  const MONTHS_mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const MONTHS_mS =useMemo(()=> ['Jan', 'Feb', 'Mar', 'Apr', 'May',
   'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],[]
  );

  const [userStats,setUserStats]=useState([])
 
   useEffect(()=>{
      
          const getStats=async ()=>{
            try{
                const res=await axios.get("/users/stats",
                  {headers:{
                    token: "Brearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDgyNzYxOWRhMzM3MGM2YWJiMzRiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk4ODMwOCwiZXhwIjoxNjQ5NDIwMzA4fQ.Jim47Hj5JEcnzsNow26qj6gTRy7TliVHtYdyYxRxSL4"
                            }
                    }
                  );
                 setUserStats(res.data);
               /*  res.data.map(item=>{
                    setUserStats(prev=>[...prev,
                      {name:MONTHS_mS[item._id-1],"NewUser":item.total}
                    ])
                 }) */

                
                 let newArray= res.data.map((item)=>{// console.log("item==>",item);
                         let newItem={};
                          newItem.name=MONTHS_mS[item._id-1];
                          newItem.NewUser=item.total
                          return newItem;
                        }
                 )
                
                 setUserStats(newArray);
                 

                 console.log("new array=>",newArray);

               }catch(err){
                  console.log(err)
               }
            }; 
            
            getStats();
   },[MONTHS_mS]);

  // console.log(" user stats=>",userStats);

  return (

    <div className="App-container">
        Astro Admin
      <Topbar />
      <div className="adminContainer">
        <SideBar />
      
       
          <div className='home-container'>
            <FeaturedInfo />
            <Chart  data={userStats} title="User stats" grid dataKey1="NewUser" /> {/*  dataKey2=""pv */}
            <div className="homewidgets">
              <WidgetSm /> 
              <WidgetLg />
            </div>
          </div>
      
      </div>
    </div>

  )
}
