
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUsers,faIdCard ,faClipboardList , faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "./sideBar.css"

const Sidebar = () => {
  
    const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <div className='sideBar'>
      <ul>
        <li onClick={() => handleMenuClick('myProfile')}>
        <Link to="/admin/adminProfil">
        <FontAwesomeIcon icon={faIdCard} />
          My Profile
          </Link>
        </li>
        <li onClick={() => handleMenuClick('product')}>
        <FontAwesomeIcon icon={faShoppingCart} />
          Product
          {activeMenu === 'product' && (
            <ul>
             <li><Link to="/admin/addProduct">Add Product</Link></li>
          <li><Link to="/admin/listProduct">List Products</Link></li>
    

            </ul>
          )}
          {activeMenu !== 'product' && (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </li>
        <li onClick={() => handleMenuClick('order')}>
        <FontAwesomeIcon icon={faClipboardList} />
          Order
          {activeMenu === 'order' && (
            <ul>
             <li><Link to="/admin/Order">List Orders</Link></li>
            </ul>
          )}
             {activeMenu !== 'order' && (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </li>
        <li onClick={() => handleMenuClick('customer')}>
          <Link to="/admin/Customer">
            <FontAwesomeIcon icon={faUsers} /> Customer
          </Link>
        </li>
      </ul>
    </div>
  );
};


export default Sidebar;
