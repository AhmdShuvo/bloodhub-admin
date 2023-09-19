
import { Box, Button, } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

  async function  approve(id,name,donor){

 const istrue= confirm(`Sure Want to Accept ${name} ? `)
istrue&&
fetch(`https://bloodhub-server-api.onrender.com/status/donor/${id}`, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(donor),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.modifiedCount > 0) {
      console.log('data');
    }
   
  });
}



export default function Requests() {
  const [users,setusers]=useState([])
  const [request,setRequests]=useState([])
  const delelete = (id,name) => {

    const proceed = window.confirm(`Are you sure you want to delete ${name}? `);
    if (proceed === true) {
      const url = `https://bloodhub-server-api.onrender.com/donor/delete/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
  
            
            setTimeout(() => {
              
            }, 5000);
            const remaining = request.filter((event) => event._id !== id);
            setRequests(remaining)
          }
        });
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'displayName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
     
     
    },
    {
     field:"Approve",
     renderCell:(params)=>{
      return (
        <>
   <Button  onClick={()=>approve(params.id,params.row.displayName,params.row)} variant="contained" color="success">
    Accept
  </Button> 
  
   </>
      )
     } ,
     
    },
    {
      field:"Reject",
      headerName:'Reject',
      renderCell:(params)=>{
       return (
         <>
    
   <Button  onClick={()=>delelete(params.id,params.row.displayName,params.row)} variant="outlined" color="error">
     Delete 
   </Button>
    </>
       )
      } ,
    
     },
    {
      field:'address',headerName:'Address',
     
    },
    {
      field: 'group',
      headerName: 'Group',
      
    },
    { field: 'status', headerName: 'STATUS', width: 100 },
   
  ];

  useEffect(()=>{
    fetch('https://bloodhub-server-api.onrender.com/donors').then(res=>res.json()).then(data=>setusers(data.reverse()));
    const activeItems = users.filter((item) => item.status !== "Active");
        setRequests(activeItems);
  },[users])

  const rows=request.map((row)=>({
    id:row._id,
    displayName:row.displayName,
    age:row.phone,
    group:row.group,
    address:row.address,
    status:row.status

  }))

 
  
 
  return (
    <Box  >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
     
    </Box>
  );
}


