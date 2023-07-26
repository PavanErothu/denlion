import signinImg from "./images/sign_in.png";
import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function SignUp() {
  let context = useContext();
  context = process.env.REACT_APP_API_URL;

  // const[data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const GetStudentData = () =>{
  //   const url= "http://localhost:4000/app/signin/"
  //   const Credentials = {name, email, password}

  //   axios.post(url, Credentials)
  //   .then(response =>{
  //     const result = response.data;
  //     const{status, message, data} = result;
  //     if(status !== "SUCCESS"){
  //       alert(message, status)
  //     }
  //     else{
  //       setData(data)
  //        window.location.reload()
  //     }
  //   })
  //   .catch(err =>{
  //     console.log(err)
  //   })
  // }

  const handleSubmit = () => {
    const url = "http://localhost:4000/app/signin/";
    const Credentials = { username: name, email: email, password: password };
    axios
      .post(url, Credentials)
      .then((response) => {
        const result = response.data;
        const { status, message } = result;
        console.log("Test", result);
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // handleSubmit();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-8">
            <img src={signinImg} alt="" width="100%" />
          </div>
          <div align="center" className="col-md-4 ">
            <div className="my-lg-4 mt-2">
              <h4 className=" " style={{ fontFamily: "montserrat" }}>
                <b>Create an account</b>
              </h4>
            </div>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-75 my-2 p-2"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <select className="w-75 py-1 my-2 p-2">
                <option value="" selected>
                  Class
                </option>
                <option value="1">I</option>
                <option value="2">II</option>
                <option value="3">III</option>
                <option value="3">IV</option>
                <option value="3">V</option>
                <option value="3">VI</option>
                <option value="3">VII</option>
                <option value="3">VIII</option>
                <option value="3">IX</option>
                <option value="3">X</option>
                <option value="3">XI</option>
                <option value="3">XII</option>
              </select>
              <br />
              <input
                type="email"
                placeholder="Email"
                className="w-75 my-2 p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="w-75 my-2 p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button
                className="btn w-75 my-2 p-2"
                style={{ background: "#FFAA3B" }}
                onClick={() => handleSubmit()}
              >
                <b>Sign Up</b>
              </button>
            </form>
            <div>
              <p>
                Already have an account?
                <a
                  href="/SignIn"
                  style={{ color: "#FFAA3B" }}
                  className="ps-2 text-decoration-none"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
