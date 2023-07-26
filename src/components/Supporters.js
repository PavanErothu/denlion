import React from "react";
import "./styles/Supporters.css";
// import supporters_video from "./images/Website_Video.mp4";
function Supporters() {
  return (
    <div className="mt-5">
      {" "}
      <div className="mt-5"> 
        <div className="container">
          
          <div className="row">
            <div className="col-lg-6 col-md-12 "><div className="supporters_title ">
            <h2>Supporters</h2>
          </div>
              <p className="mt-3" style={{ fontSize: "1rem" }}>
                {" "}
                {/* <h3 className="mt-5 text-align-center"> */}
                  {" "}
                  We are thankful for the people who are supporting us to make
                  our mission come to reality.
                {/* </h3> */}
              </p>
            </div>
            <div className="col-lg-6 col-md-12 ps-4 pt-4 pb-3 pe-0" style={{border:"2px solid #FFAA3B"}}>
              {/* <video >
              <source src={supporters_video} style={{width:"100%", height:"10%"}} />
            </video> */}
              {/* <video
                className="p-3 pt-4 pb-4"
                style={{ border: "2px solid #FFAA3B", background: "cover" }}
                width="100%"
                height="100%"
                controls 
                src={supporters_video}
              > */}
              {/* <source src={supporters_video} type="video/mp4" />
                Your browser does not support the video tag. */}
              {/* </video> */}

              {/* <iframe   
                src='https://www.youtube.com/embed/-B7PKO9Wd9M'
                width={500}
                height={250}
                controls
                title="A youtube video on React hooks"
              ></iframe> */}
              <iframe
                width="95%"
                height="228"
                src="https://www.youtube.com/embed/-B7PKO9Wd9M"
                title="Guide Juniors| Word from Supporters"
                frameBorder={0}
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Supporters;
