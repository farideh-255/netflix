import {useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';

import './products.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { getMovies ,deleteMovie} from '../../context/movieContext/apiCalls';




export default function ItemsList({rowsData}) {

      const {movies, dispatch}=useContext(MovieContext);
    
    useEffect(()=>{
        getMovies(dispatch);
    },[]);

    console.log("movies=>",movies);


    const handleDelete=(id)=>{
     // setData(data.filter(item=>item.id!==id));
     deleteMovie(id,dispatch);
    }


    const columns = [
        { field: '_id', headerName: 'ID', width: 70 },
    
        { field: 'title', headerName: 'title', width: 200,
            renderCell: (params)=>{
              return(
                <div className='list-td'>
                <img src={`http://localhost:3000/client/public/img/movies/${params.row.img}`} alt="movie_pic" className='avatar' />
                <span>{params.row.title} </span>
                </div>
              )
            }
        },
        { field: 'genre', headerName: 'genre', width: 130 },
        { field: 'year', headerName: 'year', width: 130 },
        { field: 'limit', headerName: 'limit', width: 130 },

        {
          feild:"action",
          headerName:"Action",
          width:150,
          renderCell:(params)=>{
            return(
              <>
              <Link  to ={{pathname:"/movie/"+params.row._id , movie:params.row}} >
               <button className="userListEdit">Edit</button>
               </Link>
               <button className="userListDelete" onClick={()=>{handleDelete(params.row._id)}}><DeleteOutlineIcon/></button>
              
              </>
            )
          }
        }
      ];
      
 
  return (

      <div className="App-container">
          Astro Admin
        <Topbar />
        <div className="adminContainer">
          <SideBar />
         
          <div className='userlist'>
          <h3>Movies List</h3>
            <div style={{height:480,margin:"0 auto",direction:"rtl" }}>
            <DataGrid
                    rows={movies}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowId={r=>r._id}
                />
            </div>
          </div>
        </div>
      </div>

  )
}
