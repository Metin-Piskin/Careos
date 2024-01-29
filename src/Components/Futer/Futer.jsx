import React from "react";

import "./Futer.css";
import Logo from "../../Assets/LogoWhite.png";
const Futer = () => {
  return (
    <div className="FuterAllContainer">
      <div className="FuterInnerOneContainer">
        <img src={Logo} alt="" className="FuterLogoImg" />
        <div className="FuterTextContainer">
          <div className="FuterListTitle">
            Mobile app
            <div className="FuterListText">
              Features
              <br />
              Live share
              <br />
              Video record
            </div>
          </div>
          <div className="FuterListTitle">
            Community
            <div className="FuterListText">
              Featured artists
              <br />
              The Portal
              <br />
              Live events
            </div>
          </div>
          <div className="FuterListTitle">
            Company
            <div className="FuterListText">
              About us
              <br />
              Contact us
              <br />
              History
            </div>
          </div>
        </div>
        <div className="FuterButtonContainer">
          <button className="FuterRegisterButton">Register</button>
          <button className="FuterLoginButton">Log in</button>
        </div>
      </div>

      <div className="FuterLine" />

      <div className="FuterInnerTwoContainer">
        <p className="FuterOneText">© Photo, Inc. 2019. We love our users!</p>
        <div className="FuterIconContainer">
          <p className="FuterTwoText">Follow us:</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <circle cx="23" cy="23" r="23" fill="white" />
            <path
              d="M23 0C10.2987 0 0 10.2987 0 23C0 35.7013 10.2987 46 23 46C35.7013 46 46 35.7013 46 23C46 10.2987 35.7013 0 23 0ZM34.0533 17.3373C34.0688 17.5786 34.0687 17.8301 34.0687 18.0766C34.0687 25.6132 28.329 34.2946 17.8404 34.2946C14.606 34.2946 11.6078 33.3551 9.08192 31.7379C9.54397 31.7893 9.98549 31.8098 10.4578 31.8098C13.1275 31.8098 15.5815 30.9063 17.5375 29.3763C15.0321 29.325 12.9272 27.6821 12.2085 25.4232C13.0864 25.5516 13.877 25.5516 14.7806 25.3205C13.4906 25.0585 12.3311 24.3578 11.4991 23.3377C10.6671 22.3176 10.2139 21.0409 10.2165 19.7246V19.6527C10.9712 20.0788 11.8594 20.3406 12.7886 20.3766C12.0075 19.856 11.3668 19.1506 10.9235 18.3231C10.4802 17.4957 10.248 16.5716 10.2473 15.6328C10.2473 14.5701 10.5246 13.5998 11.0225 12.7578C12.4544 14.5205 14.2412 15.9621 16.2667 16.989C18.2922 18.0159 20.5111 18.6051 22.7792 18.7183C21.9732 14.8422 24.8688 11.7054 28.3496 11.7054C29.9924 11.7054 31.471 12.3933 32.5132 13.5022C33.8018 13.2609 35.0339 12.7783 36.1326 12.1315C35.7065 13.4509 34.8132 14.565 33.6272 15.2683C34.7772 15.1451 35.8862 14.8268 36.9129 14.3801C36.1377 15.5199 35.1674 16.5313 34.0533 17.3373Z"
              fill="#FF7A00"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <circle cx="23" cy="23" r="23" fill="white" />
            <path
              d="M23 0C10.2973 0 0 10.2973 0 23C0 35.7027 10.2973 46 23 46C35.7027 46 46 35.7027 46 23C46 10.2973 35.7027 0 23 0ZM17.3698 32.533H12.7123V17.5447H17.3698V32.533ZM15.0123 15.7047C13.5412 15.7047 12.5901 14.6625 12.5901 13.3735C12.5901 12.0582 13.57 11.0472 15.0722 11.0472C16.5744 11.0472 17.4944 12.0582 17.5231 13.3735C17.5231 14.6625 16.5744 15.7047 15.0123 15.7047ZM34.3802 32.533H29.7227V24.2267C29.7227 22.2932 29.0471 20.9803 27.3628 20.9803C26.0763 20.9803 25.312 21.8692 24.9742 22.7245C24.8496 23.0288 24.8184 23.46 24.8184 23.8889V32.5306H20.1585V22.3244C20.1585 20.4532 20.0986 18.8888 20.0364 17.5423H24.0829L24.2961 19.6243H24.3896C25.0029 18.6468 26.5051 17.2045 29.0183 17.2045C32.0826 17.2045 34.3802 19.2577 34.3802 23.6708V32.533Z"
              fill="#FF7A00"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <circle cx="23" cy="23" r="23" fill="white" />
            <path
              d="M23 0C10.2973 0 0 10.2973 0 23C0 35.7027 10.2973 46 23 46C35.7027 46 46 35.7027 46 23C46 10.2973 35.7027 0 23 0ZM17.3698 32.533H12.7123V17.5447H17.3698V32.533ZM15.0123 15.7047C13.5412 15.7047 12.5901 14.6625 12.5901 13.3735C12.5901 12.0582 13.57 11.0472 15.0722 11.0472C16.5744 11.0472 17.4944 12.0582 17.5231 13.3735C17.5231 14.6625 16.5744 15.7047 15.0123 15.7047ZM34.3802 32.533H29.7227V24.2267C29.7227 22.2932 29.0471 20.9803 27.3628 20.9803C26.0763 20.9803 25.312 21.8692 24.9742 22.7245C24.8496 23.0288 24.8184 23.46 24.8184 23.8889V32.5306H20.1585V22.3244C20.1585 20.4532 20.0986 18.8888 20.0364 17.5423H24.0829L24.2961 19.6243H24.3896C25.0029 18.6468 26.5051 17.2045 29.0183 17.2045C32.0826 17.2045 34.3802 19.2577 34.3802 23.6708V32.533Z"
              fill="#FF7A00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Futer;
