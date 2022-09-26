import React from "react";
import pdf from "../../Assets/Resume of Shaminur.pdf";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="btn-div">
      <a href={pdf} download="Resume of Shaminur.pdf">
        <button className="button">Get Resume</button>
      </a>

      <button type="button " className="button button1">
        About me
      </button>
    </div>
  );
};

export default Buttons;
