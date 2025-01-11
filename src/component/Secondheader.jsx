import React from "react";

const Secondheader = ({ image, title, children }) => {
  return (
    <header className="Other-head ">
      <div className="header-container ">
        <div className="header-container-bg">
          <img src={image} alt="Header Background image" />
        </div>
        <div className="header-content container">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default Secondheader;
