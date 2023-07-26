import React from "react";
import contact from "./images/contact.png";
import mail from "./images/mail.png";
import location from "./images/location.png";
import "./styles/Contact.css";
import { useState } from "react";
import axios from "axios";
import qs from "qs";
import toast, { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setName("");
    // setEmail("");
    // setPhone("");
    // setMessage("");

    const reqData = {
      mod: "Notification",
      actionType: "contact-guide-juniors",
      subAction: JSON.stringify({
        NAME: name,
        EMAIL: email,
        PHONE_NUMBER: phone,
        MESSAGE: message,
      }),
    };
    axios({
      method: "post",
      url: "https://api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "application/x-www-form-urlencoded" },
    })
      .then((response) => {
        console.log(response);
        if (response.data.XSCStatus === -1) {
          toast.warning("Invalid details", {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.success("Submitted Successfully", {
            autoClose: 1000,
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })

      .catch((error) => {
        console.log(error.data);
      });
  };
  return (
    <div className="mt-5 contact" id="contact">
      <div className="container">
        <ToastContainer />
        <h2>Contact</h2>
        <div className="row">
          <div className="col-md-7">
            <div>
              <img
                alt=""
                src={contact}
                style={{ height: "10%", width: "10%" }}
              ></img>
              <a
                href="tel:+7550290111"
                className="text-dark p-3 text-decoration-none "
                style={{ fontSize: "1rem" }}
              >
                7550290111
              </a>
            </div>
            <br />
            <div>
              <img
                alt="guide"
                src={mail}
                style={{ height: "10%", width: "10%" }}
              ></img>
              <a
                href="mailto:+Guidejuniorsorg@gmail.com"
                className="p-3 text-dark text-decoration-none"
                style={{ fontSize: "1rem" }}
              >
                bhavik@guidejuniors.com
              </a>
            </div>
            <br />
            <div className="d-flex text-align-center">
              <img
                alt=""
                src={location}
                style={{ height: "10%", width: "10%" }}
              ></img>
              <p className="w-75 p-md-3 p-2" style={{ fontSize: "1rem" }}>
                Prince Info Park, B-Block, 5th Floor, Ambattur, Chennai, <br />
                Tamil Nadu, 600058.
              </p>
            </div>
            <br />
          </div>
          <div align="center" className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div style={{ fontSize: "1rem" }}>
                <input
                  type="text"
                  style={{ height: "40px", width: "300px" }}
                  placeholder="Name"
                  value={name}
                  onChange={handleName}
                  required
                />
              </div>
              <br />
              <div style={{ fontSize: "1rem" }}>
                {" "}
                <input
                  type="email"
                  style={{ height: "40px", width: "300px" }}
                  placeholder="Email Id"
                  value={email}
                  onChange={handleEmail}
                  required
                />
              </div>
              <br />
              <div style={{ fontSize: "1rem" }}>
                <input
                  type="number"
                  style={{ height: "40px", width: "300px" }}
                  id="phone"
                  name="phone"
                  className="phone"
                  placeholder="Phone Number"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  value={phone}
                  onChange={handlePhone}
                  maxLength="16"
                  required
                />{" "}
              </div>
              <br />
              <div style={{ fontSize: "1rem" }}>
                <input
                  type="text"
                  style={{ height: "80px", width: "300px" }}
                  placeholder="Message"
                  value={message}
                  onChange={handleMessage}
                  required
                />
              </div>
              <br />
              <div className="">
                <button
                  type="submit"
                  className="btn"
                  style={{
                    height: "30%",
                    width: "300px",
                    background: "#FFAA3B",
                  }}
                  placeholder="SUBMIT"
                >
                  <b>SUBMIT</b>
                </button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
