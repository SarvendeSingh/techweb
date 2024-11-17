import React from 'react'
import { Link} from 'react-router-dom'
import Navbar from './Navbar';
import logo from "../assets/logo.png";

const Header = () => {

  const handleTogg = () => {
    const handletog = document.getElementsByClassName('navbar-toggler')[0];
    handletog.setAttribute('aria-expanded', false);
  };


  return (
    <header>
      <nav class="navbar navbar-expand-lg p-0">
      <div className='header container'>
        <Link to={"/"} className='navbar-brand'>
          <img src={logo} alt="" className='header-logo'/>
        </Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <Navbar handleTogg={handleTogg}/>
      </div>
      </nav>
    </header>
  )
}

export default Header