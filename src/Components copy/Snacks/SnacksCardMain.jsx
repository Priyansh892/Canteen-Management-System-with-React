import React from "react"
import SnacksCard from "./SnacksCard"
import "./style.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from "@fortawesome/free-solid-svg-icons"

const SnacksCardMain = ({ Snacks, addToCart }) => {
  return (
    <>
      <section className='Snacks'>
        <div className='container'>
          <div className='heading f_flex'>
            <FontAwesomeIcon icon={faHamburger} size='2x'></FontAwesomeIcon>
            <h1>Snacks</h1>
          </div>
          <SnacksCard Snacks={Snacks} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default SnacksCardMain
