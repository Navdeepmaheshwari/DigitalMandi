import React from 'react'
import './CNav.css';
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#">D-Mandi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home</a>
            <a className="nav-item nav-link" href="/about">About Us</a>
            <a className="nav-item nav-link" href="/login">Sign in</a>
            <a className="nav-item nav-link" href="/signup">Sign up</a>
          </div>
        </div>
        </div>
        
      </nav>

    );
}


