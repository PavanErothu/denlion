import React from "react";
import Header from "./Header";
import page_not_found from "./images/page_not_found.png";
import "./styles/Page_not_found.css";

function PagenotFound() {
  return (
    <div>
      <Header />
      <div className="mt-5 page_not_found">
        <div>
          <img
            src={page_not_found}
            alt="page_found"
            height={150}
            width={400}
          ></img>
        </div>
        <div className="notfound_text">
          <h1>404</h1>
          <h3
            className="page_text "
            style={{
              color: "black",
              fontWeight: "800",
              fontFamily: "Montserrat",
            }}
          >
            <b>PAGE NOT FOUND</b>
          </h3>
          <div className="looking_for">
            {" "}
            This page that your looking for was moved, removed, renamed, or
            might never existed
          </div>
          <a href="/" className="text-decoration-none text-black">
            <button className="mt-3 btn home_btn">
              <b>Go to Home</b>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default PagenotFound;
