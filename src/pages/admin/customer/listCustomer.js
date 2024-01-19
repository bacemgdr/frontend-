import AdminLayout from '../adminLayout/AdminLayout';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListCustomer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get('https://ecommecegmc.onrender.com//user');
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <AdminLayout>
      <div style={{ marginTop: "120px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>No</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Role</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td style={{ textAlign: "center" }}>
                    <Link to={`/admin/Customer/${item._id}`}>
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
}

export default ListCustomer;
