import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
 
 
// import facebook
import "../styles/footerStyle.css";
const Footer = () => {

  
  return (
    <div className="footer ">
      <div className="d-sm-flex flex-sm-column 
      flex-lg-row    
      gap-4 
      px-5 pt-4">
        <div className="left-sides d-sm-flex flex-sm-column   flex-sm-column flex-md-row align-items-md-center  ">
         
          <img
            className="d-block "
            src="https://cdn3d.iconscout.com/3d/premium/thumb/save-trees-5019198-4196256.png"
            alt="website logo "
          />

          <div className="mt-4  ">
            <h4 className="logo-name ">EarthDX</h4>
            <p className="col-lg-7">
            We helps you to save the earth and encourage people to plant more trees. We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
            </p>
          </div>
        </div>

        <div className="middle-side">
          {/* <div className="d-flex justify-content-around">
            <a className="nav-link"  href="#"> Home </a>
            <a className="nav-link" href="#"> Service </a>
            <a className="nav-link" href="#"> About Us</a>
             
          </div> */}
        </div>

        <div className="right-side   d-md-flex flex-sm-column flex-md-row align-items-md-start justify-content-md-between gap-md-2 flex-lg-column  ">
          <div className="">
            <h4> Email Us </h4>
            <p className="w-md-100">
              {" "}
              Let's keep in touch. We'll send you the latest news and updates
            </p>
            <div className="d-flex">
              <input type="text" />
              <button className="search-button">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
          <div className="social-media  ">
            <h4> Follow Us  </h4>
            <p>   Follow Us to see what we are doing in this journey</p>
            <div className="d-flex gap-3">
              <FontAwesomeIcon icon={faTwitter} color="#108545" size="2x" />
              <FontAwesomeIcon icon={faFacebook} color="#108545" size="2x" />
              <FontAwesomeIcon icon={faInstagram} color="#108545" size="2x" />
              <FontAwesomeIcon icon={faYoutube} color="#108545" size="2x" />
            </div>
          </div>
        </div>
      </div>

      <div className="allrights text-center">
        <p>
          © 2023 All Rights Reserved. Design by{" "}
          <span
            style={{ fontWeight: "bolder" }}
            className="text-light text-weight-bold"
          >
            Keo
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
