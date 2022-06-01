import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiSteeringLine } from "react-icons/ri";
import { BsCardHeading } from "react-icons/bs";
import "./Navbar.css";
import logo from "../../assets/logo1.png";

const Menu = () => (
  <>
    <p className="nav__list">
      <a href="#home" className="nav__link">
        Home
      </a>
    </p>
    <p>
      <a href="#about" className="nav__link">
        About
      </a>
    </p>
    <p>
      <a href="#popular" className="nav__link">
        Popular
      </a>
    </p>
    <p>
      <a href="#featured" className="nav__link">
        Featured
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <RiSteeringLine />
          Electar
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in </p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in </p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
