import React from "react";
import {Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo" style={{marginLeft:20}}>
          Movie DB
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Popular movies</Link>
          </li>
          <li>
            <Link to="/">TV shows</Link>
          </li>
          <li>
            <Link to="/">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
