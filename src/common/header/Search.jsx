import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>

          <div className='search-box f_flex'>
            <input type='text' placeholder='Search among 4 categories of food items..' />
            <span><FontAwesomeIcon icon={faSearch} size='2x'></FontAwesomeIcon></span>
          </div>

          <div className='icon f_flex width'>
            <FontAwesomeIcon icon={faUser} size='3x'></FontAwesomeIcon>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <FontAwesomeIcon icon={faShoppingCart} size='3x'></FontAwesomeIcon>
                <span>{CartItem.length === 0 ? 0 : CartItem.length}</span>
              </Link>
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default Search
