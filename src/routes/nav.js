import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="images/anusha-logo.png" alt="Logo" style={{ width: "200pt", marginLeft: "20px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto align-items-md-center">
              <li className="nav-item">
                <Link to={`/`} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/education`} className="nav-link">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/projects`} className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/experience`} className="nav-link">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/contact`} className="nav-link">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
