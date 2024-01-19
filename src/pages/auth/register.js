import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://ecommecegmc.onrender.com/user/register", {
        name,
        email,
        password,
        phone,
        address,
      });
        
          toast.success(res.data && res.data.message);
          navigate("/login");
      }
      
     catch (error) {
      console.log(error);
      toast.error("Something went wrong");
     }}
  return (
    <div className="register">
      <div className="wrapper">
        <h2>Registration</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus />
          </div>
          <div className="input-box">
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required />
          </div>
          <div className="input-box">
            <input   type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
             />
          </div>
          <div className="input-box">
            <input
               type="text"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               className="form-control"
               id="exampleInputEmail1"
               placeholder="Enter Your Phone"
               required
            />
          </div>
          <div className="input-box">
            <input  type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required />
          </div>
          <div className="input-box button">
            <input type="Submit" defaultValue="Register Now" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <a href="/login">Login now</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
