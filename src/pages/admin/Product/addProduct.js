import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import AdminLayout from '../adminLayout/AdminLayout';


const { Option } = Select;

const AddProduct = () => {
  const navigate = useNavigate();

  const [productTitle, setTitle] = useState("");
  const [productDescription, setDescription] = useState("");
  const [productPrice, setPrice] = useState("");
  const [productCategorie, setCategory] = useState("");
  const [productRating, setRating] = useState("");
  const [productImg, setImage] = useState("");

  // create product function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/product", {
        productTitle,
        productDescription,
        productPrice,
        productCategorie,
        productRating,
        productImg,
      });
  
      // if (res && res.data.success) {
        toast.success("Product Created Successfully");
  
        // Clear form fields
        setTitle("");
        setDescription("");
        setPrice("");
        setCategory("");
        setRating("");
        setImage("");
  
        // Note: Commenting out the navigation for now
        // navigate("/admin/listProducts");
      // } else {
      //   toast.error(res.data.message);
      // }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  

  return (
    <AdminLayout>
      <div className="App">
        <h1> Add Product </h1>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box22">

<div className="input-box2">
            <input
              type="text"
              value={productImg}
              placeholder="Enter Image URL"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          {productImg && (
            <div className="text-center">
              <img
                src={productImg}
                alt="productPic"
                height={"200px"}
                className="img img-responsive"
              />
            </div>
          )}
            <div className="input-box2">
              <input
                type="text"
                value={productTitle}
                placeholder="Write a name"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-box2">
              <input
                type="text"
                value={productDescription}
                placeholder="Write a description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-box2">
              <input  
                type="number"
                value={productPrice}
                placeholder="Write a Price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="input-box2">
              <input  
                type="number"
                value={productRating}
                placeholder="Write a Rating"
                className="form-control"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div className="input-box2">
            <Select
  bordered={false}
  placeholder="Select Category"
  size="large"
  showSearch
  className="form-select mb-3"
  onChange={(value) => {
    setCategory(value);
  }}
>
  <Option value="Mens Collection">Mens Collection</Option>
  <Option value="Women Collection">Women Collection</Option>
  <Option value="Accessory Collection">Accessory Collection</Option>
</Select>

            </div>

            <div className="input-box2">
              <button className="btn btn-primary">CREATE PRODUCT</button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddProduct;
