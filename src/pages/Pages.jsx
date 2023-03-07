import React from "react"
import Home from "../Components copy/MainPage/Home"
import Maincourse from "../Components copy/MainCourse/MainCourseMain"
import SnacksCardMain from "../Components copy/Snacks/SnacksCardMain"
import DrinksCardMain from "../Components copy/Drinks/DrinksCardMain"
import SweetsCardMain from "../Components copy/Sweets/SweetsCardMain"

const Pages = ({ MainCourse, addToCart, Snacks,Drinks,Sweets,CartItem}) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Maincourse MainCourse={MainCourse} addToCart={addToCart} />
      <SnacksCardMain Snacks={Snacks} addToCart={addToCart}/>
      <DrinksCardMain Drinks={Drinks} addToCart={addToCart} />
      <SweetsCardMain Sweets={Sweets} addToCart={addToCart}/>
    </>
  )
}

export default Pages
