import React, { useState } from "react";
import "./NavBar1.css";
import FoodyGeek from "./FoodyGeek.png"
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const NavBar1 = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
  
          {/* <h2>
          <span>F</span>oody
          <span>G</span>eek
        </h2> */}
        <img src={FoodyGeek} alt="FoodyGeek"></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/SignIn">Sign In </NavLink>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_xss">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_xss">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_xss">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default NavBar1;