import React from "react";
import "./hero-section/CHero.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer class="bg-dark text-secondary text-center text-lg-start mt-4">
        {/* <!-- Copyright --> */}
        <div class="text-center p-3 ">
          © 2020 Copyright :
          <Link class="text-dark text-white" to="/">
            {" "}
            DigitalMandi.com
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};
