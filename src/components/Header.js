import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import catchWindowSize from "../utils/functions/windowResizeFunction";
import searchIcon from "../svgs/search-icon.svg";

function Header({ authors }) {
  const [windowSize, setWindowsize] = useState(window.outerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    catchWindowSize(setWindowsize);
  }, [windowSize]);

  return (
    <header
      className={
        windowSize <= `768`
          ? "header-container--mobile header-container"
          : "header-container--desktop header-container"
      }
    >
      <div className={`login-container ${windowSize <= `768` ? "hide" : null}`}>
        <Link to="/login">Login</Link>
      </div>
      <div className="logo-container">
        <Link to="/">Logo</Link>
      </div>
      <div className="right-side--container">
        <div className="searchbar-container">
          <h6 className={`search-text ${windowSize <= `768` ? "hide" : null}`}>
            Search
          </h6>
          <img className="search-icon" src={searchIcon}></img>
        </div>

        <button
          className={`hamburger hamburger--collapse-r 
                ${isOpen ? "is-active" : null} 
                ${windowSize <= `768` ? null : "hide"}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <nav
        className={
          windowSize <= `768`
            ? "nav-container--mobile"
            : "nav-container--desktop"
        }
      >
        <Link className={windowSize <= `768` ? "hide" : null} to="/">
          Home
        </Link>
        <Link className={windowSize <= `768` ? "hide" : null} to="/books">
          Books
        </Link>
        <Link className={windowSize <= `768` ? "hide" : null} to="/authors">
          Authors
        </Link>
      </nav>
    </header>
  );
}
export default Header;
