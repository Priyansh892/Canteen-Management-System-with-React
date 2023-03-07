import React from "react"
import "./style.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { faSubtract } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Cart = ({ CartItem, addToCart, decreaseQty}) => {
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0, 
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (totalPrice) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
        key:"rzp_test_iXM3oxVeF9y6ay",
        key_secret:"uBWFZI6dY8063R7F7aBWqUfK",
        amount:(totalPrice)*100,
        currency:"INR",
        name:"FOODYGEEK",
        description:"Testing",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Sharan",
          email:"gmsha@gmail.com",
          contact:"9874563984"
        },
        notes:{
          address:"Razorpay Corporation"
        },
        theme:{
          color:"#3399cc"
        }
      };
      var pay=new window.Razorpay(options);
      pay.open();
  }
  
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Food Items are there currently in the Cart</h1>}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      Rs.{item.price}.00 * {item.qty}
                      <span>Rs.{productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <FontAwesomeIcon icon={faAdd} size='2x'></FontAwesomeIcon>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <FontAwesomeIcon icon={faSubtract} size='2x'></FontAwesomeIcon>
                      </button>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h3>Total Price : </h3>
              <h3>{formatter.format(totalPrice)}.00</h3>
            </div>
            <button className="payment-button">
            <Link className='link' to='/Payment' onClick={() => displayRazorpay(totalPrice)}><li> Click on the Button to Pay</li></Link></button>
          </div>
        </div>
      </section>
    </>
  )
}
    

export default Cart
