import React from "react";
import events_top_img from "../images/events_top_img.svg";
import events_bottom_img from "../images/events_bottom_img.svg";
import events_upcoming_img from "../images/events_upcoming_img.svg";
import EventModal from "./AddEvents";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h1>Add School Events</h1>
        <form align="center">
          <div className="mt-5">
            <input placeholder="Enter School Name" type="text" style={{height:"60px", width:"269px"}}></input>
          </div>

          <div className="mt-5">
            <input placeholder="Enter Event Date" type="Date" style={{height:"60px", width:"269px"}}></input>
          </div>
          <div className="mt-5">
            <input placeholder="Enter Event Location" type="location" style={{height:"60px", width:"269px"}}></input>
          </div>
          <div className="mt-5">
            <input placeholder="Enter Event Location" type="file" style={{height:"60px", width:"269px"}}></input>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

function Events() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container mt-5 py-5">
      <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Events
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <div
        className="row mt-5 "
        style={{ border: "1px solid #E5E5E5", borderRadius: "12px" }}
      >
        <div
          className="col-md-5 d-flex flex-column position-relative"
          style={{
            background: "#EDEDED",
            height: "532px",
            borderRadius: "12px",
          }}
        >
          <img
            src={events_top_img}
            className="position-absolute top-0 end-0"
          ></img>
          <img
            src={events_bottom_img}
            className="position-absolute bottom-0 start-0"
          ></img>
          <div className="my-auto">
            <div
              className=" ps-3"
              style={{
                fontSize: "46px",
                fontWeight: "500",
                lineHeight: "52px",
              }}
            >
              Event
            </div>{" "}
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "28px",
              }}
              className="ps-3 pe-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
        </div>
        <div className="col-md-7 ">
          <div
            className="row p-3"
            style={{ borderBottom: "1px solid #E5E5E5" }}
          >
            <div className="col-6">
              <div
                align="center"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "16px",
                  color: "#777777CC",
                }}
              >
                Upcoming
              </div>
            </div>
            <div className="col-6">
              <div
                align="center"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "16px",
                  color: "#FBA93E",
                }}
              >
                Completed
              </div>
            </div>
          </div>
          <div className="row p-3 mt-4">
            <div className="col-md-6">
              <div className="p-3">
                <div style={{ border: "1px solid #EDEDED" }} className="d-flex">
                  <div>
                    {" "}
                    <img
                      src={events_upcoming_img}
                      alt="events_upcoming_img"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      lineHeight: "16px",
                      color: "#353535",
                    }}
                  >
                    DAV PUBLIC SCHOOL
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3">
                <div style={{ border: "2px solid #EDEDED" }}>hello</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;
