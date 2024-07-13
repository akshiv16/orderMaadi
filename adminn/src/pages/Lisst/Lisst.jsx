import React, { useEffect, useState } from 'react'
import './Lisst.css'
import axios from 'axios';
import { toast } from 'react-toastify';
const Lisst = ({url}) => {

   
    const[list,setList]=useState([]);

    const fetchList=async()=>{
const response=await axios.get(`${url}/api/food/list`);
if(response.data.success)
{
setList(response.data.data);
}else{
toast.error("Error");
}
    }
    const removeFood=async(foodId)=>{
     const respone=await axios.post(`${url}/api/food/remove`,{id:foodId});
     await fetchList();
     if(respone.data.success)
     {
toast.success(respone.data.message)
     }else{
        toast.error("Error")
     }
    }
    useEffect(()=>{
fetchList();
    },[])
  return (
    <div className='list add flexcol'>
      <p>All Food List</p>
      <div className="listtable">
        <div className="listtableformat title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
        </div>
        {list.map((item,index)=>{
            return(
                <div key={index} className='listtableformat'>
<img src={`${url}/images/`+item.image} alt="" className='displayimage' />
<p>{item.name}</p>
<p>{item.category}</p>
<p>Rs.{item.price}</p>
<p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default Lisst
