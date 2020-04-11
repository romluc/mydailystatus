import React from 'react';
import Header from '../components/Header';

const Index = () => {
  return (
    <div>
      <h1>home</h1>
      <a
        href='/api/login'
        className='transition duration-300 ease-in-out bg-teal-700 text-white font-bold py-2 px-4 rounded block shadow-xl hover:shadow w-1/4 text-center mx-auto text-white'
      >
        Start here
      </a>
    </div>
  );
};

export default Index;
