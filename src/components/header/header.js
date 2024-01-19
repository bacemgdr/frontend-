import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

import './header.css';

function Header() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user-related items from local storage on logout
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');

    // Navigate to the login page after logout
    navigate('/home');
  };

  return (




    <header>
    <div className="logo">
      <img src="https://bazaar.ui-lib.com/assets/images/logo2.svg"></img>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/user/order">MyOrder</Link>
        </li>
        <li>
          <Link to="/user/profile">My Profile</Link>
        </li>
        <li>
          {user ? (
            <>
              <p>Welcome, {user}!</p>
              <div  onClick={handleLogout}>
                <Link to ="/home"><FontAwesomeIcon icon={faRightFromBracket} /></Link></div>
            </>
          ) : (
            <Link to="/login"> <FontAwesomeIcon icon={faUser} /></Link>
          )}
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
  
