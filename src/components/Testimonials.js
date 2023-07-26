import React, { useState } from "react";
import user1 from "./images/testimonial.png";
import "./styles/Testimonials.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span style={{cursor:"pointer" ,color:"#245D51"}} onClick={toggleReadMore} className="reador-hidden"><b> {isReadMore ? "  ...readmore" : "show less"}</b>
       
      </span>
    </p>
  );
};

function Testimonials() {
  return (
    <div className="testimonials" id="findsenior">
      <div className="container">
        
          <div className="">
            <h2 className="Testimonial_text">Testimonial</h2>
          </div>
          
        
        
        <div className="content">
          <div className="card ">
            <div>
              <ReadMore>
                Hi, It's a very genuine and useful application for school &
                college students. I would suggest it to all schools and
                colleges, It has a feature to connect with their favourite
                Mentors eg. Chats. So that if our favourite tutor is not coming
                online for so long then students can just have a quick
                conversation with their mentors. Believe me, this guide juniors
                app will enhance the usefulness of all. This is one of the best
                features so i can connect with my fav mentor in the pool of
                2000+ mentors.
              </ReadMore>
            </div>
            <div className="row">
              <span className="col-md-2 col-lg-3">
                <img
                  src={user1}
                  className="rounded-circle mt-3"
                  width={60}
                  height={60}
                  alt="user1"
                />
              </span>
              <span className="col-md-10 col-lg-9 mt-3">
                <div>
                  <b>Avika Goel</b>
                </div>
                <div>
                  <b>Student from Odisha.</b>
                </div>
              </span>
            </div>
          </div>
          <div className="card ">
            <div>
              <ReadMore>
                Hi, The idea of the app is an exceptional one. It really
                provides good mentorship. We can directly connect with our fav
                mentor and can get the doubts solved anytime. Really appreciate
                the team because this idea of Guide juniors is very helpful for
                me. The chat feature and mentor review feature is also exciting
                and useful.
              </ReadMore>
              
            </div>
            <div className="row">
              <span className="col-md-2 col-lg-3">
                <img
                  src={user1}
                  className="rounded-circle mt-3"
                  width={60}
                  height={60}
                  alt="user1"
                />
              </span>
              <span className="col-md-10 col-lg-9 mt-3">
                <div>
                  <b>Sreepriya Jain</b>
                </div>
                <div>
                  <b>Student in NY, USA.</b>
                </div>
              </span>
            </div>
          </div>
          <div className="card ">
            <div>
              <ReadMore >
                Hello. Im Doctor I would like to add a few words about the
                founder Bhavik Jain and his magnificent initiative Guide
                Juniors. Bhavik is a tech savvy person. When I first met him I
                found him to be very active and studious about his academics. He
                is always on the go to achieve something big in life by
                contributing to the society inspired by Ratan Tata and his
                leadership. And finally it paved the way for Guide Juniors -
                which is an incredible idea to support the students in learning,
                sharing of knowledge, books and so many others. I greatly
                recommend this to the learning community of all arenas. Learn ,
                teach & Share !!!
              </ReadMore>
            </div>
            <div className="row">
              <span className="col-md-2 col-lg-3">
                <img
                  src={user1}
                  className="rounded-circle mt-3"
                  width={60}
                  height={60}
                  alt="user1"
                />
              </span>
              <span className="col-md-10 col-lg-9 mt-3">
                <div>
                  <b>Naveen Kumar</b>
                </div>
                <div>
                  <b>
                    Govt., Doctor in Chennai,
                    TN.
                  </b>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
