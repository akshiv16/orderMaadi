import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { storecontext } from '../../context/storecontext';
import newlogo from './final.png'

const Navbar = ({setShowLogin}) => {
const [menu,setMenu]=useState("Home");
const {getTotalCartAmount,token,setToken}=useContext(storecontext);


const navigate=useNavigate();
const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
}

  return (
    <div className='navbar'>
    <Link to='/'> <img src={newlogo} alt=""  className='logo'/></Link> 
      <ul className='navbarmenu'>
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#exploremenu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#appdownload' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</a>
      </ul>
      <div className="navbarright">
       
        <div className="navbarsearch">
           <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?  <button onClick={()=>setShowLogin(true)} >Sign In</button>:
        <div className='navbarprofile'>
              <img src={assets.profile_icon} alt="" />
              <ul className='navdropdown'>
                <li onClick={()=>navigate('/myorders')} > <img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout} ><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
          </div>
        }
      
      </div>
    </div>
  )
}

export default Navbar
