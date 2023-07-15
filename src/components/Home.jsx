import React from 'react'
import Grid from '@mui/material/Grid';
import home from '../images/Screenshot 2023-07-13 121803.png';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Home = () => {
    return (
        <div style={{ padding: '0rem 5.5rem 6rem' , margin:30}}>
       
        <Grid container justify="space-around" spacing={10} justifyContent={'center'} sx={{backgroundColor:'#e8f4f8'}}>
            <Grid item xs={false}
                sm={4}
                md={6} lg={6} xl={6} sx={{paddingBottom:20, marginTop:25}}>
               

                    <Button startIcon={<AddCircleIcon />} variant="contained" sx={{
                        backgroundColor: '#C0C0C0', color: 'black', borderRadius: '17px',
                        "&:hover": {
                            backgroundColor: "C0C0C0"
                        }
                    }}>
                        #1 Editions Choice App of 2020
                    </Button>
                    <h1>Best app for your<br/> modern lifestyle</h1>
                    <p>increase productivity with a simple to-do app. app for managing your personal buggets.</p>

                    <Button variant="contained" sx={{borderRadius: '17px'}}>Try for free</Button>
                    <Button variant="text">Watch demo video</Button>
                
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={6} xl={6} sx={{paddingBottom:20, padding:30}}>
                <img src={home} alt="male" sx={{width:'100%', height:'70px'}}></img>
            </Grid>

        </Grid>
        </div>
      
    )
}

export default Home
