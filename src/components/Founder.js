import founder_img from "./images/founder_img.png";
import "./styles/Founder.css";
export default function Founder() {
  return (
    <div className="founder mt-5">
      <div className="container" id="founder">
        <div className="row">
          <div className="col-lg-8 mt-5">
            <h5 style={{ color: "#245D51" }}>Words From our</h5>
            <h2 className="founder_text">Founder</h2>
            <p>
              Reason behind this idea emerged from the tough experiences I have
              had with change of schools as a result of my parent’s occupation.
              By the time I finished my education; I had already changed more
              than 4 schools and lived in more than 3 states. Shifting schools
              meant starting over multiple times and I struggled with local
              languages which made it difficult for me to build rapport with
              seniors for any support and guidance. I felt to get some help from
              seniors by sharing their notes and books with me, but
              unfortunately it didn’t happen due to lack of this kind of
              platform.
            </p>
            <p>
              By the same time, the Covid 19 pandemic deprived children of
              contact with their seniors. My friendship with some helpful
              seniors was instrumental in my growth which leads the way for
              Guide Juniors.
            </p>
          </div>
          <div className="mt-5 col-lg-4">
            <img
              className="founder_img"
              alt=""
              src={founder_img}
              style={{width:"100%"}}
            />
          
          </div>
        </div>
      </div>
    </div>
  );
}
