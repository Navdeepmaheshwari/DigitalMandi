import React from 'react'
import './CNav.css';
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
        {/* <Link className="navbar-brand" to="/">D-Mandi</Link> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex gap-5">
          <Link className="nav-item nav-link text-white active" to="/">Home</Link>
            <Link className="nav-item nav-link text-white" to="/about">About Us</Link>
           
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Signup</Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/fsignup">Farmer</Link></li>
            <li><Link className="dropdown-item" to="/msignup">Merchant</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login</Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to="/flogin">Farmer</Link></li>
            <li><Link className="dropdown-item" to="/mlogin">Merchant</Link></li>
          
          </ul>
        </li>
          </div>
        </div>
        </div>
        
      </nav>

    );
}


