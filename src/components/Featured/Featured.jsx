import React, { useEffect, useState } from "react";
import "./Featured.css";
import Logo3 from "../../assets/logo3.png";
import Logo2 from "../../assets/logo2.png";
import Logo1 from "../../assets/logo1.png";
import Featured1 from "../../assets/featured1.png";
import Featured2 from "../../assets/featured2.png";
import Featured3 from "../../assets/featured3.png";
import Featured4 from "../../assets/featured4.png";
import Featured5 from "../../assets/featured5.png";
import { RiShoppingBag2Fill } from "react-icons/ri";
import Button from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useStateContext } from "../../context/ContextProvider";

const Featured = () => {
  // eslint-disable-next-line
  const [activeMenu, setActiveMenu] = useState(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="featured section" id="featured" data-aos="fade-in">
      <h2 className="section__title">Featured Luxury Cars</h2>
      <div className="featured__container container">
        <ul className="featured__filters">
          <li>
            <button
              className={activeMenu ? "featured__item" : "active-featured"}
            >
              <span>All</span>
            </button>
          </li>
          <li>
            <button className="featured__item">
              <img src={Logo3} alt="" />
            </button>
          </li>
          <li>
            <button className="featured__item">
              <img src={Logo2} alt="" />
            </button>
          </li>
          <li>
            <button className="featured__item">
              <img src={Logo1} alt="" />
            </button>
          </li>
        </ul>
        <div className="featured__content grid">
          <article
            className="featured__card"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="shape shape__smaller"></div>
            <h1 className="featured__title">Telsa </h1>
            <h3 className="featured__subtitle">Model X</h3>
            <img src={Featured1} alt="" />
            <h3 className="featured__price">$92,000</h3>
            <Button
              style={{
                border: `none`,
                outline: `none`,
                position: `absolute`,
                right: 0,
                bottom: 0,
                borderRadiusRight: `8px`,
                borderRadiusTop: 0,
                borderRadiusLeft: `8px`,
                borderRadiusBottom: 0,
                paddingTop: `5px`,
                paddingBottom: `5px`,
                paddingLeft: `8px`,
                paddingRight: `8px`,
                cursor: `pointer`,
              }}
              title={<RiShoppingBag2Fill fontSize={25} />}
            />
          </article>
          <article
            className="featured__card"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="shape shape__smaller"></div>
            <h1 className="featured__title">Telsa </h1>
            <h3 className="featured__subtitle">Model 3</h3>
            <img src={Featured2} alt="" />
            <h3 className="featured__price">$45,900</h3>
            <Button
              style={{
                border: `none`,
                outline: `none`,
                position: `absolute`,
                right: 0,
                bottom: 0,
                borderRadiusRight: `8px`,
                borderRadiusTop: 0,
                borderRadiusLeft: `8px`,
                borderRadiusBottom: 0,
                paddingTop: `5px`,
                paddingBottom: `5px`,
                paddingLeft: `8px`,
                paddingRight: `8px`,
                cursor: `pointer`,
              }}
              title={<RiShoppingBag2Fill fontSize={25} />}
            />
          </article>
          <article
            className="featured__card"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="shape shape__smaller"></div>
            <h1 className="featured__title">Audi</h1>
            <h3 className="featured__subtitle">E-tron</h3>
            <img src={Featured3} alt="" />
            <h3 className="featured__price">$175,000</h3>
            <Button
              style={{
                border: `none`,
                outline: `none`,
                position: `absolute`,
                right: 0,
                bottom: 0,
                borderRadiusRight: `8px`,
                borderRadiusTop: 0,
                borderRadiusLeft: `8px`,
                borderRadiusBottom: 0,
                paddingTop: `5px`,
                paddingBottom: `5px`,
                paddingLeft: `8px`,
                paddingRight: `8px`,
                cursor: `pointer`,
              }}
              title={<RiShoppingBag2Fill fontSize={25} />}
            />
          </article>
          <article
            className="featured__card"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="shape shape__smaller"></div>
            <h1 className="featured__title">Porshe</h1>
            <h3 className="featured__subtitle">Boxster 987</h3>
            <img src={Featured4} alt="" />
            <h3 className="featured__price">$126,000</h3>
            <Button
              style={{
                border: `none`,
                outline: `none`,
                position: `absolute`,
                right: 0,
                bottom: 0,
                borderRadiusRight: `8px`,
                borderRadiusTop: 0,
                borderRadiusLeft: `8px`,
                borderRadiusBottom: 0,
                paddingTop: `5px`,
                paddingBottom: `5px`,
                paddingLeft: `8px`,
                paddingRight: `8px`,
                cursor: `pointer`,
              }}
              title={<RiShoppingBag2Fill fontSize={25} />}
            />
          </article>
          <article
            className="featured__card"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="shape shape__smaller"></div>
            <h1 className="featured__title">Porshe</h1>
            <h3 className="featured__subtitle">Panamera</h3>
            <img src={Featured5} alt="" />
            <h3 className="featured__price">$125,000</h3>
            <Button
              style={{
                border: `none`,
                outline: `none`,
                position: `absolute`,
                right: 0,
                bottom: 0,
                borderRadiusRight: `8px`,
                borderRadiusTop: 0,
                borderRadiusLeft: `8px`,
                borderRadiusBottom: 0,
                paddingTop: `5px`,
                paddingBottom: `5px`,
                paddingLeft: `8px`,
                paddingRight: `8px`,
                cursor: `pointer`,
              }}
              title={<RiShoppingBag2Fill fontSize={25} />}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Featured;
