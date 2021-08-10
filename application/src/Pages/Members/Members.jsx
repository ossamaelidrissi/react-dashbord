import './Members.scss'
import React,{useState,useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
export default function Members() {
    const [mode , setMode] = useState( () => localStorage.getItem("mode"));
    useEffect(() =>{
        if(mode === "dark"){
                document.body.classList.add("dark-mode");
                localStorage.setItem("mode","dark");
        }else{
                document.body.classList.remove("dark-mode");
                localStorage.setItem("mode","light");
        }
    },[mode])
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'cin', headerName: 'CIN', width: 160 },
        { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 200,},
        { field: 'email', headerName: 'E-mail', width: 270},
        { field: 'phone', headerName: 'Phone', width: 200},
        { field: 'action', headerName: 'Action', width : 200 ,
            renderCell: (params) => {
                return (
                   <div> 
                    <Link to = {"/edit-member/"+params.row.cin}>
                        <button className="Edit">Edit</button>
                    </Link>
                        <DeleteIcon className = "Delete" />
                </div>
                )
        }},

      ];
      
      const rows = [
        { id: 1, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 2, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 3, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 4, cin : 'E345673'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 5, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 6, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 7, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 8, cin : 'E345673'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 9, cin : 'E345673'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 10, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 11, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 12, cin : 'E345678'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
        { id: 13, cin : 'E345673'  , fullName : 'Mohamed Ramadan' , email : "MohamedRamadan@gmail.com" , phone : '0706883791' },
      ];
          return (
        <>
            <input type="search" className = "searchbar" placeholder = "Search here ..." />
            <div className = "list">
                <DataGrid rows={rows} columns={columns} disableSelectionOnClick pageSize={10} checkboxSelection className = "grid" />
          </div>
        </> 
    )
}
