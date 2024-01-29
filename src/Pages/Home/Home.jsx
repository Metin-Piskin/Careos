import React, { useEffect, useState } from "react";

import "./Home.css";
import Header from "../../Components/Header";
import HomeBanner from "../../Components/HomeBanner";
import AboutUs from "../../Components/AboutUs";
import Transition from "../../Components/Transition";
import LatestCarCard from "../../Components/LatestCarCard";
import ServicesOneComponent from "../../Components/ServicesOneComponent";
import ServicesTwoComponent from "../../Components/ServicesTwoComponent";
import Futer from "../../Components/Futer";

import LatestCarCardImgOne from "../../Assets/Rectangle10.png";
import LatestCarCardImgTwo from "../../Assets/TransitionBanner.png";
import LatestCarCardImgThree from "../../Assets/AboutUsImage.png";
import LatestCarCardImgFour from "../../Assets/Rectangle30.png";
import ServicesOneComponentImg from "../../Assets/Rectangle27.png";
import ServicesTwoComponentImg from "../../Assets/Rectangle28.png";
import ServicesThreeComponentImg from "../../Assets/Rectangle25.png";
import ServicesImgs from "../../Assets/Rectangle29.png";

const Home = () => {
  const [activeSection, setActiveSection] = useState("HomeBannerSection");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Bölüm başlangıç ve bitiş noktaları
    const HomeBannerSection = document.getElementById("HomeBannerSection");
    const AboutUsSection = document.getElementById("AboutUsSection");
    const CarsSection = document.getElementById("CarsSection");
    const ServicesSection = document.getElementById("ServicesSection");

    if (
      scrollPosition < AboutUsSection.offsetTop - 50 &&
      activeSection !== "HomeBannerSection"
    ) {
      setActiveSection("HomeBannerSection");
    } else if (
      scrollPosition >= AboutUsSection.offsetTop - 50 &&
      scrollPosition < CarsSection.offsetTop - 50 &&
      activeSection !== "AboutUsSection"
    ) {
      setActiveSection("AboutUsSection");
    } else if (
      scrollPosition >= CarsSection.offsetTop - 50 &&
      scrollPosition < ServicesSection.offsetTop - 50 &&
      activeSection !== "CarsSection"
    ) {
      setActiveSection("CarsSection");
    } else if (
      scrollPosition >= ServicesSection.offsetTop - 50 &&
      activeSection !== "ServicesSection"
    ) {
      setActiveSection("ServicesSection");
    }
  };

  const handleNavClick = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="HomeContainer">
      <Header
        ActiveSection={activeSection}
        HomeonClick={() => handleNavClick("HomeBannerSection")}
        AbutUsonClick={() => handleNavClick("AboutUsSection")}
        CarsonClick={() => handleNavClick("CarsSection")}
        ServicesonClick={() => handleNavClick("ServicesSection")}
      />
      <HomeBanner id={"HomeBannerSection"} />
      <AboutUs id={"AboutUsSection"} />
      <Transition />
      <div className="LatestCarsTextContainer" id={"CarsSection"}>
        <h1 className="LatestCarsTitle">our Latest cars</h1>
        <p className="LatestCarsText">
          Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
          vestibulum diam sit adipis cing elit adipis cing elit.
        </p>
      </div>
      <div className="LatestCarCardAllContainer">
        <LatestCarCard ImgSrc={LatestCarCardImgOne} />
        <LatestCarCard ImgSrc={LatestCarCardImgTwo} />
        <LatestCarCard ImgSrc={LatestCarCardImgThree} />
        <LatestCarCard ImgSrc={LatestCarCardImgFour} />
      </div>
      <div id={"ServicesSection"}>
        <div className="ServicesOneComponentAllContainer">
          <ServicesOneComponent ImgSrc={ServicesOneComponentImg} />
          <ServicesOneComponent ImgSrc={ServicesTwoComponentImg} />
        </div>
        <div className="ServicesTwoComponentAllContainer">
          <ServicesTwoComponent ImgSrc={ServicesThreeComponentImg} position={true}/>
          <ServicesTwoComponent ImgSrc={LatestCarCardImgTwo} position={false}/>
        </div>
        <div className="ServicesImgsContainer">
          <img src={ServicesImgs} alt="" className="ServicesImgsOne"/>
          <img src={LatestCarCardImgFour} alt="" className="ServicesImgsTwo"/>
        </div>
      </div>
      <Futer/>
    </div>
  );
};

export default Home;
