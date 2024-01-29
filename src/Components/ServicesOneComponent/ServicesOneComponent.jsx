import React from "react";
import "./ServicesOneComponent.css";

const ServicesOneComponent = ({ ImgSrc }) => {
  return (
    <div className="ServicesOneComponentContainer">
      <img src={ImgSrc} alt="" className="ServicesOneComponentImg" />
      <h2 className="ServicesOneComponentTitle">Sed ut perspiciatis</h2>
      <p className="ServicesOneComponentText">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia conseq uuntur magni dolores eos qui ratione voluptatem
        se.
      </p>
      <button className="ServicesOneComponentButton">Learn more</button>
    </div>
  );
};

export default ServicesOneComponent;
