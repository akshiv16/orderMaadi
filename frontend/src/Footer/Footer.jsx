import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
import newlogo from './final.png'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footercontent">
        <div className="left">
            <img src={newlogo} alt="" className='logo'/>
            <p>OrderMaadi is your go-to solution for all your food delivery needs. We pride ourselves on connecting you with a diverse array of local restaurants, ensuring you have access to a wide variety of delicious cuisines right at your fingertips. Whether you're craving a gourmet meal from a fine dining restaurant, a quick bite from a local café, or comfort food from your favorite diner, OrderMaaadi brings it all to your doorstep with just a few clicks.</p>
            <div className="social">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="centre">
<h2>Company</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
        </div>
        <div className="right">
<h2>Get in Touch</h2>
<ul>
    <li>+91-99988****999</li>
    <li>contact@ordermaadi.com</li>
</ul>
        </div>
      </div>
      <hr />
      <p className='copyright'> CopyRight 2024 © OrderMaadi.com- All Rights Reserved.</p>
    </div>
  )
}

export default Footer
