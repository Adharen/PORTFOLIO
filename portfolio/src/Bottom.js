
import React ,{useState} from 'react'
import './Bottom.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {AiFillHome} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si"
import {GiSkills} from 'react-icons/gi'
import {IoIosContact} from 'react-icons/io'
import { Link } from 'react-scroll';
function Bottom() {
    const [value, setValue] =useState(0);
    const list=document.querySelectorAll('.list');
    function activelink(){
        list.forEach((item)=>
        item.classList.remove('active'));
         this.classList.add('active')
    }
    list.forEach((item)=>
    item.addEventListener('click',activelink))
  return (
    <>
     <div style={{position:"fixed",left:"50%",bottom:"0px",transform:"translate(-50%,-50%)",margin:"0 auto",borderRadius:"20px"}}>
     <Box sx={{ width: 350}} >
     <BottomNavigation
       showLabels
       value={value}
       onChange={(event, newValue) => {
         setValue(newValue);
       }}
       style={{borderRadius:"20px",backgroundColor:"white",borderWidth:"10px",opacity:"0.9",boxShadow:"1px 7px 7px black"}}
     >
      <Link to="Home"><BottomNavigationAction label="Home" icon={<AiFillHome/>} style={{fontSize:"25px"}} /></Link>
      <Link to="About"><BottomNavigationAction label="About" icon={<SiAboutdotme/>} style={{fontSize:"25px"}}/></Link>
      <Link to="skill"><BottomNavigationAction label="Skills" icon={<GiSkills/>} style={{fontSize:"25px"}} /></Link>
       <BottomNavigationAction label="Contact" icon={<IoIosContact/>} style={{fontSize:"25px"}} />
     </BottomNavigation>
   </Box> 

   {/* <div class="navigation">
        <ul>
            <li class=" list active">
                <a href="#">
                    <span class="icon"><ion-icon name="home"></ion-icon></span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="person"></ion-icon></span>
                    <span class="text">Profile</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="chatboxes"></ion-icon></span>
                    <span class="text">Messages</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="camera"></ion-icon></span>
                    <span class="text">Photos</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="settings"></ion-icon></span>
                    <span class="text">Settings</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div> */}
  </div>
  </>
  )
}

export default Bottom;