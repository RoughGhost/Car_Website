import React from "react";
import "./Logos.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";

const Logos = () => {
  return (
    <div className="logos section">
      <div className="logos__container container grid">
        <div className="logos__content">
          <img src={logo1} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo2} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo3} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo4} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo5} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo6} alt="" className="logos__img" />
        </div>
      </div>
    </div>
  );
};

export default Logos;
