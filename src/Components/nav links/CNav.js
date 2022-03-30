import React from "react";
import "./CNav.css";
import { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
export const Navbar = () => {
  let history=useHistory();
const handleLogout =()=>{
  localStorage.removeItem("token");
  history.push("/login")
}

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
            {!localStorage.getItem("token") ?<form className="my-2">
           <Link className="btn btn-success mx-1" to="/login" role="button">Login</Link>
           <Link className="btn btn-success mx-3" to="/signup" role="button">Signup</Link>
            </form> :<button onClick={handleLogout} className="btn btn-success"> Logout</button>}
           
          </div> 
        </div>
      </div>
    </nav>
  );
};
