import React from "react";
import year_img from "../images/year_img.svg";
import about_img from "../images/about_img.svg";
function About() {
  return (
    <div className="container">
      <div className="mt-5 pt-5">
        <div className="row" style={{ background: "#E5FDD1" }}>
          <div className="col-md-6">
            <div
              className="m-5"
              style={{
                fontSize: "46px",
                fontWeight: "500",
                lineHeight: "52px",
              }}
            >
              About
            </div>
            <div
              className="m-5"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "28px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
            <div className="ml-5 d-flex align-items-baseline mb-0">
              <img src={year_img} alt="year_img" />
              <span
                className="ps-4  "
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#569324",
                  lineHeight: "16px",
                }}
              >
                EMERGED IN
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <img src={about_img} alt="about_img" width="100%" className="p-3"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
