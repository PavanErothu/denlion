import playstore from "./images/playstore.png";
import appstore from "./images/appstore.png";
import mask_img from "./images/mask_img.png";
import "./styles/Download.css";
export default function Download() {
  return (
    <div className="write " style={{ background: "#F6FFFD" }} >
      <div className="container" id="founder">
        <div className="row mt-3 about-div">
          <div className="col-lg-6 ">
            <h2 className="download-text mt-5" style={{ fontSize: "3.5rem" }}>
              Download the app
            </h2>
            <p className="mt-3" style={{ fontSize: "1rem" }}>
              Guide Junior - A unique initiative to enable the learning
              community with more support and guidance from the pioneers.
              Welcome to the world of learning & sharing through continuous
              interaction with the seniors on personalised tuition and book
              sharing services.
            </p>
            <span>
              <div className="pb-3">
                <a href="https://play.google.com/store/apps/details?id=com.guidejunior" target="_blank">
                  <img
                    src={playstore}
                    alt=""
                    className=""
                    style={{ width: "30%" }}
                  />
                </a>

                <a href="https://apps.apple.com/in/app/guidejuniors/id1660564846" target="_blank">
                  <img
                    src={appstore}
                    alt=""
                    className="ps-1"
                    style={{ width: "30%" }}
                  />
                </a>
              </div>
            </span>
          </div>
          <div className="col-lg-6 ">
            <img
              src={mask_img}
              className="mobile  img-fluid "
              height="fit-content"
              width="95%"
              alt=""
              style={{ backgroundSize: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
