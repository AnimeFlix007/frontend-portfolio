import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";

import Logo from "../images/oregairu3.jfif";
import "../scss/Header.scss";

const Header = () => {
  const [nav, setNav] = useState(false);
  const showHandler = () => {
    setNav((prev) => !prev);
  };
  const activeClass = nav ? "app__navbar-links active" : "app__navbar-links"
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className={activeClass}>
        {["home", "about", "Projects", "skills", "Experience", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="hamburger" onClick={showHandler}>
          {nav && <HiBars3BottomRight />}
          {!nav && <FaTimes />}
        </div>
    </nav>
  );
};

export default Header;
