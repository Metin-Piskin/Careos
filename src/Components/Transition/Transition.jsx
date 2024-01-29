import React from "react";

import "./Transition.css";
import TransitionBanner from "../../Assets/TransitionBanner.png";
const Transition = ({ id }) => {
  return (
    <div className="TransitionContainer" id={id}>
      <img alt="" src={TransitionBanner} className="TransitionImage" />
      <div className="TransitionTextContainer">
        <span className="TransitionTextOne">
          WE ARE PROVIDE PROFESSIONAL
          <br />
        </span>
        <span className="TransitionTextTwo">CAR SERVICES</span>
      </div>
    </div>
  );
};

export default Transition;
