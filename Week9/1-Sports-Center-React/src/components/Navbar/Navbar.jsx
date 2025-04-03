import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav
      id="navbarScroll"
      class="navbar navbar-expand-lg navbar-dark position-absolute w-100 p-3 z-1"
    >
      <div class="container w-75">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav gap-3">
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#classes">
                Classes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#trainers">
                Trainer
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-warning fw-bold" href="#join">
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
