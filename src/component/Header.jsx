import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const header = () => {
  return (
    <header className="main_header">
      <div className="container main_header_container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join the Legends of the fitness World</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            dolore, obcaecati excepturi, at vero laudantium quod est magnam
            expedita beatae aliquid.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main_header-right">
          <div className="main-header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
