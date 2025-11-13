import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Cart</h1>
        {
          cartItems.length > 0 ? (
            cartItems.map((item, index) =>
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            )
          ): (
            <p><strong>Empty Cart</strong></p>
          )
        }
    </div>
  )
}

export default Cart