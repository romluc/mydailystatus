import React from 'react';
import Navbar from './Navbar';

// import { Container } from './styles';

const Header = () => {
  return (
    <div className='bg-gray-200'>
      <h1>
        <img
          className='h-24 py-4 mx-auto'
          src='/logo.png'
          alt='Logo my daily status'
          height='60'
        />
      </h1>
      <Navbar />
    </div>
  );
};

export default Header;
