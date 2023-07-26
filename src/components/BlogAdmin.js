import "./styles/BlogAdmin.css";
import Blog_admin_side_img from "./images/blog_admin_side_img.png";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Gj_Side_Logo from "./images/gj_side_logo.png";
function BlogAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "blogadmin@gj.com" && password === "Admin@GJ#123") {
      navigate("/add-blog");
    }
  };
  //  else{
  //   setEmail("");
  //   setPassword("");
  //   setEmailInvalid("Invalid Email");
  //   setpasswordInvalid("Invalid Password")
  //  }

  //   }
  // {email===""?setEmailInvalid(""):setEmailInvalid("")}
  // {password===""?setpasswordInvalid(""):setpasswordInvalid("")}
  const BlogWidth = window.innerWidth;
  return (
    <div className=" container-fluid ">
      <div className="sign_in_page">
        <div
          className={
            BlogWidth < 767
              ? "row px-2 px-md-0 py-1"
              : BlogWidth < 991
              ? "row py-5 px-2 "
              : "row signin_resolution  "
          }
        >
          <div className="signin_form  mt-lg-4  col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="d-flex   justify-content-between py-2 mobile_header">
              <div>
                {" "}
                <i
                  className="fa fa-long-arrow-left "
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <a href="/" className="text-decoration-none text-dark">
                  <span
                    className="ps-2 "
                    style={{ fontSize: "0.8rem", fontWeight: "600" }}
                  ></span>
                </a>
              </div>
              <div>
                <a href="/">
                  <img src={Gj_Side_Logo} width="30" alt="GJ_LOGO" />
                </a>
              </div>
            </div>

            <div className="home_navigation_signin ">
              <a href="/" className="text-decoration-none text-dark">
                <i
                  className="fa fa-long-arrow-left "
                  style={{ fontSize: "0.8rem" }}
                ></i>
                <span
                  className="ps-2 "
                  style={{ fontSize: "0.8rem", fontWeight: "600" }}
                >
                  Home
                </span>
              </a>
            </div>

            <div className=" px-md-5 signin_form  mobile_width_signin ">
              <p style={{ fontColor: "#515C5A" }}>
                <b>Sign-in</b>
              </p>
              <div
                style={{
                  fontWeight: "900",
                  fontSize: "2.3rem",
                  lineHeight: "56px",
                }}
              >
                <b>Welcome Back</b>
              </div>
              <div>
                <div
                  style={{
                    color: "#6C7674",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  Please enter your account details
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="py-1 mt-4" style={{ fontSize: "0.8rem" }}>
                    {" "}
                    <div className="mb-2">
                      <label>
                        <b>Email address</b>
                      </label>
                    </div>
                    <input
                      type="email"
                      className="resolution_width_signin"
                      maxlength={25}
                      style={{
                        height: "60px",
                        width: "400px",
                        backgroundColor: " #FAFAFA",
                        borderRadius: "8px",
                        border: " 1.2px solid #DFE1E1",
                        padding: "20px",
                      }}
                      placeholder="Your Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="py-1 mt-2" style={{ fontSize: "0.8rem" }}>
                    {" "}
                    <div>
                      {" "}
                      <label>
                        <b>Password</b>
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        type="password"
                        className="resolution_width_signin"
                        maxLength={25}
                        style={{
                          height: "60px",
                          width: "400px",
                          backgroundColor: " #FAFAFA",
                          borderRadius: "8px",
                          border: " 1.2px solid #DFE1E1",
                          padding: "20px",
                        }}
                        placeholder="Your Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* <i onClick={togglePasswordVisiblity}>{eye}</i> */}{" "}
                    </div>
                  </div>

                  <div
                    className="py-1 mt-2 resolution_width_signin"
                    style={{ fontSize: "0.8rem", width: "400px" }}
                  >
                    <button
                      type="submit"
                      className="btn resolution_width_signin"
                      style={{
                        height: "60px",
                        width: "400px",
                        background: "#FFAA3B",
                        fontSize: "0.8rem",
                        borderRadius: "8px",
                      }}
                      placeholder="SUBMIT"
                      // onClick={() => logInWithEmailandPassword(email, password)}
                    >
                      <b>Sign in</b>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 display_hidden_medium_signin ">
            <div className="float-end" style={{ margin: "-12px" }}>
              <img
                src={Blog_admin_side_img}
                className="img-fluid "
                alt="blog_admin"
                style={{ height: "100vh" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogAdmin;
