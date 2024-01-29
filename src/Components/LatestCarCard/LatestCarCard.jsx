import React from "react";

import "./LatestCarCard.css";

const LatestCarCard = ({ImgSrc}) => {
  return (
    <div className="LatestCarCardContainer">
      <img alt="" src={ImgSrc} className="LatestCarCardImage" />
      <div className="LatestCarCardTextContainer">
        <h2 className="LatestCarCardTitle">Luxgrious Auto Mobile</h2>
        <p className="LatestCarCardText">
          Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
          vestibulum diam.
        </p>
      </div>
      <div className="LatestCarCardBottomContainer">
        <h2 className="LatestCarCardBottomText">Hot Sells</h2>
        <div className="LatestCarCardBottomLine"/>
      </div>
    </div>
  );
};

export default LatestCarCard;
