import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../cadrProfile.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const AdminhandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://ecommecegmc.onrender.com/admin/login", {
        email,
        password,
      });

      if (res.data && res.data.token && res.data.admin) {
        const { token, admin } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", admin.name);
        localStorage.setItem("userId", admin._id);
        localStorage.setItem("role", "admin");

        toast.success("Login successful!");
        navigate("/admin/listproduct");
      } else {
        toast.error("Invalid response from server");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="box">
      <h1>Admin Login</h1>
      <form action="#" onSubmit={AdminhandleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Your Password"
          required
        />
        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
      <p>
        Not a member? <a href="/admin/register">Sign Up</a>
      </p>
    </div>
  );
};

export default AdminLogin;
