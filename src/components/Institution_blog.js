import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./styles/Institution_blog.css";
import news_letter from "./images/newsletter.svg";
import Footer from "./Footer";
import qs from "qs";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Markup } from 'interweave';
function InstitutionBlog() {
  const [blog, setBlog] = useState("");
  const [recentBlog, setRecentBlog] = useState([]);
  const [techCount, setTechCount] = useState("0");
  const [educationCount, setEducationCount] = useState("0");
  const [healthCount, setHealthCount] = useState("0");


  let [searchParams] = useSearchParams();
  let {slugs}=useParams();
const navigate=useNavigate();
const handleBlogId=(blog)=>{
  navigate(`/blog/${blog.SLUG}`,{state:{Slug:blog.SLUG,Id:blog.ID}});
  window.location.reload();
}
const location=useLocation();

  useEffect(() => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-details",
      subAction: JSON.stringify({
        SLUG: slugs
      })
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {

      let sampleData = res.data.XSCData;
      
if(sampleData['ID']){
 
  setBlog(sampleData)
}else{
  navigate("page_not_found")
}
      
    });
  }, [slugs]);
  useEffect(() => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-list",
      subAction: JSON.stringify({
        FILTERS: ""
      })
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {
   
      let sampleData = res.data.XSCData;
    
      setRecentBlog(
        sampleData.BLOG_LIST
      )

    });
  }, []);
  {/*categories count*/ }
  useEffect(() => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-list",
      subAction: JSON.stringify({
        FILTERS: "TECH"
      })
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {

      let sampleData = res.data.XSCData;

      if(sampleData.BLOG_LIST !==null){
        setTechCount(sampleData.BLOG_LIST.length)
      }
      // else{
      //   setTechCount("0")
      // }
     
        

    });
  }, []);
  useEffect(() => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-list",
      subAction: JSON.stringify({
        FILTERS: "EDUCATION"
      })
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {

      let sampleData = res.data.XSCData;
 
      if(sampleData.BLOG_LIST!==null){
        setEducationCount(sampleData.BLOG_LIST.length)

      }
    //  else{
    //   setEducationCount("0")
    //  }

    });
  }, []);
  useEffect(() => {
    const reqData = {
      mod: "Blogs",
      actionType: "get-blog-list",
      subAction: JSON.stringify({
        FILTERS: "HEALTH"
      })
    };
    axios({
      method: "post",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "multipart/form-data" },
    }).then((res) => {

      let sampleData = res.data.XSCData;

      if(sampleData.BLOG_LIST!==null){
        setHealthCount(sampleData.BLOG_LIST.length)
      }
      // else{
      //   setHealthCount("0")
      // }
      

    });
  }, []);
  const currentUrl=window.location.href;
