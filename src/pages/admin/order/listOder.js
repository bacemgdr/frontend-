
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "../adminLayout/AdminLayout";

const ListOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const res = await axios.get("https://backend-zvk7.onrender.com/order/all"); // Update the API endpoint
      if (res.status === 200) {
        setOrders(res.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <AdminLayout>
      <div>
  <h1>Admin Order List</h1>
  <table className="styled-table">
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Status</th>
        <th>Payment Method</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order._id}>
          <td>{order._id}</td>
          <td>{order.status}</td>
          <td>{order.payment}</td>
          <td>
            <Link to={`/admin/DetailOrder/${order._id}`}>
              <button>View Details</button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </AdminLayout>
  );
};

export default ListOrder;
