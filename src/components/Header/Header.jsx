import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./search"
import Navbar from "./NavBar"

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  )
}

export default Header