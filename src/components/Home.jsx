
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from '../assets/pro2.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Edit } from '@mui/icons-material';

export default function Home() {
  const [data, setData]= useState([]);
  const [loading, setLoading]= useState(true);
//   useEffect(()=>{
//     fetch("https://reqres.in/api/users/2")
//     .then((response)=>response.json())
//     .then((data)=>{
//       setData(data);
//       setLoading(false);
    
//     })
//   .catch((error)=>{
//     console.error("Error fetching data", error);
//     setLoading(false);
//   });
// },[]);
axios
.get("https://reqres.in/api/users/2")
.then((response)=>{
  const transformedData=response.data.map((item)=>({
    id: item.id,
    email: item.email,
}));
console.log("Transformed Data:", transformedData)
})
.catch((error)=>{
  console.error("Error:", error);
})
  return (
    <>
    <div className="container">
<div className="header">
<div className="text">Home</div>
<div className="underline"></div>
</div>
<div className='card'>
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        sx={{ height: 200 }}
        image={profile}
        title="Username"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Username
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Please add more details to show info on your page
        </Typography>
      </CardContent>
   <CardActions>
    <Button variant="contained" color="secondary">Edit Profile</Button>
    <Button variant="contained" color="secondary">Change Password</Button>
    <Button variant="contained" color="secondary">Show Profile</Button>
    
    </CardActions>
    </Card>
   </div>
   <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="user-details">
      <div>
        {loading?(<p>Loading...</p>):(
          <ul>
            {data.map((item)=>(
            <li key={item.id}>{item.first_name}</li>
          ))}
          </ul>
        )}
      </div>
    
    
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
          
              </ListItemIcon>
              <ListItemText primary="Username" /><Edit/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              
              </ListItemIcon>
              <ListItemText primary="Contact no." /><Edit/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
          
              </ListItemIcon>
              <ListItemText primary="Academic history" /><Edit/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
          
              </ListItemIcon>
              <ListItemText primary="Address" /><Edit/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      
    </Box>
</div>
   
    </>
  );
}
