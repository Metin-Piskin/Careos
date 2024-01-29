import React from "react";

import "./HomeBanner.css";
import HomeBannerImage from "../../Assets/HomeBanner.png";

const HomeBanner = ({ id }) => {
  return (
    <div id={id}>
      <img alt="" src={HomeBannerImage} className="HomeBannerImage" />
      <div className="HomeBannerTitleContainer">
        <span className="HomeBannerTitleOneText">
          Purchase your <br />
        </span>
        <span className="HomeBannerTitleTwoText">Perfect</span>
        <span className="HomeBannerTitleThreeText"> car</span>
      </div>

      <div className="HomeBannerOneText">
        Over 1000+ New Cars Available Here
      </div>
      <div className="HomeBannerTwoText">
        Lorem ipsum dolor sit amet, consectetur adipiscin elitVit ae
        pellentesque sed etiam tortor.
      </div>

      <div className="HomeBannerButtonsContainer">
        <button className="HomeBannerOneButton">Explore More</button>
        <button className="HomeBannerTwoButton">See Cars</button>
      </div>
    </div>
  );
};

export default HomeBanner;
