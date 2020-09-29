import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="nav__logo"
        alt="netflix logo"
      />
      <img
        src="https://commons.wikimedia.org/wiki/File:Netflix_2015_N_logo.svg"
        className="nav__avatar"
        alt="netflix logo"
      />
    </div>
  );
}

export default Nav;
