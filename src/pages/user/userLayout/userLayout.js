// UserLayout.js
import React from 'react';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Hero from '../../../components/hero/hero';
import  { Toaster } from 'react-hot-toast';

const UserLayout = ({ children }) => {
  return (
    <div>
     
      <Header />
      <Toaster />
      <Hero></Hero>
      <main>
        {children}</main>

        
        <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default UserLayout;
