import React from 'react'
import './Footer.css'
import {MdOutgoingMail} from 'react-icons/md'
import {HiPhoneMissedCall} from 'react-icons/hi'
function Footer() {
    return (
        // <div className="containerss">
        //   <div className="row">
        //     <div className="footer-col">
        //       <h4>company</h4>
        //       <ul>
        //         <li><a to="/">about us</a></li>
        //         <li><a to="/">our services</a></li>
        //         <li><a to="/">privacy policy</a></li>
        //         <li><a to="/">affiliate program</a></li>
        //       </ul>
        //     </div>
        //     <div className="footer-col">
        //       <h4>get help</h4>
        //       <ul>
        //         <li><a to="/">FAQ</a></li>
        //         <li><a to="/">shipping</a></li>
        //         <li><a to="/">returns</a></li>
        //         <li><a to="/">order status</a></li>
        //         <li><a to="/">payment options</a></li>
        //       </ul>
        //     </div>
        //     <div className="footer-col">
        //       <h4>online shop</h4>
        //       <ul>
        //         <li><a to="/">watch</a></li>
        //         <li><a to="/">bag</a></li>
        //         <li><a to="/">shoes</a></li>
        //         <li><a to="/">dress</a></li>
        //       </ul>
        //     </div>
        //     <div className="footer-col">
        //       <h4>follow us</h4>
        //       <div class="social-as">
        //         <a to="/"><i className="fab fa-facebook-f"></i></a>
        //         <a to="/"><i className="fab fa-twitter"></i></a>
        //         <a to="/"><i className="fab fa-instagram"></i></a>
        //         <a to="/"><i className="fab fa-aedin-in"></i></a>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <footer class="text-center text-lg-start" style={{ minHeight: "20vh",opacity:"1.1",color:"#fff" ,filter:"opacity(0.8)",background:"#000",borderTop:"0.1px solid #2196f3" }} >
        <div class="text-center p-3" style={{color:"white"}}>
     <h4><MdOutgoingMail/> adharenikhil@gmail.com</h4>
     <h4><HiPhoneMissedCall/>+91 9370587779</h4>
          © 2022 Copyright:
          <a class="text-light" href="https://mdbootstrap.com/"  style={{color:"white"}}>MDBootstrap.com</a>
        </div>
      </footer>
    )
}

export default Footer