import React from "react"
import MainCourseCard from "./MainCourseCard"
import "./style.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from "@fortawesome/free-solid-svg-icons"

const MainCourseMain = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='MainCourse'>
        <div className='container'>
          <div className='heading f_flex'>
            <FontAwesomeIcon icon={faBowlFood} size='2x'></FontAwesomeIcon>
            <h1>Main Course</h1>
          </div>
          <MainCourseCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default MainCourseMain
