import React from 'react';
import logo from '../Assets/logo.svg';
import '../Styles/header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="lafrique" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      {/* <button className="try-btn">Join Class</button> */}
      <button className="login-btn">Login</button>
    </header>
  );
}

export default Header;
