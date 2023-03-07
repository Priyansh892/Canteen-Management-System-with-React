import React from "react"
import Image1 from "./images/MainCourseIcon.svg"
import Image2 from "./images/SnacksIcon.svg"
import Image3 from "./images/DrinksIcon.svg"
import Image4 from "./images/SweetIcon.svg"

const Categories = () => {
  const data = [
    {
      cateImg:Image1,
      cateName: "Main Course",
      
    },
    {
      cateImg:Image2,
      cateName: "Snacks",
    },
    {
      cateImg:Image3,
      cateName: "Drinks",
    },
    {
      cateImg:Image4,
      cateName: "Sweets",
    },
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
              
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories

