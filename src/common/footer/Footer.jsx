import React from "react"
import "./style.css"

import { FaInstagramSquare,FaFacebook, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>FoodyGeek</h1>
            <p>Have a great day with your favourite Food!!</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <FaInstagramSquare className="instagram" fontSize={48}/>
              </div>
              <div className='img d_flex'>
                <FaFacebook className="facebook" fontSize={48}/>
                {/* <span>Facebook</span> */}
              </div>
              <div className="img d_flex">
                <FaLinkedin className="linkedin" fontSize={48}/>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Who is FoodyGeek</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>Track Your Order </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>VITAP University, Amaravathi, Andhra Pradesh,India,522237 </li>
              <li>FoodyGeek.help@gmail.com</li>
              <li>Phone: +91 79865 42310</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
