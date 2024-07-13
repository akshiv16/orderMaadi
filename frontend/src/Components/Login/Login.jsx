import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { storecontext } from '../../context/storecontext'
import axios from 'axios'

const Login = ({setShowLogin}) => {

    const {url,setToken} =useContext(storecontext)

    const[curState,setCurrState]=useState("Login")
    const[data,setData]=useState({
      name:"",
      email:"",
      password:""

    })
    const onChangeHandler=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    // useEffect(()=>{
    //   console.log(data);
    // },[data])

    
    const onLogin= async (event)=>{
        event.preventDefault()
        let newUrl=url;
        if(curState==="Login"){
          newUrl+="/api/user/login"
        }
        else{

          newUrl+="/api/user/register"
        }
        console.log('Constructed URL',newUrl)
        const response= await axios.post(newUrl,data);
        console.log(response.data)

        if(response.data.success)
        {
              setToken(response.data.token);
              localStorage.setItem("token",response.data.token);
              setShowLogin(false);
        }
        else{
          alert(response.data.message);
        }
    }
  return (
    <div className='login'>
      <form onSubmit={onLogin} className='container'>
        <div className="title">
            <h2>{curState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="inputs">
            {curState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit' onClick={onLogin}>{curState==="Sign Up"?"Create Your Account":"Login"}</button>
        <div className="condition">
            <input type="checkbox" name="" id="" required />
            <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {curState==="Login"?
        <p>Create a New Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p> : 
        <p>Already Have An Account ? <span onClick={()=>setCurrState("Login")} >Login Here</span></p>}

        
       
      </form>
    </div>
  )
}

export default Login
