import React from "react";
import "./ScrollToTop.css";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTop = () => {
  return (
    <a href="#home" className="scrollup" id="scroll-up">
      <RiArrowUpLine />
    </a>
  );
};

export default ScrollToTop;
