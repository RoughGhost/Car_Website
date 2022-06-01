import React from "react";
import "./Button.css";

const Button = ({ title, style }) => {
  return (
    <a href="#button" className="button" style={style}>
      {title}
    </a>
  );
};

export default Button;
