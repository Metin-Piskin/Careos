import React from "react";

import "./Header.css";
import Logo from "../../Assets/Logo.png";

const Header = ({
  ActiveSection,
  HomeonClick,
  AbutUsonClick,
  CarsonClick,
  ServicesonClick,
}) => {
  return (
    <div className="HeaderContainer">
      <img src={Logo} alt="Logo" className="HeaderLogo" />
      <div className="HeaderMenuAllButtonContainer">
        <div className="HeaderMenuButtonContainer">
          <button
            className={
              ActiveSection === "HomeBannerSection"
                ? "HeaderMenuButtonsPress"
                : "HeaderMenuButtons"
            }
            onClick={HomeonClick}
          >
            Home
          </button>
          <button
            className={
              ActiveSection === "AboutUsSection"
                ? "HeaderMenuButtonsPress"
                : "HeaderMenuButtons"
            }
            onClick={AbutUsonClick}
          >
            Abut Us
          </button>
          <button
            className={
              ActiveSection === "CarsSection"
                ? "HeaderMenuButtonsPress"
                : "HeaderMenuButtons"
            }
            onClick={CarsonClick}
          >
            Cars
          </button>
          <button
            className={
              ActiveSection === "ServicesSection"
                ? "HeaderMenuButtonsPress"
                : "HeaderMenuButtons"
            }
            onClick={ServicesonClick}
          >
            Services
          </button>
        </div>
        <button className="HeaderButton">Oder Now</button>
      </div>
    </div>
  );
};

export default Header;
