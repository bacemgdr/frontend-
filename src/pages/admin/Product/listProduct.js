import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash ,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import AdminLayout from '../adminLayout/AdminLayout';

const ListProduct = () => {
  const navigate = useNavigate();
  

  const [editForm, setEditForm] = useState({
    title: '',
    price: '',
    category: '',
  });
  

  const [data, setData] = useState([]);
  useEffect(() => {
    getProduct();
  });

  const getProduct = async () => {
    const res = await axios.get('https://ecommecegmc.onrender.com/product');
    if (res.status === 200) {
      setData(res.data);
    }
  };

  const handleAddProduct = () => {
    // Navigate to the "/admin/addProduct" route
    navigate('/admin/addProduct');
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm('Are you sure you want to delete this product')) {
        const res = await axios.delete(`http://localhost:5000/product/${id}`);
        console.log('aaaaaaaaaaaaaaaaaa', id);
        console.log('aaaaaaaaaaaaaaaaaa', res);
  
        if (res.status === 200) {
          // toast.success(res.body);
          Navigate('admin/listProduct');
        } else {
          // Handle other status codes if needed
          console.error('Unexpected response status:', res.status);
        }
      }
    } catch (error) {
      // Handle any errors that occur during the asynchronous operation
      console.error('Error deleting product:', error.message);
      // You can also show a user-friendly error message here if needed
      // Example: toast.error('Failed to delete product');
    }
  };
  
  const handleEdit = (id) => {
    // Find the product with the given id
    const product = data.find((item) => item._id === id);
  
    // Set the edit form with the existing product details
    setEditForm({
      title: product.productTitle,
      price: product.productPrice,
      category: product.productCategorie,
    });
  };
  const updateProduct = async (id) => {
    try {
      // Send a PUT request to update the product
      const res = await axios.put(
        `http://localhost:5000/product/${id}`,
        editForm
      );
  
      if (res.status === 200) {
        // Update the product in the data state
        setData((prevData) =>
          prevData.map((item) =>
            item._id === id ? { ...item, ...editForm } : item
          )
        );
  
        // Reset the edit form
        setEditForm({
          title: '',
          price: '',
          category: '',
        });
  
        // Show a success message to the user
        // Example: toast.success('Product updated successfully');
      } else {
        // Handle other status codes if needed
        console.error('Unexpected response status:', res.status);
      }
    } catch (error) {
      // Handle any errors that occur during the asynchronous operation
      console.error('Error updating product:', error.message);
      // You can also show a user-friendly error message here if needed
      // Example: toast.error('Failed to update product');
    }
  };

  

  return (
    <AdminLayout>
      <div>
        <h2>Product List</h2>
        <div>
        <table className="styled-table">
  <thead>
    <tr>
      <th style={{ textAlign: 'center' }}>No</th>
      <th style={{ textAlign: 'center' }}>Image</th>
      <th style={{ textAlign: 'center' }}>Title</th>
      <th style={{ textAlign: 'center' }}>Price</th>
      <th style={{ textAlign: 'center' }}>Category</th>
      <th style={{ textAlign: 'center' }}>Action</th>
    </tr>
  </thead>
  <tbody>
    {data &&
      data.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img
                src={item.productImg}
                alt="image"
                style={{ width: '80px', height: '60px' }}
              />
            </td>
            <td>{item.productTitle}</td>
            <td>${item.productPrice}</td>
            <td>{item.productCategory}</td>
            <td>
              {item._id === editForm._id ? (
                <>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editForm.price}
                    onChange={(e) =>
                      setEditForm({ ...editForm, price: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editForm.category}
                    onChange={(e) =>
                      setEditForm({ ...editForm, category: e.target.value })
                    }
                  />
                  <button onClick={() => updateProduct(item._id)}>
                    Update
                  </button>
                </>
              ) : (
                <FontAwesomeIcon
                  onClick={() => handleEdit(item._id)}
                  icon={faPenToSquare}
                />
              )}
              <FontAwesomeIcon
                onClick={() => handleDelete(item._id)}
                icon={faTrash}
              />
            </td>
          </tr>
        );
      })}
  </tbody>
</table>

        </div>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </AdminLayout>
  );
};

export default ListProduct;
