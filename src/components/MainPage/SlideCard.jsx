import React from "react"
import SlideCardData from "./SlideCardData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    AnimationTimeline:1,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {SlideCardData.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                <img src={value.cover} alt='' width="100%"/>
                  <h1 align="center">{value.title}</h1>
                  {/* <p>{value.desc}</p> */}
                  {/* <button className='btn-primary'>Visit Collections</button> */}
                </div>
                <div className='right'>
                  {/* <img src={value.cover} alt='' width="50%" height="100%"/> */}
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard