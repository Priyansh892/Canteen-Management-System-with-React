import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

import DrinksData from "./DrinksData"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <FontAwesomeIcon icon={faArrowCircleRight} size = '4x'></FontAwesomeIcon>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <FontAwesomeIcon icon={faArrowCircleLeft} size = '4x'></FontAwesomeIcon>
      </button>
    </div>
  )
}
const DrinksCard= ({ Snacks, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {DrinksData.Drinks.map((Drinks) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <img src={Drinks.cover} alt='' />
                  <div className='product-like'>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{Drinks.name}</h3>

                  <div className='price'>
                    <h4>Rs.{Drinks.price}.00 </h4>
                    <button onClick={() => addToCart(Drinks)}>
                      <FontAwesomeIcon icon={faCartPlus} onclick={increment} size='1x'></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default DrinksCard