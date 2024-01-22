import React, { useState, useEffect } from 'react';
import UserLayout from './userLayout/userLayout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OrderDetails() {
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
console.log("hhhhh",order);
  return (
    <UserLayout>
      <div className="App">
  <h1>Order Details</h1>
  {order && (
    <div>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Payment Method</th>
            <th>Buyer</th>
            <th> Prix Total </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order._id}</td>
            <td>{order.status}</td>
            <td>{order.payment}</td>
            <td>{order.buyer && order.buyer.name}</td>
            <td>{order.totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <h2>Products</h2>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.productTitle}</td>
              <td>{product.productDescription}</td>
              <td>{product.productPrice}</td>
              <td>
                <img src={product.productImg} alt={product.productTitle}  style={{ width: '80px', height: '60px' }}/>
              </td>
              <td>{product.productCategorie}</td>
              <td>{product.productRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

      </UserLayout>
  );
}

export default OrderDetails;
