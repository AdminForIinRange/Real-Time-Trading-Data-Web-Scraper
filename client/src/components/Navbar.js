import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css"; // Import the CSS file

export default function Navbar() { 
  return (
    <nav className="nav-bar" style={{zIndex:" 2"}}>
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
         
        
         
        </NavLink>

        <div className="navbar--navLinks">
        <NavLink to="/" className="btn">
          Landing
          </NavLink>
          <NavLink to="/Auth" className="btn">
          Auth Key
          </NavLink>
          <NavLink to={localStorage.getItem("userAuthVlaid") === "true" ? "/home" : "/Auth"}  className="btn">
          Home
          </NavLink>
          <NavLink to={localStorage.getItem("userAuthVlaid") === "true" ? "/Systems" : "/Auth" } className="btn">
          Systems
          </NavLink>
        
        
        </div>
      </div>
    </nav>
  );
}
