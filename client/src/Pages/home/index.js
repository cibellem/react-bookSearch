import React from "react";
import "./index.css";

function Home() {
  return (
    <>
      <nav className="login-nav">
        <h2 className="nav-link logo"> Book Shelfie </h2>
        <h6 className="logo-description">
          Browse books and save your favotires one to read later
        </h6>
        <ul class="nav justify-content-end">
          <li className="nav-item">
            {" "}
            <a className="nav-link register-link" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link login-link" href="/login">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
