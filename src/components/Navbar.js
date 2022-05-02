import React from "react";
import PropTypes from "prop-types";

export const Navbar = ({ title, toggleTheme, theme }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-${
        theme === "light" ? "primary" : "dark"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className={`form-check-input ${
              theme === "light" ? "dark" : "light"
            } ${theme === "light" ? "bg-white" : "bg-dark"}`}
            type="checkbox"
            role="switch"
            id="theme"
            onClick={toggleTheme}
          />
          <label className={`form-check-label text-white`} htmlFor="theme">
            {theme === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "TextUtils",
};
