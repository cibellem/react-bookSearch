import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NavBar() {
  return (
    <nav className="nav-bar navbar container   ">
      <Link className=" navbar-brand " to="/">
        <img src={require("./images/logo.svg")} alt="" />
      </Link>
      <div className="nav navbar-right">
        <Link className="nav-link  navLink " to="/">
          Home
        </Link>
        <Link className="nav-link navLink  " to="favorites">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
