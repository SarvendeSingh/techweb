import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ handleTogg }) => {
    const handleNav = () => {
      const navbarContent = document.getElementById('navbarSupportedContent');
      navbarContent.classList.remove('show'); 
      handleTogg(); 
    };

  return (
    <div className='collapse navbar-collapse menuIcon' id="navbarSupportedContent">
        <ul className='navbar-nav ms-auto mb-lg-0 navbar-list'>
            <li>
                <Link to={'/'} onClick={handleNav}>Home</Link>
            </li>
            <li>
                <Link to={'/about'} onClick={handleNav}>About us</Link>
            </li>
            <li>
                <Link to={'/services'} onClick={handleNav}>Services</Link>
            </li>
            <li>
                <Link to={'/contact'} onClick={handleNav}>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar