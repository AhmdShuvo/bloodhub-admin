import { Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import ProfileCard from "../../Components/ProfileCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const DashboardHome = () => {
    const [users,setUsers]=useState([])
    const [admins,setAdmins]=useState([])

 useEffect(()=>{
 fetch('https://bloodhub-server-api.onrender.com/donors').then(res=>res.json()).then(data=>setUsers(data))
 const admins=users.filter((item) => item.role === "admin");
 setAdmins(admins)
 console.log(admins);

 },[users])


    return (
        <div>
            <h1>Our Admins </h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {
   admins.map((admin)=><Grid item xs={6}>
   <Item><ProfileCard key={admin._id}
    user={admin}/></Item>
 </Grid>)}
        
 
</Grid>

 
        </div>
    );
};

export default DashboardHome;