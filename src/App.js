import React from 'react'
import { Routes,Route ,Navigate } from "react-router-dom";
import AddProduct from './pages/admin/Product/addProduct'
import ListProduct from './pages/admin/Product/listProduct'
import ProfilAdmin from'./pages/admin/ProfilAdmin'
import ListOrder from './pages/admin/order/listOder'
import Details from './pages/admin/order/details'
import ListCustomer from './pages/admin/customer/listCustomer'
import MyOrder from './pages/user/myOrder';
import Profile from './pages/user/profile';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import Home from './pages/user/home';
import User from './pages/admin/customer/User';
import AdminLogin from './pages/auth/adminLogin';
import AdminRegister from './pages/auth/adminRegister';
import OrderDetails from './pages/user/orderDetails'

function App() {

  
    const PrivateRoute = ({ children}) => {
      const hasToken = !!localStorage.getItem('token');
      const role = localStorage.getItem('role');
      
      return (
        (hasToken && role === 'admin') ? children : <Navigate to='/adminlogin' replace />
      )
   }
  
   const UserRoute = ({ children}) => {
    const hasToken = !!localStorage.getItem('token');
    const role = localStorage.getItem('role');
    return (
      (hasToken === true) && (role ==="user") ? children : <Navigate to='/login' replace />
    )
 }

   const AuthRoute = ({ children}) => {
    const hasToken = !!localStorage.getItem('token');
    return (
      hasToken === false ? children : <Navigate to='/'  />
    )
  }



  return (
    
      <Routes>
        <Route path="/login" element={<AuthRoute><Login/></AuthRoute>} />
        <Route path="/register" element={<AuthRoute><Register/></AuthRoute>} />
        <Route path="/adminLogin" element={<AuthRoute><AdminLogin/></AuthRoute>} />
        <Route path="/adminRegister" element={<AuthRoute><AdminRegister/></AuthRoute>} />


       <Route path="/admin/DetailOrder/:orderId" element={<PrivateRoute> <Details /></PrivateRoute>} />       
        <Route path="/admin/addProduct" element={<PrivateRoute><AddProduct/></PrivateRoute>} />
        <Route path="/admin/listProduct" element={<PrivateRoute><ListProduct /></PrivateRoute>} />
      
        <Route path="/admin/adminProfil" element={<PrivateRoute><ProfilAdmin /></PrivateRoute>} />
        

       <Route path="/admin/Order" element={<PrivateRoute><ListOrder /></PrivateRoute>} />
       <Route path="/admin/Customer/:id" element={<PrivateRoute><User /></PrivateRoute>} />
       <Route path="/admin/Customer" element={<PrivateRoute><ListCustomer /></PrivateRoute>} />


      <Route path="/" element={<Home />} />
      <Route path="/user/order" element={<UserRoute><MyOrder /></UserRoute>} />
      <Route path="/user/profile" element={<UserRoute><Profile /></UserRoute>} />
      <Route path="/user/OrderDetails/:orderId" element={<UserRoute><OrderDetails /></UserRoute>} />

      <Route path="*" element = {<Home/>} />
      </Routes>
    
  

  )
}

export default App
