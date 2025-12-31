import React from "react";
import "../styles/productCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { handleLongText } from "../utils/helpers";

const ProductCard = ({ product }) => {
  let defaultImage = "https://www.hydroscand.se/media/catalog/product/placeholder/default/image-placeholder-base.png"

  let navigate = useNavigate()
  return (
    <>
      <div className="product-card p-0">
        <div className="image-wrapper  ">
          <img
            className="img-fluid  product-image"
            src={product.images? product.images[0] : defaultImage}
            onError={
              (e) => {
                e.target.src = defaultImage
              }
            }
            alt="product  image "
          />
        </div>


        <div className="content px-3 pt-2 position-relative pb-3">
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            className="read-more   p-3 m-1 rounded-circle  position-absolute  "
            icon={faBookOpen}
            onClick={()=>navigate(`/products/${product.id}`)}
            size="2x"
          />

          <h4>
            {handleLongText(product.title, 10)}
          </h4>
          <p  >
            {handleLongText(product.description, 75)}
          </p>

          <h3> ${product?.price}</h3>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
