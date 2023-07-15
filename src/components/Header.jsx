import React from 'react';
import Navbar from './Navbar';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className='name'>
        <Button startIcon={<AddCircleIcon />} variant="contained" 
        sx={{
          backgroundColor: '#C0C0C0',height: "30px", color: 'black', fontSize: '12px', borderRadius: '17px',
         
        }}>
          #1 Editions Choice App of 2020    
        </Button>
        <h1 sx={{fontWeight: 'bold'}}>Best app for your modern lifestyle</h1>
        <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel temporibus inventore aspernatur ratione nesciunt illum, incidunt vitae reiciendis!</p>

        <Button variant="contained" sx={{ borderRadius: '19px', fontSize: '12px',height: "40px" , backgroundColor :'#2500f9' }}>Try for free</Button>
        <Button variant="text">Watch demo video</Button>

      </div>

    </div>
  )
}

export default Header;
