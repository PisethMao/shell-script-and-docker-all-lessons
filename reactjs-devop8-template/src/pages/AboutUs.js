import React from "react";
import "../styles/aboutUsStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer, faPlay } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {


    return (
        <div className="container aboutus">
            <div className="section1  mt-5 d-flex   flex-md-row align-items-md-center gap-md-4 justify-content-center flex-column  ">
                <div className="image-side w-sm-100 w-md-50    w-lg-60 text-center ">


                    <img
                        alt="this the about us image "
                        className="img-fluid rounded-3 w-100  "
                        src="https://www.kindpng.com/picc/m/369-3694625_aloe-vera-plant-transparent-image-aloe-vera-plant.png"

                    />

                </div>
                <div className="text-side text-left ms-md-4  ">
                    <h1 className=""> About Our Team</h1>
                    <p>
                        We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.We understand that sometimes it might hard to constribute to the society in various act. That's why we are here.  \n We make it easy for everyone to plant trees and save the earth for future generation. We want to make the world full of free and embalance with nature.
                    </p>

                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faPlay} />
                        <span className="pre-scrollable"> View Demo</span>
                    </button>
                </div>
            </div>

            <div className="section2   mt-5 pt-5">
                <div className="">
                    <h1 className="text-center"> Our Mission</h1>
                    <p className="text-center px-5">
                        Our mission is to help people to save the earth and encourage them to plant more trees. We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
                    </p>
                </div>

                <div className="d-sm-flex flex-sm-column flex-md-row justify-content-center mt-5 gap-5">
                    <div className="feature-card  w-md-25 w-lg-25 w-sm-100  d-flex flex-column align-items-center ">
                        <img
                            className="img-fluid "
                            src="https://img.freepik.com/free-psd/3d-illustration-succulent-plant_23-2149424543.jpg?w=360&t=st=1689175415~exp=1689176015~hmac=10cde6af1e92392bc3ded27bf1e1f413f8f772fbd7217f2764d8135ba25d356f"
                            alt=""
                        />
                        <h4 className="mt-3">  Reduce Stress</h4>
                        <p className="text-center">
                            We help you to reduce stress by planting more trees and make your life more beautiful
                        </p>
                    </div>
                    <div className="feature-card  w-md-50   d-flex flex-column  align-items-center">
                        <img
                            className="img-fluid"
                            src="https://img.freepik.com/free-psd/3d-icon-furniture-with-pots_23-2150092282.jpg?w=360&t=st=1689176520~exp=1689177120~hmac=1d4f9d865d91f79a108d9e1a77bd48f064e143437183c39b9c9ed6daa4e8fd0c"
                            alt=""
                        />
                        <h4 className="mt-3 text-center"> Prevent Endangered </h4>
                        <p className="text-center">
                            "We help you to prevent endangered by planting more trees and make your life more beautiful
                        </p>
                    </div>
                    <div className="feature-card w-md-25 w-lg-25 w-sm-100 d-flex flex-column align-items-center">
                        <img
                            className="img-fluid"
                            src="https://img.freepik.com/free-psd/3d-illustration-potted-plant_23-2149424542.jpg?w=360&t=st=1689175515~exp=1689176115~hmac=dfc02223495ccd8fc1a8fe335319cd39840708f76757d388f86e7745d8e1cee9"
                            alt=""
                        />
                        <h4 className="mt-3 text-center">
                            Better Environment
                        </h4>
                        <p className="text-center">
                            We have better environment by planting more trees and make your life more beautiful
                        </p>
                    </div>
                </div>
            </div>

            <div className="section3 d-flex-column  ">
                <div
                    className="
        mt-5
        d-flex 
        flex-column
        flex-md-row  
        align-items-center 
        justify-content-around
       
       
        "
                >
                    <div className="img-side">
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/teamwork-5130161-4284299.png?f=webp"
                            alt=""
                            className="img-fluid w-100"
                        />
                    </div>
                    <div className=" col-sm-12 col-md-6    ">
                        <h1>  Our Team </h1>
                        <p>
                            We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.\n  Please make sure to support us in order to join hands to make the world better place.
                        </p>

                        <button className="btn btn-success mt-3">
                            <span className="pre-scrollable ">
                                Support Us </span>
                            <FontAwesomeIcon icon={faMoneyBillTransfer} />
                        </button>
                    </div>
                </div>

                <div className="team container d-flex flex-column align-items-center justify-content-center ">
                    <div
                        className="developer-card align-items-center     
            flex-column flex-md-row
          pt-4 d-flex"
                    >
                        <img
                            className="img-fluid order-md-2 order-lg-1"
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-with-laptop-showing-gesture-cool-4927665-4122904.png?f=webp"
                            alt=""
                        />

                        <div className="dev-info order-md-1 order-lg-2">
                            <h3> Mr. James Bona </h3>
                            <p> CEO,Founder </p>
                            <hr />
                            <p>
                                I am passonate and plan to make the world better place and make it more beautiful
                            </p>

                            <div className="social-media">
                                <p style={{ fontWeight: "bold", color: "#108545" }}> 
                                Follow Us </p>
                                <hr />
                                <div className="d-flex gap-3">
                                    <FontAwesomeIcon
                                        className="social-iconss"
                                        icon={faFacebook}
                                        size="2x"
                                    />
                                    <FontAwesomeIcon
                                        className="social-iconss"
                                        icon={faTwitter}
                                        size="2x"
                                    />
                                    <FontAwesomeIcon
                                        className="social-iconss"
                                        icon={faInstagram}
                                        size="2x"
                                    />
                                    <FontAwesomeIcon
                                        className="social-iconss"
                                        icon={faLinkedin}
                                        size="2x"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="
           d-flex
           flex-column
           flex-xl-row 
           justify-content-between
           
           "
                    >
                        <div
                            className="developer-card  flex-column flex-md-row 
            
            align-items-center  pt-4 d-flex"
                        >
                            <img
                                className="img-fluid"
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-working-on-laptop-4912759-4099789.png"
                                alt="this is for the business man"
                            />

                            <div className="dev-info ">
                                <h3> Mr. James Bona </h3>
                                <p> CEO,Founder </p>
                                <hr />
                                <p>
                                    I am passonate and plan to make the world better place and make it more beautiful
                                </p>

                                <div className="social-media">
                                    <p style={{ fontWeight: "bold", color: "#108545" }}>
                                        Follow 
                                    </p>
                                    <hr />
                                    <div className="d-flex gap-3">
                                        <FontAwesomeIcon icon={faFacebook} className="social-iconss" size="2x" />
                                        <FontAwesomeIcon icon={faTwitter} className="social-iconss" size="2x" />
                                        <FontAwesomeIcon icon={faInstagram} className="social-iconss" size="2x" />
                                        <FontAwesomeIcon icon={faLinkedin} className="social-iconss" size="2x" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="developer-card align-items-center   flex-column flex-md-row   pt-4 d-flex">
                            <img
                                className="img-fluid order-md-2 "
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-reading-business-book-while-seating-on-sofa-5648605-4708257.png"
                                alt=""
                            />

                            <div className="dev-info order-md-1 order-lg-3">
                                <h3> Mr. James Bona </h3>
                                <p> CEO,Founder </p>
                                <hr />
                                <p>
                                    I am passonate and plan to make the world better place and make it more beautiful
                                </p>

                                <div className="social-media">
                                    <p style={{ fontWeight: "bold", color: "#108545" }}>
                                        Follow
                                    </p>
                                    <hr />
                                    <div className="d-flex gap-3">
                                        <FontAwesomeIcon icon={faFacebook} className="social-iconss" size="2x" />
                                        <FontAwesomeIcon icon={faTwitter} className="social-iconss" size="2x" />
                                        <FontAwesomeIcon icon={faInstagram} className="social-iconss" size="2x" />
                                        <FontAwesomeIcon icon={faLinkedin} className="social-iconss" size="2x" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
