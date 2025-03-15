import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Bringing delicious flavors straight to your doorstep! From gourmet meals to everyday comfort food, we ensure fresh, high-quality ingredients with speedy delivery. Enjoy hassle-free ordering and savor the taste of convenience. Your cravings, our priority!</p>
            <div className="footer-social-icons">
    <a href="https://www.instagram.com/justtt.rixhi_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} color="#fff" />
    </a>
    <a href="https://github.com/Jyotiraditya077" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} color="#fff" />
    </a>
    <a href="https://www.linkedin.com/in/jyotiraditya--swain/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} color="#fff" />
    </a>
</div>
        </div>
        <div className="footer-content-center">
      <h2>COMPANY</h2>
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/cart">Delivery</a></li>
          <li><a href="/privacy-policy">Privacy policy</a></li>
      </ul>
    </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>9337150262</li>
                <li>infoFineBites@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Developed with &#x1F499; by <a href="https://jyotiradityaportfolio.netlify.app/" target="_blank" className="glow">this guy</a>.</p>
      <p className="footer-copyright">Copyright 2025 &#169; FineBites - All Right Reserved.</p>
    </div>
  )
}

export default Footer