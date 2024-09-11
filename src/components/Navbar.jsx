import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setDarkMode, darkMode }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
      <div className="container-fluid position-relative">
        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler fs-6 order-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          {isCollapsed ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <span className="close-icon">✖</span>
          )}
        </button>

        {/* Middle: Website Name */}
        <div className="d-flex justify-content-center align-items-center position-absolute start-50 top-50 translate-middle">
          <Link className="navbar-brand text-white fs-2 fw-bold" to="/">
            TALVA
          </Link>
        </div>

        {/* Right side: Navigation Links */}
        <div
          className={`collapse navbar-collapse ${
            isCollapsed ? "" : "show"
          } order-2`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={`${styles.color} nav-link fs-5`}
                to="/developerDashboard"
              >
                DeveloperDashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.color} nav-link fs-5`} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.color} nav-link fs-5`} to="/faq">
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.color} nav-link fs-5`} to="/terms">
                Terms
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setDarkMode((prevState) => !prevState)}
                className={`${styles.button} px-2`}
              >
                <FontAwesomeIcon
                  icon={darkMode ? faMoon : faSun}
                  className=""
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
