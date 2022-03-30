import React from "react";
import "./CNav.css";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        {/* <Link className="navbar-brand" to="/">D-Mandi</Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex flex-row-reverse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav d-flex gap-5">
            <Link
              className={`nav-item nav-link text-white  ${
                location.pathname === "/" ? "act" : " "
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-item nav-link text-white  ${
                location.pathname === "/about" ? "act" : " "
              }`}
              to="/about"
            >
              About Us
            </Link>
            <Link
              className={`nav-item nav-link text-white  ${
                location.pathname === "/signup" ? "act" : " "
              }`}
              to="/signup"
            >
              Signup
            </Link>
            <Link
              className={`nav-item nav-link text-white  ${
                location.pathname === "/login" ? "act" : " "
              }`}
              to="/login"
            >
              Login
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
};
