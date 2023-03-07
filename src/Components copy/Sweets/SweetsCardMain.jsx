import React from "react"
import SweetsCard from "./SweetsCard"
import "./style.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream } from "@fortawesome/free-solid-svg-icons"

const SweetsCardMain = ({ Sweets, addToCart }) => {
  return (
    <>
      <section className='Sweets'>
        <div className='container'>
          <div className='heading f_flex'>
            <FontAwesomeIcon icon={faIceCream} size='2x'></FontAwesomeIcon>
            <h1>Sweets</h1>
          </div>
          <SweetsCard Sweets={Sweets} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default SweetsCardMain