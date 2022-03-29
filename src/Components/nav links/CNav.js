import React from 'react'
import './CNav.css';
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex gap-5">
          <Link className="nav-item nav-link text-white active" to="/">Home</Link>
            <Link className="nav-item nav-link text-white" to="/about">About Us</Link>
           
          <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle text-white"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Signup</Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="fsignup">Farmer</Link></li>
            <li><Link class="dropdown-item" to="msignup">Merchant</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login</Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link class="dropdown-item" to="flogin">Farmer</Link></li>
            <li><Link class="dropdown-item" to="mlogin">Merchant</Link></li>
          
          </ul>
        </li>
          </div>
        </div>
        </div>
        
      </nav>

    );
}


