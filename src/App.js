import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/NavBar1"
import Search from "./common/header/Header";
import Pages from "./pages/Pages"
import MainCourseData from "./Components copy/MainCourse/MainCourseData"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import FormRegister from "./components/Forms/FormRegister"
import FormLogin from "./components/Forms/FormLogin"
// import Register from "./components/Forms/Register";
// import Login from "./components/Forms/Login";

function App() {

  const { productItems } = MainCourseData     /*Props */

  const [CartItem, setCartItem] = useState([]) 

  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])  /*If cart is empty then new product added in cart */
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header/>
        <Search CartItem={CartItem}/>
        <Switch>

          <Route path='/home' exact>
            <Pages productItems={productItems} addToCart={addToCart}/>
          </Route>

        <Route path='/Register' exact>
          <FormRegister/>
          </Route>

          <Route path='/SignIn' exact>
          <FormLogin/>
          </Route>

          {/* <Route path='/Register' exact>
          <Register/>
          </Route>

          <Route path='/SignIn' exact>
          <Login/>
          </Route> */}

          <Route path='/Payment' exact>
          </Route>

          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
