import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/serviceStyle.css";

const Service = () => {

    return (
        <div className="d-flex flex-column service">
            <div
                className="container d-flex 
        gap-2
      flex-column flex-md-row justify-content-between mt-5"
            >
                <div className="text-side w-100 w-md-50 order-2 order-md-1">
                    <h1> We take care of your beautiful carden </h1>

                    <p>Taking care of a beautiful garden can be a rewarding experience, but it also requires time, effort, and knowledge. Here are some descriptions that support the idea of taking care of your beautiful garden</p>

                    <button className="btn btn-success mt-5">
                        {" "}
                        <span className="pre-scrollable  ">
                            <strong> Discover More  </strong>
                        </span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                <div className="image-side order-1 order-md-3 text-center w-100 w-md-75 m-lg-5 p-lg-5   my-md-auto my-lg-0 ">
                    <img
                        
                        className="img-fluid rounded-3 w-100"
                        src="https://www.kindpng.com/picc/m/354-3540303_golden-pothos-with-pot-png-transparent-png.png"
                        alt=" image for the service "
                    />
                </div>
            </div>

            <div className="two-feature mb-5 mt-4  container  d-flex flex-column flex-md-row  gap-3">
                <div className="pop-card bg-success w-100 w-md-50 rounded-3 mt-3  px-5 py-5">
                    <h3 className="">New Arrivals</h3>
                    <h2> House Plants </h2>
                    <p className="mt-3">
                        <b> From </b>
                        <br />
                        <strong> $ 20.00 </strong>
                    </p>
                </div>

                <div className="pop-card1 bg-success w-100 w-md-50 rounded-3 mt-3 px-5 py-5">
                    <h3 className="">New Arrivals</h3>
                    <h2> Pothos Neon </h2>
                    <p className="mt-5">
                        <b> From </b>
                        <br />
                        <strong> $ 25.06 </strong>
                    </p>
                </div>
            </div>

            <div className="section2 mt-5 container">
                <div
                    className="service-provide mt-5 
        mb-4 text-center"
                >
                    <h2> Service We Provide  </h2>
                </div>

                <div className="feature-service d-flex   flex-column gap-5 gap-md-1  flex-md-row   mt-4">
                    <div className="d-flex gap-2 flex-column flex-lg-row">
                        <div className="service-card   w-100 w-md-25 w-lg-25     text-center mx-3 px-2">
                            <img
                                effect="opacity"
                                className="img-fluid w-75"
                                src="https://img.icons8.com/?size=512&id=vGFJhv8oyS5d&format=png"
                                alt=""
                            />

                            {/* <img
                className="img-fluid w-75"
                src="https://img.icons8.com/?size=512&id=vGFJhv8oyS5d&format=png"
                alt=""
              /> */}
                            <h4>Planting Enforcement</h4>
                            <p>ensure that plants are being planted and maintained in a particular area. It may involve the enforcement of laws and regulations related to planting, such as requiring developers to plant a certain number of trees or ensuring that landowners maintain a certain amount of vegetation on their properties</p>
                        </div>
                        <div className="service-card  text-center w-100 w-md-50 w-lg-25    mx-3 px-2">
                            <img
                                effect="opacity"
                                className="img-fluid w-75"
                                src="https://img.icons8.com/?size=512&id=7pyBnIFIx5OY&format=png"
                                alt=""
                            />
                            {/* <img
                className="img-fluid w-75"
                src="https://img.icons8.com/?size=512&id=7pyBnIFIx5OY&format=png"
                alt=""
              /> */}
                            <h4>Planting Enforcement</h4>
                            <p>ensure that plants are being planted and maintained in a particular area. It may involve the enforcement of laws and regulations related to planting, such as requiring developers to plant a certain number of trees or ensuring that landowners maintain a certain amount of vegetation on their properties</p>
                        </div>
                    </div>

                    <div className="d-flex gap-2 flex-column flex-lg-row">
                        <div className="service-card  text-center w-100 w-md-50 w-lg-25    mx-3 px-2">
                            {/* <img
                className="img-fluid w-75"
                src="https://img.icons8.com/?size=512&id=SpZSUswN9tJs&format=png"
                alt=""
              /> */}

                            <img
                                effect="opcaity"
                                className="img-fluid w-75"
                                src="https://img.icons8.com/?size=512&id=SpZSUswN9tJs&format=png"
                                alt=""
                            />
                            <h4>Planting Enforcement</h4>
                            <p>ensure that plants are being planted and maintained in a particular area. It may involve the enforcement of laws and regulations related to planting, such as requiring developers to plant a certain number of trees or ensuring that landowners maintain a certain amount of vegetation on their properties</p>
                        </div>
                        <div className="service-card w-25  text-center mx-3 px-2 w-100 w-md-50 w-lg-25   ">
                            {/* <img
                className="img-fluid w-75"
                src="https://img.icons8.com/?size=512&id=rMYPr6ODJKc5&format=png"
                alt=""
              /> */}
                            <img
                                effect="opacity"
                                className="img-fluid w-75"
                                src="https://img.icons8.com/?size=512&id=rMYPr6ODJKc5&format=png"
                                alt=""
                            />
                            <h4>Planting Enforcement</h4>
                            <p>ensure that plants are being planted and maintained in a particular area. It may involve the enforcement of laws and regulations related to planting, such as requiring developers to plant a certain number of trees or ensuring that landowners maintain a certain amount of vegetation on their properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