const handleCategory=(filter)=>{
  navigate('/blogs',{state:{category:filter,isPresent:true}})
}
  return (
    <div style={{fontFamily:"Montserrat"}}>
      <Header />
      <div className="mt-5 container">
        <div className="mt-5 py-5 row content">
          <div className=" col-md-8  col-sm-7   ">
            <div className="d-flex ">
              <div className="px-5  social_padding_responsive" style={{  marginLeft: "-4%"}}>

              </div>
              <div className="py-2">
                <div>
                  <p className="heading_text ">
                    <b>
                      {blog.TITLE}{" "}
                    </b>
                    <span className="popular_text">Popular</span>
                  </p>
                </div>

                <div className="author" style={{ color: "#A8A8A8" }}>
                  By <span style={{ color: "#FFAA3B" }}>{blog.AUTHOR}</span> on
                  {" "}{blog.BLOG_DATE}
                </div>
                <div>

                </div>
              </div>
            </div>
            
            <div className="  blogs_follow_links " >

              <div className="d-flex "> 
              <div className="px-5 social_padding_responsive " style={{marginLeft: "-4%",overflow:"hidden"}}>
                 <ul className="social_position" style={{  marginLeft: "-4%" }}>
                {" "}
                <li>
                  {" "}
                  <a
                    href={"https://twitter.com/intent/tweet?url="+currentUrl}
                    target="_blank"
                    className="ms-0 fa fa-twitter fa_icons"
                  ></a>
                </li>
                <li>
                  <a
                    href={"https://www.facebook.com/sharer.php?u="+currentUrl}
                    target="_blank"
                    className="ms-0 fa fa-facebook fa_icons"
                  ></a>
                </li>
                {/* <li>
                  <a
                    href={"https://www.instagram.com/sharer.php?u="+currentUrl}
                    target="_blank"
                    className="ms-0 fa fa-whatsapp fa_icons"
                  ></a>
                </li> */}
                <li>
                  <a
                    href={"mailto:?&body="+currentUrl}
                    target="_blank"
                    className="ms-0 fa fa-envelope fa_icons"
                  ></a>
                </li>
                <li>
                  <a
                    href={"https://www.linkedin.com/shareArticle?url="+currentUrl}
                    target="_blank"
                    className="ms-0 fa fa-linkedin fa_icons"
                  ></a>
                </li>
              </ul>
              </div>
                <div >
                
                <div className="" >
                  <img style={{ width: "100%", height: "100%" }} src={"https://dev-api.guidejuniors.com/images/" + blog.IMAGE_URL} alt={blog.SLUG} width={"100%"}></img>
                </div>
                {/* <div className="mt-3">
              {" "}
              <audio style={{ color: "#FFAA3B", width: "70%" }} controls>
                <source src="cat.mp3" type="audio/mpeg"></source>
              </audio>
            </div> */}
                {/* <div className="py-2" style={{ color: "#675C5C" }}>
              <p className="para">
                More than 130 four-year colleges and universities with the
                nation’s highest graduation rates have come together as members
                of the American Talent Initiative, committing to a common goal:
                to enroll, support and graduate 50,000 additional students from
                low- and moderate-income households by 2025. ATI members run the
                gamut, from the entire Ivy League and flagship publics to
                regional comprehensive universities and a variety of private
                liberal arts colleges. Community college transfer has emerged as
                a key strategy to increase access, success and equity across
                members of all stripes, including at the most selective private
                colleges in the nation.
              </p>
            </div>
            <div>
              <h3
                className="virtual_text"
                style={{ fontWeight: "700", color: "#151212" }}
              >
                Make the most of virtual engagement
              </h3>
              <p className="para" style={{ color: "#675C5C" }}>
                Through the pandemic, we learned webinars and virtual workshops
                present an opportunity to reach more students from historically
                marginalized communities, many of whom may not have the time or
                resources for campus visits. Four-year institutions can also
                co-host counselor information sessions, using a single event to
                highlight their various institutions. These options are more
                suitable for prospective transfers who are more likely to have
                to juggle work, life and academic responsibilities.
              </p>
            </div>
            <div>
              <h3
                className="virtual_text"
                style={{ fontWeight: "700", color: "#151212" }}
              >
                1. Prioritize proactive outreach
              </h3>
              <p className="para" style={{ color: "#675C5C" }}>
                Through the pandemic, we learned webinars and virtual workshops
                present an opportunity to reach more students from historically
                marginalized communities, many of whom may not have the time or
                resources for campus visits. Four-year institutions can also
                co-host counselor information sessions, using a single event to
                highlight their various institutions. These options are more
                suitable for prospective transfers who are more likely to have
                to juggle work, life and academic responsibilities.
              </p>
            </div>
            <div>
              <h3
                className="virtual_text"
                style={{ fontWeight: "700", color: "#151212" }}
              >
                2. Prioritize proactive outreach
              </h3>
              <p style={{ color: "#675C5C" }}>
                Too often, four-year institutions engage community college
                students sporadically through occasional webinars and
                information sessions. Prospective transfers do not know the
                range of institutions they could afford and access. The 13
                four-year TSN partners worked together to coordinate workshops
                and information sessions so students could learn about their
                transfer cultures, engage with senior leaders and connect with
                transfer alumni. In the process, they broadened students’
                postsecondary horizons, positioning them to see TSN four-year
                partner campuses as realistic destinations. And as a result
              </p>
            </div> */}
                <div className="py-2" >
                <Markup content={blog.CONTENT} />
                </div>
              </div>
             
              </div>

            </div>
          </div>

          <div
            className="col-md-4"

            style={{ backgroundColor: "#FCFCFC" }}
          >
            <div align="center" className="mt-5 blogs px-5 py-3">
              <img src={news_letter} alt="news"></img>
              <br />
              <br />
              <h5 className="" style={{fontWeight:"700",fontSize:"1.1rem"}}>
                Education, Technology,
                Search News and How-Tos
              </h5>
              <p
                style={{
                  color: "#675C5C",
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                  padding: "2px",
                }}
              >
                Subscribe to our Daily Newsletter to get the latest Industry
                news
              </p>
              <div className="email_field input-icons">
                <span>
                  <i className="fa fa-envelope px-2 icon"></i>

                  <input
                    className=" input-field  py-2"
                    placeholder="Email Id*"
                    type="Email"
                    style={{
                      color: "#ACACAC",
                      // height: "8%",
                      
                      border: "1px solid #707070",
                      borderRadius: "10px",
                    }}
                    required
                  ></input>
                </span>
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{ background: "#FFAA3B" }}
                placeholder="SUBMIT"
              >
                <b>Subscribe</b>
              </button>

            </div>


            <div className="py-2" >
              <h4 style={{ fontWeight: "700" }}>Latest Blog</h4>
              { 
              recentBlog.length>3?
              recentBlog.slice(0,3).map((recentBlog,index) => {
                return (
                  <Link key={index} to={"/blog/"+recentBlog.SLUG} style={{textDecoration:"none",color:"black"}}>
                  <div  className="d-lg-flex py-2" onClick={()=>handleBlogId(recentBlog)}>
                    <div className="w-100 p-0 m-0 ">
                      <img src={"https://dev-api.guidejuniors.com/images/" + recentBlog.IMAGE_URL} className="w-100"  ></img>
                    </div>
                    <div className="p-0 m-0 ps-2 ">
                      <h6>
                        {recentBlog.TITLE}
                      </h6>
                      <p>{recentBlog.BLOG_DATE}</p>
                    </div>
                  </div>
                  </Link>
                )
              })
              :
              recentBlog.map((recentBlog,index) => {
                return (
                  <Link key={index} to={"/blog/"+recentBlog.SLUG} style={{textDecoration:"none",color:"black"}}>
                  <div  className="d-md-flex py-2" onClick={()=>handleBlogId(recentBlog)}>
                    <div className="m-0 p-0">
                      <img src={"https://dev-api.guidejuniors.com/images/" + recentBlog.IMAGE_URL} width={170} height={100} style={{ objectFit: "cover" }}></img>
                    </div>
                    <div className="m-0 p-0 ">
                      <h6>
                        {recentBlog.TITLE}
                      </h6>
                      <p>{recentBlog.BLOG_DATE}</p>
                    </div>
                  </div>
                  </Link>
                  
                )
              })
              }


              {/* <div className="row">
                <div className="col-md-4">
                  <img src={blog_img1} width={170} height={100}></img>
                </div>
                <div className="col-md-6 ml-5  mt-2 ">
                  <h6>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit,
                  </h6>
                  <p>March 20, 2022</p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <img src={blog_img1} width={170} height={100}></img>
                </div>
                <div className="col-md-6 ml-5 mt-2">
                  <h6>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit,
                  </h6>
                  <p>March 20, 2022</p>
                </div>
              </div>
              <br /> */}
            </div>
            <div className="py-2">
              <h4 style={{ fontWeight: "700" }}>Category</h4>
              <div className="categories">
                <ul >

                  <li >
                    <p style={{ fontWeight: "700" ,cursor:"pointer"}} onClick={()=>handleCategory("TECH")}>
                      Technology <small> ({techCount})</small>
                    </p>
                  </li>
                  <li>
                    <p style={{ fontWeight: "700",cursor:"pointer" }} onClick={()=>handleCategory("EDUCATION")}>
                      Education <small> ({educationCount})</small>
                    </p>
                  </li>
                  <li>
                    <p style={{ fontWeight: "700" ,cursor:"pointer"}} onClick={()=>handleCategory("HEALTH")}>
                      Health <small> ({healthCount})</small>
                    </p>
                  </li>
                </ul>
              </div>
              <></>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InstitutionBlog;
