import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact' id="Contact">
            <div className="contact-section">
                <h1>Contact Us</h1>
                <form className="contact-form" action="index.html" method="post">
                    <input type="text" className="contact-form-text" placeholder="Your name" />
                    <input type="email" className="contact-form-text" placeholder="Your email" />
                    <input type="text"  className="contact-form-text" placeholder="Your phone" />
                    <textarea className="contact-form-text" placeholder="Your message"></textarea>
                   <input type="submit" className="contact-form-btn" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact