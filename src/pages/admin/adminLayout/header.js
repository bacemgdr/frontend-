import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
// Page HEader

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
    navigate('/login');
  };

  return (
    <div className="admin-header">
    
      {user ? (
        // If user is logged in, display user's name and logout button
        <div className='admin-container'>
          <div className='admin1'>
          <p>Welcome, {user}!</p>
          <img src='https://bootdey.com/img/Content/avatar/avatar7.png' style={{ width: '30px', height: '40px',  }}></img>
         </div>
          <div  onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} /></div>
        </div>
      ) : (
        // If user is not logged in, display connect button
        <Link to="/login">Connect</Link>
      )}
    </div>
  );
}

export default Header;
