import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css'

interface NavbarProps {
  name: string | undefined,
  signOut?: () => void; 
}

export const Navbar = (props: NavbarProps) => {
  const {name, signOut} = props
  return (
    <header className="bg-primary-main px-2 py-1 h5">
      <nav className="navbar flex justify-between ">
        <span className="navbar__brand">Bullsfirst</span>
        <span className="navbar__info h6 flex items-center">{ name } <span className='px-1'><FaSignOutAlt onClick={signOut}/></span></span>
      </nav>
    </header>
  );
};