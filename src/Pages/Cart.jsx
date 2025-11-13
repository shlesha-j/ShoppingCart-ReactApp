import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromcart, increaseQuantity, decreaseQuantity } from '../store/slices/shopCartSlice';



function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart</h1>
      <div className='cart-items'>
        {
          cartItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map((item, index) =>
                    <tr key={index} className='cart-item' >
                      <td style={{ color: "white" }}>{item.title}</td>
                      <td style={{ color: "white" }}>${item.price}</td>
                      <td>
                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                        <span style={{ margin: "0 10px", color:"white" }}>{item.quantity}</span>
                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                      </td>
                      <td style={{ color: "white" }}>${item.price * item.quantity}</td>
                      <td>
                        <button className='btn btn-danger' onClick={() => dispatch(deleteFromcart(item.id))}>Remove</button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          ) : (
            <p><strong>Empty Cart</strong></p>
          )
        }
      </div>

    </div>
  )
}


export default Cart