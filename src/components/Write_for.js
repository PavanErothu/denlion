import React from "react";
import Footer from "./Footer";
import form_img from "./images/form_img.png";
import write_for from "./images/write_for.png";
import { useState } from "react";
import axios from "axios";
import Helmet from "react-helmet";
import Navbar from "./Navbar";
import Header from "./Header";

const WriteFor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");
  const [file, setFile] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  function handleFile(e) {
    setFile(e.target.files[0]);
  }
  const handleDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");

    const formData = new FormData();
    formData.append("FILE", file);
    formData.append("mod", "Notification");
    formData.append("actionType", "upload-document");
    formData.append(
      "subAction",
      JSON.stringify({
        AUTHOR_NAME: name,
        EMAIL: email,
        ADDITIONAL_DETAILS: detail,
      })
    );

    setDetail("");

    axios({
      method: "post",
      url: "https://api.guidejuniors.com/",

      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <div className="write" style={{ width: "100%" }}>
        <div>
          <Header />
        </div>
        <div>
          {" "}
          <Helmet>
            <title>Pitch a Guest Post at Guide Juniors</title>
            <meta
              name="description"
              content="Write For Us - Welcome To The Free Guest Posting Site. Contribute to us today by sending your creative blogs and articles."
            />
          </Helmet>
        </div>
        <div className="container" id="founder">
          <h2 className=" mt-5 py-5">
            Write-For-<span style={{ color: "#FBA93E" }}>Us!</span>
          </h2>
          <div className="row">
            <div className=" col-md-6">
              <h2
                className="mt-3"
                style={{ fontSize: "3rem", fontWeight: "500" }}
              >
                <b>
                  Are you a crazy
                  <br /> blogger or writer?
                </b>
              </h2>
            </div>
            <div className="col-md-6">
              <p className="mt-3" style={{ color: "#675C5C" }}>
                Welcome authors, bloggers, students, teachers, and anybody else
                who enjoys writing about educational subjects. You have a
                platform to demonstrate your writing skills and subject
                expertise as well as to share your opinions with the public in
                the "Write for Us" section.
              </p>
            </div>
          </div>
          <div className="">
            <img src={write_for} alt="" style={{ width: "100%" }}></img>
          </div>
          <div className="mt-5 row">
            <div className="col-md-6" style={{ color: "#675C5C" }}>
              <h3 style={{ color: " #151212" }}>Guidelines to keep in mind:</h3>
              <p>
                Our blog strives to provide our visitors with high-quality
                content, thus we adhere to some rules. Before you write for us,
                make sure to read the following!
              </p>
              <h3 style={{ color: " #151212" }}>
                Exchanging blog with follow links
              </h3>
              <p>
                For a blog exchange, the minimum DA (Domain Authority) for your
                website should be atleast 10.
              </p>

              <h3 style={{ color: " #151212" }}>Choosing the right topic</h3>
              <p>
                Education is a vast topic and covers infinite subjects and
                areas. All education related article, news etc. are welcomed.
              </p>
              <h3 style={{ color: " #151212" }}>The Guest Post Guidelines:</h3>
              <div>
                <p>
                  <b style={{ color: " #151212" }}>1. Accurate and factual: </b>
                  Only contribute stuff that is factual and well-researched.
                </p>
                <p>
                  <b style={{ color: " #151212" }}>2. Drafting:</b> Make sure
                  the writing is clear, concise, actionable, and error-free.
                  Check your writing for grammatical, spelling, and stylistic
                  errors.
                </p>
                <p>
                  <b style={{ color: " #151212" }}>
                    3. Educational and entertaining:
                  </b>{" "}
                  Make reading more exciting by providing more attention-grabing
                  content to keep readers' attention. The output tone should be
                  clever, humorous, or in some other way captivating enough to
                  keep readers interested.
                </p>
                <p>
                  <b style={{ color: " #151212" }}>4. Plagirism:</b> Copied
                  Content is not permitted in our guest posts. Make sure you
                  wrote it and that it hasn't been published anyplace.
                </p>
                <p>
                  <b style={{ color: " #151212" }}>5. Images:</b> Include
                  numerous samples and visuals that succinctly and effectively
                  illustrate your point. Make your writing engaging.
                </p>
                <p>
                  <b style={{ color: " #151212" }}>6. Content length: </b>
                  Depending on the kind of material you want to create, the
                  ideal length for your article ranges from min 350 to 2500
                  words.
                </p>
                <p>
                  <b style={{ color: " #151212" }}>7. Links: </b>A Do follow
                  link to your blog or website and obe link in the author bio
                  are both acceptable links. No more links please unless
                  approved on request by our editors. We detest annoying our
                  readers.
                </p>
              </div>
              <h3 style={{ color: " #151212" }}>
                How to submit your blog/article?
              </h3>
              <p>
                Before you send an article to us, it is better to get the topic
                approved by us. Send your blog in Doc format to
                <a className="text-decoration-none text-secondary" href="mailto:+bhavik@guidejuniors.com"> <b>  bhavik@guidejuniors.com</b></a>
              </p>
            </div>

            <div
              className="col-md-6"
              align="center"
              style={{ backgroundColor: "#FCFCFC" }}
            >
              <img
                src={form_img}
                alt=""
                className="write_img mt-5 "
                style={{ width: "80%" }}
              />

              <div>
                <div className="mt-5 float-start ml-5 ">
                  <h4>
                    <>Drop your blog here!</>
                  </h4>
                </div>
                <div style={{ fontSize: "1rem" }}>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        style={{ border: "1px solid #707070" }}
                        type="text"
                        name="uname"
                        placeholder="Author Name"
                        value={name}
                        onChange={handleName}
                        required
                        className="w-75 my-2 p-2 mt-4"
                      />
                    </div>

                    <input
                      style={{ border: "1px solid #707070" }}
                      type="email"
                      name="uname"
                      placeholder="Email Id"
                      className="w-75 my-2 p-2"
                      value={email}
                      onChange={handleEmail}
                      required
                    />
                    <input
                      type="text"
                      name="uname"
                      placeholder="Additional Detail"
                      className="my-2 p-2"
                      value={detail}
                      onChange={handleDetail}
                      required
                      style={{
                        height: "8%",
                        width: "75%",
                        border: "1px solid #707070",
                      }}
                    />
                    <input
                      type="file"
                      id="example"
                      onChange={handleFile}
                      className=" my-2 p-2"
                      style={{
                        height: "8%",
                        width: "75%",
                        border: "1px solid #707070",
                      }}
                      required
                      accept=".pdf,.docx"
                    />
                    <div className="">
                      <button
                        type="submit"
                        className="btn"
                        style={{ width: "75%", background: "#FFAA3B" }}
                        placeholder="SUBMIT"
                      >
                        <b>Submit</b>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default WriteFor;
