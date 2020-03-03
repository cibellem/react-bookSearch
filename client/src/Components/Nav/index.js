import React from "react";
import "./index.css";

function NavBar() {
  return (
    <nav className="nav-bg">
      <div className="nav-div">
        <ul className=" nav justify-content-end">
          <li className="nav-item">
            <a class="nav-link" href="#">
              Login
              <i class="fas fa-sign-in-alt"></i>
            </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="/favorites">
              Favorites
              <i class="fas fa-heart"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
