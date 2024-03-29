import React from 'react';
import Header from './header';

import Sidebar from '../../../components/sidebar/sidebar';

// Layout Admin 1 last one

const AdminLayout = ({ children }) => {
    return (
      <div>
        <Header />
        <div style={{ display: 'flex'}}>

          <Sidebar />
          <div  className="child-contain"style={{ flex: 1 , position: 'center' }}>
            {children}
          </div>
        </div>
        
      </div>
    );
  };
  
  export default AdminLayout;