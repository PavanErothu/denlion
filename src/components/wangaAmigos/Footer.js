import React from "react";
import wa_logo from "../images/gj_footer_logo.svg";
function Footer() {
  return (
    <div className="py-5">

    <div
      className="container mt-5 "
      style={{ background: "#353535", height: "124px", borderRadius:"84px" }}
    >
      <div className="d-flex justify-content-between ps-5">
        <div className=" text-white py-3 mt-3">
          <img src={wa_logo} alt="wa_logo"></img>
          <span
            style={{ fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}
            className="ps-3"
          >
            Guide Juniors
          </span>
        </div>
        <div className="mt-3 py-3 d-flex flex-row align-items-center">
          <div
            style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px", color:"white" }}
          >
            Privacy Policy
          </div>

          <div className="ps-5 pe-5"
            style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px", color:"white" }}
          >
            Terms Of use
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Footer;
