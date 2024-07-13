import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { storecontext } from '../../context/storecontext'
const FoodItem = ({id,name,price,description,image}) => {
    
    const{cartItems,addtoCart,removeFromCart,url}=useContext(storecontext);
  return (
    <div className='fooditem'>
        <div className="fooditemimgcontainer">
            <img className='fooditemimg' src={url+"/images/"+ image} alt="" />
            {
                !cartItems[id]
                ? <img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt="" srcset="" />
                : <div className='fooditemcounter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
            }
        </div>
      <div className='fooditeminfo'>
        <div className="fooditemnamerating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" srcset="" />
        </div>
        <p className='fooditemdescr'>
        {description}
        </p>
        <p className='fooditemprice'> Rs{price}.00</p>
      </div>
    </div>
  )
}

export default FoodItem
