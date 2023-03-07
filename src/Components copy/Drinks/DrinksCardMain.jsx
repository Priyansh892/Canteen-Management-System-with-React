import React from "react"
import DrinksCard from "./DrinksCard"
import "./style.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons"

const DrinksCardMain = ({ Drinks, addToCart }) => {
  return (
    <>
      <section className='Drinks'>
        <div className='container'>
          <div className='heading f_flex'>
            <FontAwesomeIcon icon={faGlassCheers} size='2x'></FontAwesomeIcon>
            <h1>Drinks</h1>
          </div>
          <DrinksCard Drinks={Drinks} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default DrinksCardMain