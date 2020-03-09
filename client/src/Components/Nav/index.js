import React from "react";
import "./index.css";

function NavBar() {
  return (
    <nav className="nav-bg">
      <div className="nav-div overlay">
        <ul className=" nav-ul nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link navLink" href="/home">
              Home
              <i className="fas fa-home mx-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navLink" href="/favorites">
              Favorites
              <i className="fas fa-heart mx-2"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
