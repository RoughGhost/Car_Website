import React, { useEffect } from "react";
import "./Features.css";
import FirstFeature from "../../assets/features.png";
import Map from "../../assets/map.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="features section" data-aos="fade-up">
      <h2 className="section__title">More Features</h2>
      <div className="features__container container grid">
        <div className="features__group">
          <img src={FirstFeature} alt="" className="features__img" />
          <div className="features__card features__card-1">
            <h3 className="features__card-title">800v</h3>
            <p className="features__car-description">
              Turbo <br />
              Charging
            </p>
          </div>
          <div className="features__card features__card-2">
            <h3 className="features__card-title">350</h3>
            <p className="features__car-description">
              Km <br /> Range
            </p>
          </div>
          <div className="features__card features__card-3">
            <h3 className="features__card-title">480</h3>
            <p className="features__car-description">
              Km <br /> Speed
            </p>
          </div>
        </div>
      </div>
      <img src={Map} alt="map" className="features__map" />
    </div>
  );
};

export default Features;
