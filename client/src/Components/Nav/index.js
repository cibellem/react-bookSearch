import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NavBar() {
  return (
    <nav className="nav-bar  nav justify-content-end ">
      <div className="wrapper"></div>
      <Link className="nav-link navLink " to="/">
        Home <i className="fas fa-home my-3 mx-2"></i>
      </Link>
      <Link className="nav-link navLink  " to="favorites">
        Favorites <i className="fas fa-heart my-3 mx-2"></i>
      </Link>
    </nav>
  );
}

export default NavBar;
