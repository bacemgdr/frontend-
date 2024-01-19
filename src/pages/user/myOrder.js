import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserLayout from './userLayout/userLayout';
import axios from "axios";

const MyOrder = () => {
  const [userOrders, setUserOrders] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const ordersResponse = await axios.get(`http://localhost:5000/order/buyer/${userId}`);
        setUserOrders(ordersResponse.data);
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserOrders();
  }, [userId]);

  return (
    <UserLayout>
      <div>
  <h1>My Orders</h1>
  {userOrders && userOrders.length > 0 ? (
 <table className="styled-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Status</th>
          <th>Payment Method</th>
          <th>Product ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userOrders.map((order, index) => (
          <tr key={index}>
            <td>{order._id}</td>
            <td>{order.status}</td>
            <td>{order.payment}</td>
            <td>
              <ul>
                {order.products.map((product, productIndex) => (
                  <li key={productIndex}>{product._id}</li>
                ))}
              </ul>
            </td>
            <td>
              <Link to={`/user/OrderDetails/${order._id}`}>
                <button>View Details</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No orders found.</p>
  )}
</div>

    </UserLayout>
  );
};

export default MyOrder;
