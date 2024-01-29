import React from "react";

import "./ServicesTwoComponent.css";

const ServicesTwoComponent = ({ ImgSrc, position }) => {
  return (
    <>
      {position ? (
        <div className="ServicesTwoComponentContainer">
          <img src={ImgSrc} alt="" className="ServicesTwoComponentImg" />
          <div className="ServicesTwoComponentInnerContainer">
            <h2 className="ServicesTwoComponentTitle">
              Sed ut perspiciatis unde omnis
            </h2>
            <p className="ServicesTwoComponentOneText">
              Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut
              fugit, sed quia consequuntur
            </p>
            <p className="ServicesTwoComponentTwoText">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem.
            </p>
          </div>
        </div>
      ) : (
        <div className="ServicesTwoComponentContainer">
          <div className="ServicesTwoComponentInnerContainer">
            <h2 className="ServicesTwoComponentTitle">
              Sed ut perspiciatis unde omnis
            </h2>
            <p className="ServicesTwoComponentOneText">
              Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut
              fugit, sed quia consequuntur
            </p>
            <p className="ServicesTwoComponentTwoText">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem.
            </p>
          </div>
          <img src={ImgSrc} alt="" className="ServicesTwoComponentImg" />
        </div>
      )}
    </>
  );
};

export default ServicesTwoComponent;
