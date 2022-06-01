import React from "react";
import "./Popular.css";
import Popular1 from "../../assets/popular1.png";
import Popular2 from "../../assets/popular2.png";
import Popular3 from "../../assets/popular3.png";
import Popular4 from "../../assets/popular4.png";
import Popular5 from "../../assets/popular5.png";
import {
  RiDashboard3Line,
  RiFundsBoxLine,
  RiChargingPile2Line,
  RiShoppingBag2Fill,
} from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Button from "../Button/Button";

const Popular = () => {
  return (
    <div className="popular section" id="popular">
      <h2 className="section__title">
        Choose Your Electric Car <br /> of the Porshe Brand
      </h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 48,
          },
        }}
      >
        <div className="popular__container container">
          <div>
            <SwiperSlide>
              <article className="popular__card">
                <div className="shape shape__smaller"></div>
                <h1 className="popular__title">Porshe</h1>
                <h3 className="popular__subtitle">Turbo s.</h3>
                <img src={Popular1} alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <RiDashboard3Line fontSize={25} /> 3.7s
                  </div>
                  <div className="popular__data-group">
                    <RiFundsBoxLine fontSize={25} /> 370km/h
                  </div>
                  <div className="popular__data-group">
                    <RiChargingPile2Line fontSize={25} /> Electric
                  </div>
                </div>
                <h3 className="popular__price">$140,980</h3>
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
            </SwiperSlide>

            <SwiperSlide>
              <article className="popular__card">
                <div className="shape shape__smaller"></div>
                <h1 className="popular__title">Porshe</h1>
                <h3 className="popular__subtitle">Taycan</h3>
                <img src={Popular2} alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <RiDashboard3Line fontSize={25} /> 3.7s
                  </div>
                  <div className="popular__data-group">
                    <RiFundsBoxLine fontSize={25} /> 370km/h
                  </div>
                  <div className="popular__data-group">
                    <RiChargingPile2Line fontSize={25} /> Electric
                  </div>
                </div>
                <h3 className="popular__price">$160,800</h3>
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
            </SwiperSlide>

            <SwiperSlide>
              <article className="popular__card">
                <div className="shape shape__smaller"></div>
                <h1 className="popular__title">Porshe</h1>
                <h3 className="popular__subtitle">Turbo S Cross</h3>
                <img src={Popular3} alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <RiDashboard3Line fontSize={25} /> 3.7s
                  </div>
                  <div className="popular__data-group">
                    <RiFundsBoxLine fontSize={25} /> 370km/h
                  </div>
                  <div className="popular__data-group">
                    <RiChargingPile2Line fontSize={25} /> Electric
                  </div>
                </div>
                <h3 className="popular__price">$200,000</h3>
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
            </SwiperSlide>

            <SwiperSlide>
              <article className="popular__card">
                <div className="shape shape__smaller"></div>
                <h1 className="popular__title">Porshe </h1>
                <h3 className="popular__subtitle">Boxster 718</h3>
                <img src={Popular4} alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <RiDashboard3Line fontSize={25} /> 3.7s
                  </div>
                  <div className="popular__data-group">
                    <RiFundsBoxLine fontSize={25} /> 370km/h
                  </div>
                  <div className="popular__data-group">
                    <RiChargingPile2Line fontSize={25} /> Electric
                  </div>
                </div>
                <h3 className="popular__price">$190,000</h3>
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
            </SwiperSlide>

            <SwiperSlide>
              <article className="popular__card">
                <div className="shape shape__smaller"></div>
                <h1 className="popular__title">Porshe</h1>
                <h3 className="popular__subtitle">Cayman</h3>
                <img src={Popular5} alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <RiDashboard3Line fontSize={25} /> 3.7s
                  </div>
                  <div className="popular__data-group">
                    <RiFundsBoxLine fontSize={25} /> 370km/h
                  </div>
                  <div className="popular__data-group">
                    <RiChargingPile2Line fontSize={25} /> Electric
                  </div>
                </div>
                <h3 className="popular__price">$230,000</h3>
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
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Popular;
