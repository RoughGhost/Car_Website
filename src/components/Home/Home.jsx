import React, { useEffect } from "react";
import {
  RiFlashlightFill,
  RiTempColdLine,
  RiDashboard2Fill,
  RiFlashlightLine,
} from "react-icons/ri";
import HomeImg from "../../assets/home.png";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="home section" id="home" data-aos="fade-in">
      <div className="shape shape__big"></div>
      <div className="shape shape__small"></div>
      <div className="home__container container grid">
        <div className="home__data ">
          <h1 className="home__title"> Choose the Best Car</h1>
          <h2 className="home__subtitle">Porshe Mission E</h2>
          <h3 className="home__elec">
            <RiFlashlightFill color="blue" />
            Electric Car
          </h3>
        </div>
        <img src={HomeImg} alt="home" className="home__img" />
        <div className="home__car">
          <div className="home__car-data">
            <div className="home__car-icon">
              <RiTempColdLine />
            </div>
            <h2 className="home__car-number">24</h2>
            <h3 className="home__car-name">TEMPERATURE</h3>
          </div>
          <div className="home__car-data">
            <div className="home__car-icon">
              <RiDashboard2Fill />
            </div>
            <h2 className="home__car-number">872</h2>
            <h3 className="home__car-name">MILEAGE</h3>
          </div>
          <div className="home__car-data">
            <div className="home__car-icon">
              <RiFlashlightLine />
            </div>
            <h2 className="home__car-number">94%</h2>
            <h3 className="home__car-name">BATTERY</h3>
          </div>
        </div>
        <a href="#blank" className="home__button">
          START
        </a>
      </div>
    </section>
  );
};

export default Home;
