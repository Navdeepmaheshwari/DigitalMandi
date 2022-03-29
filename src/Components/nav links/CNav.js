import React from 'react'
import './CNav.css';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex gap-5">
            <a class="nav-item font-weight-bold text-white nav-link active" href="#">Home</a>
            <a class="nav-item text-white nav-link" href="#">About Us</a>
            <a class="nav-item text-white nav-link" href="#">Sign in</a>
            <a class="nav-item text-white nav-link" href="#">Sign up</a>
          </div>
        </div>
        </div>
        
      </nav>

    );
}


