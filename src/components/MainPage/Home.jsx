import React from "react"
import Categories from "./categories"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home