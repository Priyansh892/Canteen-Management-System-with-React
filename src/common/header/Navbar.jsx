import React, { useState } from "react"
// import { Link } from "react-router-dom"

//import { FaBars } from "react-icons/fa"
const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories 
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {/* {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <FaBars className="bars"/>} */}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
