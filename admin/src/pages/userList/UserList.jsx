import {useState} from 'react'
import {Link} from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';

import './userlist.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userListRows } from '../../dummyData';
//import {userListRows} from '../../dummyData'



export default function UserList({rowsData}) {

    const [data,setData]=useState(userListRows);

    const handleDelete=(id)=>{
      setData(data.filter(item=>item.id!==id));
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
    
        { field: 'avatar', headerName: 'عکس پروفایل', width: 200,
            renderCell: (params)=>{
              return(
                <div className='list-td'>
                <img src={params.row.avatar} alt="avatar" className='avatar' />
                <span>{params.row.firstName}  {params.row.LastName}</span>
                </div>
              )
            }
        },
      //  { field: 'firstName', headerName: 'First name', width: 130 },
       // { field: 'LastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        { field: 'email', headerName: 'ایمیل', width: 170 },
        { field: 'status', headerName: 'وضغیت', width: 80 },
        { field: 'transaction', headerName: 'تراکنش', width: 100 },
        {
          feild:"action",
          headerName:"Action",
          width:150,
          renderCell:(params)=>{
            return(
              <>
              <Link  to ={"/user/"+params.row.id} >
               <button className="userListEdit">Edit</button>
               </Link>
               <button className="userListDelete" onClick={()=>{handleDelete(params.row.id)}}><DeleteOutlineIcon/></button>
              
              </>
            )
          }
        }
      ];
      
      const rows = userListRows;

  return (

      <div className="App-container">
          Astro Admin
        <Topbar />
        <div className="adminContainer">
          <SideBar />
         
          <div className='userlist'>
          <h3>Users List</h3>
            <div style={{height:480,margin:"0 auto",direction:"rtl" }}>
            <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
          </div>
        </div>
      </div>

  )
}
