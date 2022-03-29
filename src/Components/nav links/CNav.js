import React from 'react'
import './CNav.css';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a class="navbar-brand" href="#">D-Mandi</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">About Us</a>
            <a class="nav-item nav-link" href="#">Sign in</a>
            <a class="nav-item nav-link" href="#">Sign up</a>
          </div>
        </div>
        </div>
        
      </nav>

    );
}


