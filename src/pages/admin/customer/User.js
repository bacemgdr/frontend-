import React, { useState, useEffect } from "react";
import AdminLayout from '../adminLayout/AdminLayout';
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user details
        const userResponse = await axios.get(`https://ecommecegmc.onrender.com/user/${id}`);
        setUserData(userResponse.data);

        // Fetch user's orders
        const ordersResponse = await axios.get(`https://ecommecegmc.onrender.com/order/buyer/${id}`);
        setUserData(prevData => ({ ...prevData, orders: ordersResponse.data }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <AdminLayout>
      <div>
        <h1>User Details</h1>
        {userData ? (
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* <p>Phone: {userData.phone}</p>
            <p>Address: {userData.address}</p> */}
            {/* Display orders associated with the user */}
            <h2>User Orders:</h2>
{userData.orders && userData.orders.length > 0 ? (
  <table  className="styled-table">
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {userData.orders.map((order, index) => (
        <tr key={index}>
          <td>{order._id}</td>
          <td>{order.status}</td>
          <td>
            <Link to={`/admin/DetailOrder/${order._id}`}>
              <button>View Details</button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
// ) : (
//   <p>No orders found.</p>
// )}

            ) : (
              <p>No orders found for this user.</p>
            )}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default User;
