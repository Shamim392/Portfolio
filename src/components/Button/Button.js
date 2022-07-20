import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <div className="btn-div">
      <button type="button" className="button">
        Get Resume
      </button>
      <button type="button " className="button button1">
        About me
      </button>
    </div>
  );
};

export default Button;
