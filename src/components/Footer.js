import React from "react";
import "./styles/Footer.css";
import web_logo from "./images/website_logo.png";

function Footer(){
  
  return (
    <div className="footer" style={{ background: "#1E2020" }}>
      <div className="container">
        
      <a
            href="/"
            className="logo  text-decoration-none text-align-center text-white"
          >
            <img src={web_logo} alt="logo" style={{ width: "35px" }} />
            <span className="ps-2"style={{ fontSize: "1.2rem", fontFamily:"Montserrat" }}>
              <b>GUIDE JUNIORS</b>
            </span>
          </a>

        <div className="row ">
        
          <div className="col-lg-9">
            
            <p style={{ fontSize: "1.2rem" }}>A platform to connect students within the same campus for personal & professional excellence</p>
            <div className="copyrights">
          <p style={{ color: "#585858", fontSize:"1rem" }}>
            {" "}
            Copyright © 2018-2022 All rights reserved
          </p>
        </div>
          </div>
          
          <div className="follow_links col-lg-3" style={{ fontSize: "1rem" }}>
            <h5>Follow us on</h5>
            <a href="https://twitter.com/GuideJuniors" target="_blank" className="fa fa-twitter fa_icons"></a>
            <a href="https://www.facebook.com/profile.php?id=100085914326758" target="_blank" className="fa fa-facebook fa_icons"></a>
            <a href="https://www.instagram.com/guide_juniors/" target="_blank" className="fa fa-instagram fa_icons"></a>
            <a href="https://www.youtube.com/channel/UCphdy1k2u9jWpVLRzNxaYfQ/featured" target="_blank" className="fa fa-youtube-play fa_icons"></a>
            <a href="https://www.linkedin.com/company/guide-juniors/" target="_blank" className="fa fa-linkedin fa_icons"></a>
            <div className="copyrights">
         
           
           <div style={{ color: "#585858" }}>
            <a href="/terms"  className="text-decoration-none terms" > Terms Of Use</a>
            <a href="/privacy-policy" className="ps-5 text-decoration-none terms " >Privacy Policy</a>
           </div>
        
        </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Footer;
