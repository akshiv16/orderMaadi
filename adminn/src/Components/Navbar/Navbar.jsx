import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import newlogo from './final.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={newlogo} alt="" />
      <h3>Admin Panel</h3>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
