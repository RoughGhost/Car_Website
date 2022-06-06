import React from "react";
import "./Footer.css";
import {
  RiSteeringLine,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer section">
      <div className="shape shape__big"></div>
      <div className="shape shape__small"></div>

      <div className="footer__containter container grid">
        <div className="footer__content">
          <a href="#blank" className="footer__logo">
            <RiSteeringLine fontSize={25} fontWeight={500} /> Elecar
          </a>
          <p className="footer__description">
            We Offer the best electric cars of <br /> the most recognized brand{" "}
            <br /> in the world.
          </p>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Company</h3>
          <ul className="footer__links">
            <li>
              <a href="#blank" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#blank" className="footer__link">
                Cars
              </a>
            </li>
            <li>
              <a href="#blank" className="footer__link">
                History
              </a>
            </li>
            <li>
              <a href="#blank" className="footer__link">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title"> Information</h3>
          <ul className="footer__links">
            <li>
              <a href="#blank" className="footer__link">
                Request a Quote
              </a>
            </li>
            <li>
              <a href="#blank" className="footer__link">
                Find a Dealer
              </a>
            </li>
            <li>
              <a href="#blank" className="footer__link">
                Contact us
              </a>
            </li>
            <li>
              <a href="#blank" className="footer__link">
                Sevices
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Follow US</h3>
          <ul className="footer__social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <RiFacebookBoxFill />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <RiTwitterFill />
            </a>
          </ul>
        </div>
      </div>

      <span className="footer__copy">
        &#169; Strivesteve All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
