import "./styles/Resetpwd.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import qs from "qs";
import { useNavigate, useSearchParams } from "react-router-dom";


const eye = <FontAwesomeIcon icon={faEye} />;

export function Reset_banner(props) {
  let [searchParams] = useSearchParams();
  const code = searchParams.get("oobCode");
  const email = searchParams.get("email");
  if (!code || !email) {
    // strValue was empty string, false, 0, null, undefined, ...
    props.onSubmit({XSCStatus:-1,XSCMessage:"Invalid Request"})
}
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");

    const reqData = {
      mod: "AA",
      actionType: "reset-password",
      subAction: JSON.stringify({
        NEW_PASSWORD: password,
        CODE: code,
      }),
    };

    axios({
      method: "post",
      url: "https://api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "application/x-www-form-urlencoded" },
    }).then((res) => {
      console.log(res, "ges");
      let userData = res.data;

      props.onSubmit(userData);
      // {
      //   userData.XSCStatus == "0"
      //     ? navigate("/password-success")
      //     : navigate("/password-expired");
      // }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="card_padding">
        <div className="card  mx-3 bg-text" style={{ width: "350px" }}>
          <div className="card-body">
            <div className="text">
              <h5>Change Password</h5>
              <h5> {"for " + email}</h5>
            </div>
            <div className="input">
              <input
                placeholder="Password"
                type={passwordShown ? "text" : "password"}
                style={{ width: "100%", paddingTop: "4px" }}
                onChange={handlePassword}
                required
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
            </div>
            <br />

            <a>
              {" "}
              <button className="reset_button">RESET PASSWORD</button>
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
