import React from "react";

import "./AboutUs.css";
import AboutUsImage from "../../Assets/AboutUsImage.png";

const AboutUs = ({id}) => {
  return (
    <div className="AboutUsContainer" id={id}>
      <img alt="" src={AboutUsImage} className="AboutUsImage" />
      <div className="AboutUsInnerContainer">
        <h3 className="AboutUsTitle">AboutUs</h3>
        <p className="AboutUsTextOne">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          aliquam veniam repudiandae veritatis fuga, esse cupiditate recusandae
          aut nemo minima sint placeat ipsam optio perferendis, sequi explicabo
          tenetur officiis amet.
        </p>
        <p className="AboutUsTextTwo">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus possimus, quasi fugiat velit aut laborum earum et
          ducimus nemo, totam accusantium, nobis alias deserunt? Perferendis,
          aperiam suscipit. Numquam, a assumenda. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Necessitatibus possimus, quasi fugiat
          velit aut laborum earum et ducimus nemo, totam accusantium, nobis
          alias deserunt? Perferendis, aperiam suscipit. Numquam, a assumenda.
        </p>
        <button className="AboutUsButton">Read More</button>
      </div>
    </div>
  );
};

export default AboutUs;
