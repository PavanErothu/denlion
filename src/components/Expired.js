import "./styles/Expired.css";
import React from "react";
import cross_img from "./images/cross_img.png";

function Expired(message) {
  console.log(message, "props");
  return (
    <div className="card_padding">
      <div className="card mx-3 bg-text" style={{ width: "350px" }}>
        <div className="card-body">
          <div className="expire_text ">
            <div className="success_img">
              <img src={cross_img} style={{ height: "100%" }} alt="tick"></img>
            </div>
            <br />
            {message.message === "Invalid Request" ? (
              <>
                <p>Invalid Request</p>
                <p>Data provided is not correct</p>{" "}
              </>
            ) : (
              <>
                <p>Try resetting your password again</p>
                <p>
                  Your request to reset your password has expired or the link
                  has already been used.
                </p>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expired;
