import React from "react";
import triangle_bg from "../images/triangle_three_img.svg";
import circle_img from "../images/circle_img.svg";
import square_img from "../images/square_img.svg";
function HowItWorks() {
  return (
    <div className="container mt-5 py-5">
      <div
        style={{ fontSize: "46px", fontWeight: "500", lineHeight: "52px" }}
        className="mt-5"
      >
        How it works?
      </div>

      <div
        className="row mt-5"
        style={{
          fontSize: "174px",
          fontWeight: "700",
          lineHeight: "180px",
          color: "#59590F",
        }}
      >
        <div
          className="col-md-4"
          align="center"
          //   style={{
          //     height: "269px",
          //     width: "269px",
          //     background: "#FFFFDE",
          //     borderRadius: "50%",
          //   }}
          //   className="d-flex align-items-center justify-content-center"
          //   align="center"
        >
          <img src={circle_img} alt="circle_img" />
          <div
            className="mt-5"
            style={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "28px",
              color: "#1F1F1F",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore
          </div>
        </div>
        <div
          className="col-md-4"
          align="center"
          //   style={{
          //     height: "269px",
          //     width: "269px",
          //     background: "#FFFFDE",
          //   }}
          //   className="d-flex align-items-center justify-content-center"
          //   align="center"
        >
          <img src={square_img} alt="square_img"></img>
          <div
            className="mt-5"
            style={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "28px",
              color: "#1F1F1F",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore
          </div>
        </div>
        <div
          className="col-md-4"
          align="center"
          //   style={{
          //     height: "269px",
          //     width: "269px",
          //     background: "#FFFFDE",
          //   }}
          //   className="d-flex align-items-center justify-content-center"
          //   align="center"
        >
          <img src={triangle_bg} alt="square_img"></img>
          <div
            className="mt-5"
            style={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "28px",
              color: "#1F1F1F",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore
          </div>
        </div>

        {/* <div className="col-md-4 " align="center">
          <div
            align="center"
            className="d-flex align-items-center justify-content-center  pe-5 pb-5"
            style={{
              width: "359px",
              height: "330px",
              backgroundImage: `url(${triangle_bg})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            3
          </div>
          <div
            className=""
            style={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "28px",
              color: "#1F1F1F",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default HowItWorks;
