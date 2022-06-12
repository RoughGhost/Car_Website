import React, { useEffect } from "react";
import "./About.css";
import AboutImg from "../../assets/about.png";
import Button from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="about section" id="about" data-aos="flip-up">
      <div className="about__container grid">
        <div className="about__group">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__card">
            <h3 className="about__card-title">2,500+</h3>
            <p className="about__card-description">
              Supercharges placed along popular routes
            </p>
          </div>
        </div>
        <div className="about__data">
          <h2 className="section__title about__title">
            Machine with <br /> future technologies
          </h2>
          <p className="about__description">
            See the future with high-performance electric cars produced by
            renowed brands, they feature futuristic builds adn designs with new
            and innovative platforms that last a long time.{" "}
          </p>
          <Button title="Know More" />
        </div>
      </div>
    </div>
  );
};

export default About;
