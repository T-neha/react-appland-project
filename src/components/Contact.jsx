/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <div id="contact">
      
      <h3>AppLab</h3>
      
        {/* <input type="email" placeholder='example@gmail.com'></input> */}
        {/* <a href="#">Contact</a> */}
        <ul style={{display:'flex' , paddingBottom:'20px'}}>
          <li style={{paddingRight:'12px'}}><a href="">Home</a></li>
          <li style={{paddingRight:'12px', color :'#fff'}}><a href="">Key Features</a></li>
          <li style={{paddingRight:'12px', color :'#fff'}}><a href="">Pricing</a></li>
          <li style={{paddingRight:'12px', color :'#fff'}}><a href="">Testiminial</a></li>
          <li style={{paddingRight:'12px', color :'#fff'}}><a href="">FAQ</a></li>
        </ul>
        <ul style={{display:'flex'}}>
        <FacebookIcon sx={{color:'#9398a1'}}/>
        <TwitterIcon sx={{color:'#9398a1'}}/>
        <TagIcon sx={{color:'#fff'}}/>
        <GitHubIcon sx={{color:'#9398a1'}}/>
        </ul>

      </div>
   
    
  )
}


export default Contact;
