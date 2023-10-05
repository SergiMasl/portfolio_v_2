import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer className='footer' id="contact">
        <div className="footer-container container"> 
            <h1 className='footer-title'>Sergey Maslinikov</h1>
            <ul className='footer-list'>
                <li className='footer-link-box'>
                    <a href="https://www.linkedin.com/in/sergey-maslinikov-108671186/" className='footer-link' target="_blank">LinkedIn</a>
                </li>
                <li className='footer-link-box'>
                    <p className='footer-email'>Maslinikovsergey@mail.com</p>
                </li>
            </ul>

            <div className='footer-social'>
                <a href="https://www.facebook.com/sergey.maslinikov.9/" className='footer-social-icon' target='_blank'>
                    <i className="bx bxl-facebook"></i>
                </a>
                {/* <a href="https://www.instagram.com/sergisib/" className='footer-social-icon' target='_blank'>
                    <i className="bx bxl-instagram"></i>
                </a> */}
                <a href="https://twitter.com/sergimas1192472/" className='footer-social-icon' target='_blank'>
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>
            
            <span className='footer-copy'>&#169; All rights reserved</span>
        </div> 
    </footer>
  )
}
