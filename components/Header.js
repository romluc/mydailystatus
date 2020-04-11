import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className='bg-gray-200'>
      <h1>
        <Link href='/'>
          <img
            className='h-24 py-4 mx-auto'
            src='/logo.png'
            alt='Logo my daily status'
            height='60'
          />
        </Link>
      </h1>
      <NavBar />
    </div>
  );
};

export default Header;
