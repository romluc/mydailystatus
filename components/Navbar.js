import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
  return (
    <Link className='container' href={href}>
      <a className='p-2 transition duration-200 ease-in-out  hover:text-teal-800'>
        {children}
      </a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className='bg-gray-500 py-4 text-center'>
      <NavLink href='/sobre'>Sobre</NavLink>
      <NavLink href='/cadastro'>Cadastro</NavLink>
      <NavLink href='/entrar'>Entrar</NavLink>
    </div>
  );
};

export default NavBar;
