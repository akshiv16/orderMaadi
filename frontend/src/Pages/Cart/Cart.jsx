import React, { useContext } from 'react'
import './Cart.css'
import { storecontext } from '../../context/storecontext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const{cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(storecontext);

    const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className="cartitems">
        <div className="cartitemstitle">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {
            food_list.map((item,index)=>{
                if(cartItems[item._id]>0)
                {
                    return (
                        <div key={item._id}>
                        <div className='cartitemstitle cartitemsitem'>
                                    <img src={url+"/images/"+  item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>Rs{item.price}.00</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>Rs{item.price*cartItems[item._id]}.00</p>
                                    <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                            </div>
                            <hr />
                            </div>
                    )
                }
            })
        }
      </div>
      <div className='cartbottom'>
        <div className="carttotal">
            <h2>Cart Totals</h2>
            <div>
                <div className="cartdetails">
                    <p>Subtotal</p>
                    <p>Rs{getTotalCartAmount()}.00</p>
                </div>
                <hr />
                <div className="cartdetails">
                    <p>Delievery Fees</p>
                    <p>Rs{getTotalCartAmount()===0?0:2}.00</p>
                </div>
                <hr />
                <div className="cartdetails">
                    <b>Total</b>
                    <b>Rs{getTotalCartAmount()===0?0:getTotalCartAmount()+2}.00</b>
                </div>
                
            </div>
            <button onClick={()=>navigate('/order')} >Proceed To Checkout</button>
        </div>
        <div className="promocode">
            <div>
                <p>If You have a promo code,Enter it Here</p>
                <div className="promoinput">
                    <input type="text" placeholder='PromoCode'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
