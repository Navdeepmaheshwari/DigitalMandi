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
          <a className="nav-item nav-link active text-white" href="/">Home</a>
            <a className="nav-item nav-link text-white" href="/about">About Us</a>
            <a className="nav-item nav-link text-white" href="/login">Sign in</a>
            <a className="nav-item nav-link text-white" href="/signup">Sign up</a>
          </div>
        </div>
        </div>
        
      </nav>

    );
}


