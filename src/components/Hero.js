import React from "react";
import "./styles/Hero.css";
import hero_img from "./images/guides_img.png";
import playstore from "./images/playstore.png";
import appstore from "./images/appstore.png";
import { Helmet } from "react-helmet";
const Hero = () => {
  return (
    <>
      <Helmet>
        <title>
          GUIDE JUNIORS Mentor App | Become Or Find A Mentor With No.1 Education
          Mentoring App
        </title>
        <meta
          name="description"
          content="GUIDE JUNIORS Mentor App For Schools And Colleges Provides a Quality 1
           On 1 Mentor Connection. And Buy, Sell Or Donate Old  Books To The Needy Students With Our Best Mentor Connect App.
          "
        />
      </Helmet>
      <div className="hero" id="home">
        <div className="container">
          <div className=" row  ">
            <div className="content col-lg-6">
              <p></p>
              <p></p>
              <h1>
                Get Connected
                <br />
                With Your <span style={{ color: " #FFAA3B" }}> Seniors</span>
              </h1>
              <span className="hero_content">
                A one stop solution that will help you find your senior, to
                guide you in the correct way and make your learning journey
                easier.
              </span>
              <div className="mt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.guidejunior"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={playstore}
                    alt=""
                    className=""
                    style={{ width: "30%" }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/guidejuniors/id1660564846"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={appstore}
                    alt=""
                    className=""
                    style={{ width: "30%" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={hero_img}
                alt=""
                className=" my-5"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
