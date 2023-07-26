import "./styles/Success_page.css";
import React from "react";
import succes_tick from "./images/success_tick.png";

function Success_page() {
  return (
    
      <div className="card_padding">
        <div className="card mx-3 bg-text" style={{ width: "350px" }}>
          <div className="card-body">
            <div className="img_text">
              <div className="success_img">
                <img
                  src={succes_tick}           
                  style={{ height: "100%" }}
                  alt="tick"
                ></img>
              </div><br />
              <h5>Password Changed Successfully!</h5>
              <p>for You..!</p>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Success_page;
