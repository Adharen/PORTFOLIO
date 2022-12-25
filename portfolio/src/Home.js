import React, { useEffect } from "react";
import "./Home.css"
// import AOS from "aos";
// import "aos/dist/aos.css";
import vid from './earth.mp4'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-scroll';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
function Home() {
  //   useEffect(() => {
  //     AOS.init();
  //   }, [])

  return (

    <>

      <nav class="navbar navbar-dark " style={{ opacity: "1.1", position: "relative", filter: "opacity(0.8)", background: "#000" }} id="nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ fontSize: "25px" }}><span style={{ color: "#2196f3" }} >Web</span>Maker</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <Link to="About"> <a class="nav-link" href="#">About</a></Link>
              </li>
              <li class="nav-item">
                <Link to="Skill"> <a class="nav-link" href="#">Skills</a></Link>
              </li>
              <li class="nav-item">
                <Link to="Achievements"> <a class="nav-link" href="#">Achievement</a></Link>
              </li>
              <li class="nav-item">
                <Link to="Project"> <a class="nav-link" href="#">Project</a></Link>
              </li>
              <li class="nav-item">
                <Link to="Contact"> <a class="nav-link" href="#">Contact</a></Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <section className='box'>
        <video src={vid} autoPlay loop muted></video>
        {/* <h1> <span  style={{ color: "#2196f3" }}>Web</span><span>Maker</span></h1> */}
        <div class="wrapper">
          <div class="typing-text">I am a <span  style={{ color: "#2196f3" }}>web</span> developer!</div>
        </div>
        <Link to="Contact"> <a class="nav-link" href="#" className="boxBtn">Contact</a></Link>
        <div className="icon">
          <h3 ><AiFillInstagram style={{ color: "rgb(182, 62, 62)" }} /></h3>
          <h3 ><AiFillYoutube style={{ color: "red" }} /></h3>
          <h3><AiFillLinkedin style={{ color: "blue" }} /></h3>
          <h3 ><MdEmail style={{ color: "red" }} /></h3>
        </div>
      </section>
      <Box sx={{ '& > :not(style)': { m: 0 } }} style={{ position: "fixed", bottom: "10px", right: "10px", zIndex: "10" }}>
        <Link to="nav">  <Fab variant="extended" size="small" color="primary" aria-label="add" style={{ background: "blue", opacity: "0.6", filter: "opacity(0.6)" }}>
          top
        </Fab></Link>
      </Box>
    </>
  )
}

export default Home