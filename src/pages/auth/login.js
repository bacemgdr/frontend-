import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // form function
  // form function
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("https://backend-zvk7.onrender.com/user/login", {
      email,
      password,
    });

    if (res.data && res.data.token && res.data.user) {
      // Store token and username in local storage

      const { token, user } = res.data;
      console.log(user);

      // Store token and username in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.name);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id);
      localStorage.setItem("role", "user");
      // console.log(res.data);
      // console.log(token);
     

      // Display success message
      toast.success("Login successful!");

      // Redirect to home page after successful login
      navigate("/");
    } else {
      // Display error message if the response doesn't contain token and user
      toast.error("Invalid response from server");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

  return (
    
    <div className="box">
    <h1>Login</h1>
    <form action="#" onSubmit={handleSubmit}>
    <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
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
          </button>''
          </form>
    <p>Not a member? <a href="/register">Sign Up</a></p>
    <p>Not a member? <a href="/adminRegister">admin register</a></p>
    <p>Not a member? <a href="/adminLogin">admin Login</a></p>
  </div>
  
  );
};

export default Login;