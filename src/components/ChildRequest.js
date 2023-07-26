import React, { useEffect, useState } from "react";
import gj_title_logo from "./images/gj_title_logo.svg";
import students from "./images/students.svg";
import school_id from "./images/school_id.svg";
import axios from "axios";
import qs from "qs";
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import cross_img from "./images/cross_img.png";
function ChildRequest() {
  let w = window.innerWidth;
  let [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mobile_number = searchParams.get("mobile_number");

  const [studentDetail, setStudentDetail] = useState({
    name: "",
    school_name: "",
    class: "",
    id_card: "",
    status: "",
  });

  useEffect(() => {
    const reqData = {
      mod: "Ride",
      actionType: "get-relation-request-details",
      subAction: JSON.stringify({
        REQUEST_ID: id,
        MOBILE_NUMBER: mobile_number,
      }),
    };
    axios({
      method: "POST",
      url: "https:/dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "application/x-www-form-urlencoded" },
    }).then((res) => {
      let mainData = res.data;
      setStudentDetail({
        name: mainData.XSCData.STUDENT_DETAILS.FULL_NAME,
        school_name: mainData.XSCData.STUDENT_DETAILS.SCHOOL_NAME,
        class: mainData.XSCData.STUDENT_DETAILS.CLASS_ID,
        id_card: mainData.XSCData.STUDENT_DETAILS.ID_CARD_URL,
        status: mainData.XSCData.STUDENT_DETAILS.REQUEST_STATUS,
      });

      console.log(mainData, "mainData");
    });
  }, []);

  const handleVerified = (check) => {
    const reqData = {
      mod: "RideProvider",
      actionType: "parent-request-action",
      subAction: JSON.stringify({
        REQUEST_ID: id,
        ACTION: check == 0 ? "REJECT" : "ACCEPT",
      }),
    };
    axios({
      method: "POST",
      url: "https://dev-api.guidejuniors.com/",
      data: qs.stringify(reqData),
      header: { "content-type": "application/x-www-form-urlencoded" },
    }).then((res) => {
      let mainData = res.data;

      // setVerification(mainData.XSC);

      if (mainData.XSCStatus == 0) {
        toast.success(mainData.XSCMessage);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(mainData.XSCMessage);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }

      // console.log(mainData, "mainData");
    });
  };
  // useEffect(() => {
  //   handleVerified();
  // }, []);
  return (
    <div className="" style={{ backgroundColor: "#DEF7E5", height: "100vh" }}>
      <div
        style={
          {
            // height: "100vh",
          }
        }
        className=""
      >
        <div className="container p-5">
          {w > 900 ? (
            <div className="row ">
              <div className="col-md-4"></div>
              <div className="col-md-4 " align="center">
                <div style={{ backgroundColor: "#245D51" }}>
                  <img className="p-4" src={gj_title_logo} width="100%"></img>
                </div>
                <div style={{ backgroundColor: "white" }}>
                  <div className="p-3">
                    {/* {studentDetail.id_card == "" ? (
                    <img src={students}></img>
                  ) : (
                    <img
                      style={{ borderRadius: "100%", width: "25%" }}
                      src={
                        "https://dev-api.guidejuniors.com" +
                        studentDetail.id_card
                      }
                    ></img>
                  )} */}
                    <img src={students}></img>
                    <div
                      className="pt-2"
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "16px",
                      }}
                    >
                      {" "}
                      Child Confirmation Request
                    </div>
                  </div>{" "}
                  {studentDetail.status === "" ? (
                    <div className="py-5 mb-5">
                      <div>
                        <img className="py-4" src={cross_img}></img>
                      </div>
                      <div className="mb-5">Invalid Request</div>
                    </div>
                  ) : (
                    <div className="row pt-4">
                      <div className="col-md-8" align="left">
                        <div className="px-3 ">
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#1F1F1F",
                            }}
                          >
                            Name
                          </div>

                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#696969",
                            }}
                          >
                            {studentDetail.name}
                            {/* Kiran Kumar */}
                          </div>
                        </div>
                        <div className="px-3 pt-4">
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#1F1F1F",
                            }}
                          >
                            School Name
                          </div>

                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#696969",
                            }}
                          >
                            {studentDetail.school_name}
                            {/* DAV Public School */}
                          </div>
                        </div>
                        <div className="px-3 pt-4">
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#1F1F1F",
                            }}
                          >
                            Class
                          </div>

                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#696969",
                            }}
                          >
                            {studentDetail.class}
                            {/* 12 th */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-2">
                          {" "}
                          <img src={school_id} width="100%"></img>
                        </div>
                      </div>
                      <div>
                        {studentDetail.status === "REQUESTED" ? (
                          <>
                            {" "}
                            <div className="pt-5 ">
                              <span
                                onClick={() => {
                                  handleVerified(1);
                                }}
                                style={{
                                  textAlign: "center",
                                  backgroundColor: "#FBA93E",
                                  padding: "16px, 131px",
                                  fontSize: "13px",
                                  fontWeight: "600",
                                }}
                                className="btn "
                              >
                                Approve
                              </span>
                              <ToastContainer duration="2000" />
                            </div>
                            <div
                              onClick={() => {
                                handleVerified(0);
                              }}
                              className="py-3  mb-4"
                              style={{
                                color: "#FBA93E",
                                fontWeight: "600",
                                fontSize: "13px",
                                cursor: "pointer",
                              }}
                            >
                              Deny
                            </div>{" "}
                          </>
                        ) : ( 
                          <div className="pt-5">
                            {" "}
                            <div
                              className="btn mb-5"
                              style={{
                                textAlign: "center",
                                backgroundColor: "#FBA93E",
                                padding: "16px, 131px",
                                fontSize: "13px",
                                fontWeight: "600",
                              }}
                            >
                              Approved
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="row"></div>
            </div>
          ) : (
            <div className="row d-flex justify-content-center pt-md-5 ">
              <div className="col-md-2"></div>
              <div
                className="col-md-8 "
                align="center"
                style={{ width: "441px", height: "110px" }}
              >
                <div style={{ backgroundColor: "#245D51" }}>
                  <img className="p-3" src={gj_title_logo} width="100%"></img>
                </div>
                <div style={{ backgroundColor: "white" }}>
                  <div className="p-3">
                    {/* {studentDetail.id_card == "" ? (
                    <img src={students}></img>
                  ) : (
                    <img
                      style={{
                        borderRadius: "50%",
                        height: "20%",
                        width: "20%",
                      }}
                      src={
                        "https://dev-api.guidejuniors.com/" +
                        studentDetail.id_card
                      }
                      width="80%"y
                    ></img>
                  )} */}
                    <img src={students}></img>
                    <div
                      className="pt-2"
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "16px",
                        
                      }}
                    >
                      {" "}
                      Child Confirmation Request
                    </div>
                  </div>{" "}
                  {studentDetail.status == "" ? (
                    <div className="mt-5 py-5">
                      {" "}
                      <div className="">
                        <img className="" src={cross_img}></img>
                      </div>
                      <div className="mt-3 mb-5"><b>Invalid Request</b></div>
                    </div>
                  ) : (
                    <div className="row pt-4 ">
                      <div className="col-6" align="left">
                        <div className="px-2 ">
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#1F1F1F",
                            }}
                          >
                            Name
                          </div>

                          <div
                            className=""
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#696969",
                            }}
                          >
                            {/* Kiran Kumar */}
                            {studentDetail.name}
                          </div>
                        </div>
                        <div className="px-2 pt-4">
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#1F1F1F",
                            }}
                          >
                            School Name
                          </div>

                          <div
                            className=""
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#696969",
                            }}
                          >
                            {/* DAV Public School */}
                            {studentDetail.school_name}
                          </div>
                        </div>
                        <div className="px-2 pt-4">
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#1F1F1F",
                            }}
                          >
                            Class
                          </div>

                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#696969",
                            }}
                          >
                            {/* 12 th */}
                            {studentDetail.class}
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-1">
                          {" "}
                          <img src={school_id} width="100%"></img>
                        </div>
                      </div>
                      {studentDetail.status === "REQUESTED" ? (
                        <>
                          {" "}
                          <div className="pt-5 ">
                            <span
                              onClick={() => {
                                handleVerified(1);
                              }}
                              style={{
                                textAlign: "center",
                                backgroundColor: "#FBA93E",
                                padding: "16px, 131px",
                                fontSize: "13px",
                                fontWeight: "600",
                                width: "100%",
                              }}
                              className="btn "
                            >
                              Approve
                            </span>
                          </div>
                          <div
                            onClick={() => {
                              handleVerified(0);
                            }}
                            className="py-3 mb-4"
                            style={{
                              color: "#FBA93E",
                              fontWeight: "600",
                              fontSize: "13px",
                            }}
                          >
                            Deny
                          </div>
                        </>
                      ) : (
                        <div className="pt-3 mb-5">
                          <span
                            style={{
                              textAlign: "center",
                              backgroundColor: "#FBA93E",
                              padding: "16px, 131px",
                              fontSize: "13px",
                              fontWeight: "600",
                              width: "90%",
                            }}
                            className="btn "
                          >
                            Approved
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ChildRequest;
