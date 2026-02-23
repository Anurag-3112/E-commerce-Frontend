import React from 'react'
import './Footer.css'
import footer_logo from '../assets/footer_logo.png'
import ins_logo from '../assets/ins_logo.png'
import wp_logo from '../assets/wp_logo.png'
import pint_logo from '../assets/pint_logo.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=''/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>  
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={ins_logo} alt=''/>
        </div>
        <div className="footer-icon-container">
            <img src={wp_logo} alt=''/>
        </div>
        <div className="footer-icon-container">
            <img src={pint_logo} alt=''/>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2026 - All Rights Preserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
