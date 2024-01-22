import React, { useState, useEffect } from 'react';
import AdminLayout from '../adminLayout/AdminLayout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Details() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`https://backend-zvk7.onrender.com/order/${orderId}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <AdminLayout>
      <div className="App">
      <h1>Order Details</h1>
{order && (
  <div className='display flex'> 
    <table className="styled-table">

      <thead>
        <tr> 
          <th>Order ID</th>
          <th>Status:</th>
          <th>Payment Method:</th>
          <th>Buyer::</th>
          <th>Total Price:</th>
        </tr>
      </thead>
      <tbody>
      <td>{order._id}</td>
      <td>{order.status}</td>
      <td>{order.payment}</td>
      <td>{order.buyer && order.buyer.name}</td>
      <td>${order.totalPrice}</td>

      </tbody>

    </table>
   <br /> <br /> <br />
    <table  className="styled-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {order.products.map(product => (
          <tr key={product._id}>
            <td>{product.productTitle}</td>
            <td>${product.productPrice}</td>
            <td><img src={product.productImg} alt={product.productTitle} style={{ width: '80px', height: '60px' }} /></td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* Add other order details as needed */}
  </div>
)}

      </div>
    </AdminLayout>
  );
}

export default Details;
