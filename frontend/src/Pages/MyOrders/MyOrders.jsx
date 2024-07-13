import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { storecontext } from '../../context/storecontext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const { url, token } = useContext(storecontext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/userorders`,
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='myorders'>
      <h2>Myorders</h2>
      <div className="container">
        {data.map((orderModel, index) => (
          <div key={index} className='myordersorder'>
            <img src={assets.parcel_icon} alt="" />
            <p>
              {orderModel.items.map((item, itemIndex) => (
                <span key={itemIndex}>
                  {item.name} x {item.quantity}
                  {itemIndex !== orderModel.items.length - 1 && ', '}
                </span>
              ))}
            </p>
            <p>{orderModel.amount} </p>
            <p>Items: {orderModel.items.length}</p>
            <p><span>&#x25cf;</span><b>{orderModel.status}</b></p>
            <button onClick={fetchOrders}>Track order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
