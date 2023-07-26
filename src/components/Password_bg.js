import { useState } from "react";
import Expired from "./Expired";
import { Reset_banner } from "./Resetpwd";
import Success_page from "./Success_page";

function Password_bg() {
  const [result, setResult] = useState({XSCStatus:1});

  const handleResponse = (data) => {
    setResult(data);
    console.log("Rest", data);
  };

  return (
    <div className="bg-image">
      {result.XSCStatus == 1 ? (
        <Reset_banner onSubmit={handleResponse} />
      ) : result.XSCStatus == 0 ? (
        <Success_page />
      ) : (
        <Expired message = {result.XSCMessage}/>
      )}
    </div>
  );
}
export default Password_bg;
