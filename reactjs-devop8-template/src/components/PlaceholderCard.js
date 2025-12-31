import React from "react";
import "../styles/placeholderCardStyle.css";
const PlaceholderCard = () => {
  return (
    <div className="placeholder-card card p-0" aria-hidden="true">
      <div className="p-absolute image-pard">
        <img
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          className="card-img-top img-fluid"
          alt="default image placeholder "
        />

        <div className="placeholder-glow inner-part p-1">
          <span className=" rounded-circle placeholder col-2 p-5 m-2"></span>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
      </div>
    </div>
  );
};

export default PlaceholderCard;
