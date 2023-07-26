import React from "react";
import "./styles/About.css";
import mentorship from "./images/mentorship.png";
import book_material from "./images/book_material.png";
import curriculam from "./images/curriculam.png";
import story_img1 from "./images/story_img1.png";
import story_img2 from "./images/story_img2.png";

const About = () => {
  return (
    <div className="about" id="ourstory">
      <div className="container">
        <h2 className="text-align ourstory_title">Our Story</h2>
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <img
              src={story_img1}
              alt="story_img"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div className="col-lg-9 col-md-12">
            <p className="mt-5">
              Did you know that when Virat Kohli made his debut for India, he
              was only 19 years old? He was very nervous about meeting the
              superstars in the team like Sachin Tendulkar, Virender Sehwag etc.
              He says that the seniors in the team spoke to him and made him
              feel very comfortable. As a result, he adjusted fast and performed
              well.
            </p>

            <p>
              Guide Juniors is a platform that helps connect students of all
              levels. We want to act as a bridge between the juniors and the
              seniors, so that they can interact and help each other
              professionally and personally. Guide Juniors will allow students
              to share valuable information with their peers as well as
              colleagues. Knowledge sharing will be achieved using multiple
              means, including but not limited to sharing of books, one on one
              interaction, offline and online coaching etc. Juniors will also
              receive personalised coaching from seniors of their own campus so
              as to promote integrity, values and trust.
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <p>
              Guide Juniors follows a unique approach that caters to individuals
              from various fields such as education, sports, medicine and many
              other branches. Seniors can also impart their valuable knowledge
              and value system to the juniors which will help them choose the
              right path.
            </p>
            <p>
              By aiding meaningful networking and career development, Guide
              Juniors is on its way to inspire the youth of our country to
              achieve their full potential. With the help of our friendly,
              knowledgeable and trustworthy seniors, we will create a community
              of learners who are not only capable but also curious and
              confident.
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <img
              src={story_img2}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-5 row ">
          <div className="col-md-4 mt-5">
            <img src={mentorship} alt="" style={{ width: "25%" }}></img>
            <h5>Mentorship</h5>
          </div>
          <div className="col-md-4 mt-5">
            <img src={book_material} alt="" style={{ width: "25%" }}></img>
            <h5>Book & Material</h5>
          </div>
          <div className="col-md-4 mt-5">
            <img src={curriculam} alt="" style={{ width: "25%" }}></img>
            <h5>Curriculum</h5>
          </div>
          {/* <div className="col-md-3 mt-5">
            <img src={search_engine} alt="" style={{ width: "25%" }}></img>
            <h5>Search Engine
            </h5>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
