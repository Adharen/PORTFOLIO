import React from 'react'
import './About.css'
import ImageA from './about2.png'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { AiOutlineDownload } from 'react-icons/ai'




function About() {

  return (

    <div id="About" >
      <div className="section">
        <div className="containers">
          <div className="content-section">
            <div className="title">
              <h1 >About Us</h1>
            </div>
            <div className="content">
              <h3>Hey... My Self Nikhil Adhare</h3>
              <p >I am from MUMBAI ,I am currently study COMPUTER ENGINEERING in <span style={{ color: "yellow" }}>VIDYALANKAR INSTITUTE OF TECHNOLOGY </span> which located in MUMBAI.
              </p>
              <p>
                I have successfully completed my INTERNSHIP with <span style={{ color: "yellow" }}>LetsGrowMore (LGM) Community</span> virtual internship program in <span style={{ color: "yellow" }}>WEB DEVELOPMENT</span>.
              </p>
              <p >
                I have interested in HTML,CSS,JAVASCRIPT,JAVA,REACTJS and DATA STRUCUTRE and ALOGORITHM
              </p>
              <div className="info" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "20px", gridAutoRows: "minmax(100px, auto)" }}>
                <div className="infos">
                  <h3>BIRHT PLACE</h3>
                  <p>Ulhasnagar</p>
                </div>
                <div className="infos">
                  <h3>EMAIL</h3>
                  <p>adharenikhil@gmail.com</p>
                </div>
                <div className="infos">
                  <h3>EDUCATION</h3>
                  <p>BE</p>
                </div>
                <div className="infos">
                  <h3>LANGAUGE</h3>
                  <p>ENGLISH MARATHI HINDI</p>
                </div>
              </div>
              <div className="btn3">
                Resume<AiOutlineDownload />
              </div>
            </div>
            <div className="socials">
            </div>
          </div>
          <div className="image-section">
            <img src={ImageA} alt="" srcset="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About