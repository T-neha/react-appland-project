import { Button } from '@mui/material';
import React from 'react'

const AboutDetails = (props) => {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing sapiente dolore, cumque perferendis vero dolorem iusto ipsam, expedita voluptatem.</p>
                
                
                {/* <Button variant="contained" sx={{borderRadius: '24px' , fontSize:'12px'}}>Learn More</Button> */}
                <Button variant="contained" sx={{borderRadius: '24px !important' , fontSize:'12px ' , backgroundColor:'#2500f9 !important'}}>Learn More</Button>

            </div>

        </div>
    )
}

export default AboutDetails;
