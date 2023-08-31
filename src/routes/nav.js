import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src="images/anusha-logo.png" alt="Logo" style={{ width: "200pt", marginLeft: "20px" }} />
            </a>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={`/}`} className="nav-link">
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
      </nav>
    </div>
  );
};

export default Nav;
