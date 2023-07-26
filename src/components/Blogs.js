import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./styles/Blogs.css";
import Footer from "./Footer";
import playstore from "./images/playstore.png";
import appstore from "./images/appstore.png";
import axios from "axios";
import qs from "qs";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
function Blogs() {
  const [blog, setBlog] = useState([]);
  const [recentBlog, setRecentBlog] = useState([]);
  const [blogSearch, setBlogSearch] = useState("");
  const [latestBlogImg, setLatestBlogImg] = useState("");
  const [blogImage, setBlogImage] = useState("");
  // console.log(blogImage);
  // console.log(recentBlog);

  //  const filter= localStorage.getItem("Filter")
  //  console.log(filter)
  const [filterCategory, setFilterCategory] = useState("EDUCATION");

  const handleBlogSearch = (e) => {
    setBlogSearch(e.target.value);
  };
  useEffect(() => {
    setBlogImage(latestBlogImg);
  }, [latestBlogImg]);
  useEffect(() => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-list",
      subAction: JSON.stringify({
        FILTERS: filterCategory,
      }),
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {
      let sampleData = res.data.XSCData;

      setRecentBlog(sampleData.BLOG_LIST);
      if (sampleData.BLOG_LIST && sampleData.BLOG_LIST.length > 0) {
        setLatestBlogImg(sampleData.BLOG_LIST[0]);
      }
    });
  }, [blogSearch, filterCategory]);

  useEffect(() => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-list",
      subAction: JSON.stringify({
        SEARCH_KEY: blogSearch,
      }),
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {
      let sampleData = res.data.XSCData;
      if (sampleData.BLOG_LIST !== null) {
        setBlog(sampleData.BLOG_LIST);
      } else {
        setBlog([]);
      }
    });
  }, [blogSearch]);
  const handleRecentBlog = (blogId) => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-details",
      subAction: JSON.stringify({
        SLUG: blogId,
      }),
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {
      let sampleData = res.data.XSCData;
      // console.log(sampleData);
      setBlogImage(sampleData);
    });
  };
  const navigate = useNavigate();
  const handleBlog = (blog) => {
    // console.log(blog)
    navigate(`/blog/${blog.SLUG}`, {
      state: { Slug: blog.SLUG, Id: blog.ID },
    });
  };

  const location = useLocation();
  console.log(location);
  // const categoryLocation=location.state;

  // return setFilterCategory(location.state.category);
  useEffect(() => {
    if (location.state !== null) {
      return setFilterCategory(location.state.category);
    }
  }, [location.state]);

  // else{
  // return setFilterCategory("EDUCATION")
  // }
  // else{
  // return setFilterCategory("HEALTH")
  // }
  // console.log(categoryLocation.isPresent);
  // console.log(filterCategory)
  // console.log(location.state);
  // if(filterCategory==="TECH"){
  //   if(recentBlog.length===0){
  //     setFilterCategory("EDUCATION");
  //   }
  //   else{
  //     setFilterCategory("TECH");
  //   }
  // }
  // else if (filterCategory==="EDUCATION"){
  //   if(recentBlog.length===0){
  //     setFilterCategory("HEALTH");
  //   }
  //   else{
  //     setFilterCategory("EDUCATION");
  //   }
  // }
  // else{
  //   if(recentBlog.length===0){
  //     setFilterCategory("TECH");
  //   }
  //   else{
  //     setFilterCategory("HEALTH");
  //   }
  // }

  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Header />

      <div className="mt-5 conatiner-fluid">
        <div
          className="mt-5 blog_heading_text"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          <h1
            className="text-white"
            style={{ fontSize: "3rem", fontWeight: "300" }}
          >
            News and Articles
          </h1>
          <h3
            className="text-white"
            style={{ fontSize: "2rem", fontWeight: "300" }}
          >
            From our Experts
          </h3>
        </div>
        <div className="container">
          <div className="mt-3 row p-0 m-0">
            <div className="col-md-8 p-0 ">
              <div
                className="  d-md-flex justify-content-between  px-md-2 p-md-0 p-1"
                style={{ background: "#DFDFDF", padding: "0%!imporant" }}
              >
                {/* <div className=" py-0">
                  <div className="   d-flex bg-danger justify-content-between py-0 my-0    "> */}
                <div
                  className=" py-2 px-2  "
                  style={
                    filterCategory === "TECH"
                      ? {
                          cursor: "pointer",
                          borderBottom: "2px solid #FFAA3B",
                          fontWeight: "900",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() => setFilterCategory("TECH")}
                >
                  <div className="py-1" style={{ fontSize: "1.2rem" }}>
                    Tech
                  </div>
                </div>
                <div
                  className=" py-2 px-2"
                  style={
                    filterCategory === "EDUCATION"
                      ? {
                          cursor: "pointer",
                          borderBottom: "2px solid #FFAA3B",
                          fontWeight: "900",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() => setFilterCategory("EDUCATION")}
                >
                  <div className="py-1" style={{ fontSize: "1.2rem" }}>
                    Education
                  </div>
                </div>
                <div
                  className="py-2 px-2"
                  style={
                    filterCategory === "HEALTH"
                      ? {
                          cursor: "pointer",
                          borderBottom: "2px solid #FFAA3B",
                          fontWeight: "900",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() => setFilterCategory("HEALTH")}
                >
                  <div className="py-1" style={{ fontSize: "1.2rem" }}>
                    Health
                  </div>
                </div>
                {/* </div>
                </div> */}
                <div
                  className="py-2"
                  style={{ position: "relative", display: "inlineBlock" }}
                >
                  <span
                    className=""
                    style={{
                      position: "absolute",
                      left: "3px",
                      marginTop: "8px",
                    }}
                  >
                    <i
                      className="fa fa-search"
                      style={{ color: "#A5A5A5" }}
                    ></i>
                  </span>
                  <input
                    className=" w-100 mx-md-0 rounded py-2 me-2"
                    placeholder="Search "
                    style={{
                      border: "none",
                      paddingLeft: "20px",
                    }}
                    onChange={(e) => handleBlogSearch(e)}
                  />
                </div>
              </div>{" "}
              <div className="row mt-3 p-0 m-0">
                <div
                  className="col-lg-7  p-0 "
                  onClick={() => handleBlog(blogImage)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="card p-0 m-0 w-100 h-100"
                    style={{ borderRadius: "0%", cursor: "pointer" }}
                  >
                    <img
                      src={
                        "https://dev-api.guidejuniors.com/images/" +
                        blogImage.IMAGE_URL
                      }
                      className="card-img img-fluid w-100"
                      alt="type_img"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        filter: "brightness(70%)",
                        borderRadius: "0%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    />
                    <div align="left" className="card-img-overlay"></div>
                  </div>
                </div>
                <div className="col-lg-5 ps-md-0 ">
                  {" "}
                  <ul className=" ps-0  h-100">
                    {/* <li className='text-black ps-3  blog_list_height'>
                      <div className=''>
                        <div
                          className='double_line_clamp'
                          style={{ fontSize: '1rem', fontWeight: '700' }}
                        >
                          What is the report of the blog in details
                        </div>
                        <div>
                          <></>
                          <div style={{ fontSize: '0.7rem' }}>23-2-2022</div>
                        </div>
                      </div>
                    </li> */}
                    {recentBlog &&
                      recentBlog.slice(0, 4).map((blog_show, index) => {
                        return (
                          <li
                            style={
                              blog_show.ID === blogImage.ID
                                ? {
                                    cursor: "pointer",
                                    background: "#245D51",
                                    position: "relative",
                                  }
                                : { cursor: "pointer" }
                            }
                            className={
                              blog_show.ID === blogImage.ID
                                ? " ps-3   blog_list_height "
                                : "text-black ps-3  blog_list_height  "
                            }
                            key={index}
                            onClick={() => {
                              handleRecentBlog(blog_show.SLUG);
                            }}
                          >
                            <div className="">
                              <div
                                className="double_line_clamp"
                                style={
                                  blog_show.ID === blogImage.ID
                                    ? {
                                        color: "white",
                                        fontSize: "1rem",
                                        fontWeight: "700",
                                      }
                                    : { fontSize: "1rem", fontWeight: "700" }
                                }
                              >
                                {blog_show.TITLE}
                              </div>
                              <div>
                                {blog_show.ID === blogImage.ID ? (
                                  <i
                                    className="fa fa-caret-right position-absolute   text-white active_arrow_position"
                                    style={{
                                      marginLeft: "-10px",
                                      marginTop: "-22px",
                                    }}
                                  ></i>
                                ) : (
                                  <></>
                                )}
                                <div
                                  className=""
                                  style={
                                    blog_show.ID === blogImage.ID
                                      ? {
                                          color: "#C4C4C4",
                                          fontSize: "0.7rem",
                                          marginTop: "-2px",
                                        }
                                      : {
                                          fontSize: "0.7rem",
                                          marginTop: "-2px",
                                        }
                                  }
                                >
                                  {blog_show.BLOG_DATE}
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div>
                <div className="row p-0 m-0">
                  {blog.length > 0 ? (
                    blog.map((blog_images, index) => {
                      return (
                        <div
                          key={index}
                          className="col-lg-4 col-md-6 col-12 m-0 ps-0 py-2"
                        >
                          <Link
                            to={"/blog/" + blog_images.SLUG}
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="card my-2 w-100 "
                              style={{
                                border: "none",
                                borderRadius: "0%",
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={
                                  "https://dev-api.guidejuniors.com/images/" +
                                  blog_images.IMAGE_URL
                                }
                                className="card-img-top"
                                width={100}
                                height={150}
                                style={{
                                  backgroundSize: "cover",
                                  borderRadius: "0%",
                                  objectFit: "cover",
                                }}
                                alt="..."
                              />
                              <div className="card-body m-0  p-0 ">
                                <div
                                  className="py-1"
                                  style={{
                                    color: "#675C5C",
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  {blog_images.BLOG_DATE}
                                </div>
                                <div
                                  className="double_line_clamp"
                                  style={{
                                    color: "#151212",
                                    fontSize: "1rem",
                                    fontWeight: "800",
                                  }}
                                >
                                  {blog_images.TITLE}
                                </div>
                                <h5
                                  className="card-title  my-0 py-1"
                                  style={{
                                    color: "#FFAA3B",
                                    fontSize: "0.8rem",
                                  }}
                                >
                                  {blog_images.CATEGORY}
                                </h5>
                                <p
                                  className="card-text blog_content"
                                  style={{
                                    color: "#675C5C",
                                    fontSize: "0.8rem",
                                  }}
                                >
                                  <Markup content={blog_images.CONTENT} />
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="py-5"
                      align="center"
                      style={{ fontFamily: "Montserrat", fontWeight: "600" }}
                    >
                      ---No Blog Match Found---
                    </div>
                  )}
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="blog_write_for">
                <h4 style={{ fontWeight: "800" }}>Write For Us</h4>
                <div
                  style={{
                    color: "#675C5C",
                    fontSize: "0.8rem",
                    fontFamily: "Montserrat",
                  }}
                >
                  Crazy bloggers and writers are welcomed to showcase your
                  talent. Grab the spotlight for a social cause!!
                </div>
                <a href="/write-for-us  ">
                  {" "}
                  <button className="blog_write_button mt-3">Write Now</button>
                </a>
              </div>
              <div className="blog_education mt-3">
                <h4 style={{ color: "#151212", fontWeight: "800" }}>
                  Education, Technology, Search News and How-Tos
                </h4>
                <div
                  style={{
                    color: "#675C5C",
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                >
                  Subscribe to our Daily Newsletter to get the latest Industry
                  news
                </div>
                <span className="blog-input-icons">
                  <i
                    className="fa fa-envelope-o px-2 blog-icon"
                    style={{ fontSize: "0.8rem" }}
                  ></i>

                  <input
                    className="mt-3  blog-input-field w-100"
                    placeholder="Email Id*"
                    type="Email"
                    style={{
                      color: "#ACACAC",

                      fontSize: "0.8rem",
                      border: "1px solid #ACACAC",
                    }}
                    required
                  ></input>
                </span>
                <div style={{ fontWeight: "600", color: "#131313" }}>
                  <h5 style={{ fontWeight: "700" }}>Topic(s) of Interest*</h5>
                  <div className="radio_buttons row">
                    {/* <div className='col-lg-4'>
                      <input type='checkbox' value='Education' className=''></input>
                    <label className='ps-2 me-2'>Education</label>
                    </div> */}

                    <div className="col-lg-4   ">
                      <input
                        type="checkbox"
                        value="Education"
                        className=""
                      ></input>
                      <label className="ps-2 ">Education</label>
                    </div>
                    <div className="col-lg-4  ">
                      <input
                        type="checkbox"
                        value="Education"
                        className=""
                      ></input>
                      <label className="ps-2 ">Tech</label>
                    </div>

                    <div className="col-lg-4  ">
                      <input
                        type="checkbox"
                        value="Education"
                        className=" "
                      ></input>
                      <label className="ps-2 ">Health</label>
                    </div>

                    <div>
                      <button className="blog_write_button ">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="download_block mt-3">
                <h4 className="" style={{ fontWeight: "800" }}>
                  Download Guide Juniors
                </h4>
                <div
                  className=""
                  style={{ color: "#675C5C", fontSize: "0.8rem" }}
                >
                  Guide Junior - A unique initiative to enable the learning
                  community with more support and guidance from the pioneers.
                  Welcome to the world of learning & sharing through continuous
                  interaction with the seniors on personalised tuition and book
                  sharing services.{" "}
                  <div className="d-flex py-2">
                    <a
                      className="px-2"
                      href="https://play.google.com/store/apps/details?id=com.guidejunior"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src={playstore}
                        alt=""
                        className=""
                        width={100}
                        // style={{ width: "40%" }}
                      />
                    </a>

                    <a
                      className="px-2"
                      href="https://apps.apple.com/in/app/guidejuniors/id1660564846"
                    >
                      <img
                        src={appstore}
                        alt=""
                        className=""
                        width={100}
                        // style={{ width: "40%" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
export default Blogs;
