import React from "react";
import "./Sidebar.css";

function SideBar() {
  return (
    <div>
      <div className="nav-side-menu">
        <div className="brand">Brand Logo</div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        ></i>

        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li>
              <a href="#">
                <i className="fa fa-dashboard fa-lg"></i> Dashboard
              </a>
            </li>

            <li
              data-toggle="collapse"
              data-target="#products"
              className="collapsed active"
            >
              <a href="#">
                <i className="fa fa-gift fa-lg"></i> Product{" "}
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="products">
              <li className="active">
                <a href="/admin/AddProduct">Add Product</a>
              </li>
              <li>
                <a href="/admin/listProduct">List Product </a>
              </li>
            </ul>

            <li
              data-toggle="collapse"
              data-target="#service"
              className="collapsed"
            >
              <a href="#">
                <i className="fa fa-globe fa-lg"></i> Categorie{" "}
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="service">
              <li>
                <a href="/admin/AddCategorie">Add Categorie</a>
              </li>
              <li>
                <a href="/admin/listCategorie">List Categorie </a>
              </li>
            </ul>

            <li data-toggle="collapse" data-target="#new" className="collapsed">
              <a href="#">
                <i className="fa fa-car fa-lg"></i> Order
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="new">
              <li>
                <a href="/admin/Order">List Order</a>
              </li>
              <li>
                <a href="/admin/Details">Details Order</a>
              </li>
            </ul>

            <li>
              <a href="#">
                <i className="fa fa-user fa-lg"></i> Customer
              </a>
              <li>
                <a href="/admin/Customer">List Customer</a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
