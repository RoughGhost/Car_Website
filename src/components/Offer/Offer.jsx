import React from "react";
import "./Offer.css";
import Offer1 from "../../assets/offer-bg.png";
import Offer2 from "../../assets/offer.png";
import Button from "../Button/Button";

const Offer = () => {
  return (
    <div className="offer section">
      <div className="offer__container container grid">
        <img src={Offer1} alt="" className="offer__bg" />
        <div className="offer__data">
          <h2 className="section__title offer__title">
            Do you want to Recieve <br /> Special Offers
          </h2>
          <p className="offer__description">
            Be the first to recieve al the information about our products and
            new cars by email by subcribing to our mailing list.
          </p>
          <Button title="Subcribe Now" />
        </div>
        <img src={Offer2} alt="" className="offer__img" />
      </div>
    </div>
  );
};

export default Offer;
