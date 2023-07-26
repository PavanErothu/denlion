import React, { useState } from "react";
import signIn from "./images/sign_in.png";
import Header from "./Header";

function Form() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "",
      password: "",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username !== uname.value);

    // Compare user info
    if (userData) {
      if (userData.password === pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="row">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            {/* <label>Username </label> */}
            <input
              type="text"
              name="uname"
              placeholder="Email"
              className="w-75 my-2 p-2"
              required
            />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            {/* <label>Password </label> */}
            <input
              type="password"
              name="pass"
              placeholder="Password"
              className="w-75 my-2 p-2"
              required
            />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <button
              type="submit"
              className="w-75 my-2 btn"
              style={{ background: "#FFAA3B" }}
            >
              <b>Sign In</b>
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <div className="login-form container mt-5">
        <div className="row">
          <div className="col-md-8">
            <img
              src={signIn}
              alt="sign In"
              className="sign_in_img login-form input-container"
              width="100%"
            />
          </div>

          <div align="center" className="login-form col-md-4 app">
            <div>
              <div className="login-form" style={{ fontFamily: "montserrat" }}>
                {" "}
                <h2>
                  <b>Sign In</b>
                </h2>
              </div>
              {isSubmitted ? <a href={false}> </a> : renderForm}
            </div>
            <div>
              Don't have an Account?
              <a
                href="/signUp"
                style={{ color: "#FFAA3B" }}
                className="ps-2 text-decoration-none"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
