import { AccountCircle, SearchOutlined } from '@mui/icons-material';
import { Box, IconButton, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ProfileCard from '../../Components/ProfileCard';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "auto",
  height: "auto",
  marginTop:'50px',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));


const MakeAdmin = () => {
    const [user,setUser]=useState()
    const [email,setEmail]=useState()
    const handleSearch = (email) => {
        fetch(`https://bloodhub-server-api.onrender.com/user/${email}`).then(datas => datas.json()).then(users => setUser(users[0]))
    }

    const handleAdmin=e=>{

        const user={email,}
    
              
                                  
            fetch(`https://bloodhub-server-api.onrender.com/donors/${email}`,{
              method:'PUT',
              headers:{ "content-type": 'application/json'},
                     body:JSON.stringify(user)
          
            }).then(res=>res.json()).then(data=>console.log(data)).then(()=>alert(email+"  " +"succesfully updated"))
    
        e.preventDefault()
      }
    return (
        <div>
            <h2>Make Admin </h2>
             <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField onChange={(e) => setEmail(e.target.value)} id="input-with-sx" label="search by your Email " variant="standard" /> <IconButton onClick={ ()=>handleSearch(email) } aria-label="delete">
  <SearchOutlined />
</IconButton>
      </Box>
      {
        user? <DemoPaper square={false}><ProfileCard MakeAdmin={handleAdmin} user={user}/></DemoPaper>:""
      }

        </div>
    );
};

export default MakeAdmin;