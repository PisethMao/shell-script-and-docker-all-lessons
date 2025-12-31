import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { GET_ALL_PRODUCTS } from "../services/productService";
import PlaceholderCard from "../components/PlaceholderCard";
import ReactPaginate from "react-paginate";
import { correctAllProducts } from "../utils/helpers";
// React Hook ( UseState, UseEffect) useRef ,
const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([{}]);

  const [allProducts, setAllProducts] = useState([]); // store all products from api

  const [sortingText, setSortingText] = useState("A-Z");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [filterText, setFilterText] = useState("");
  const itemPerPage = 8;

  // useEffect to get totalPage of the product!
  useEffect(() => {
    GET_ALL_PRODUCTS().then((response) => {
      let totalItems = response.length;
      // 100 / 10 => 10 page
      setTotalPage(Math.ceil(totalItems / itemPerPage));
    });
  }, []);
  //  we need fetch the data here
  useEffect(() => {
    setIsLoading(true); // meaning it will be loading !
    GET_ALL_PRODUCTS(currentPage, itemPerPage)
      .then((response) => {
        setAllProducts(correctAllProducts(response));
      })
      .catch((error) => {
        console.log("Error fetching product : ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  // this is for searching
  useEffect(() => {
    let searchResult = allProducts.filter((pro) =>
      pro.title.toLowerCase().includes(filterText.toLocaleLowerCase())
    );
    setProducts(searchResult);
  }, [filterText, allProducts]);

  console.log("Filtered Text : ", filterText);
  const handlePageChange = (e) => {
    setCurrentPage(e.selected + 1);
  };
  const renderPlaceholderCards = (numberOfCard = 0) => {
    let placeholderCards = [];
    for (let i = 0; i < numberOfCard; i++) {
      placeholderCards.push(
        <div key={i} className="col-md-3">
          <PlaceholderCard />
        </div>
      );
    }
    return placeholderCards;
  };

  const handleSortProduct = () => {
    if (sortingText === "A-Z") {
      setProducts(
        products.sort((product1, product2) =>
          product1.title.localeCompare(product2.title)
        )
      );
      setSortingText("Z-A");
    } else {
      setProducts(
        products.sort((product2, product1) =>
          product1.title.localeCompare(product2.title)
        )
      );
      setSortingText("A-Z");
    }
  };

  return (
    <div className="container ">
      <div className="row ">
        <div className="d-flex justify-content-end gap-2 mt-4">
          <input
            type="text"
            className="rounded"
            value={filterText}
            placeholder="Type title to search.."
            onChange={(e) => setFilterText(e.target.value)}
          />
          <button className="btn btn-warning" onClick={handleSortProduct}>
            {" "}
            {sortingText}{" "}
          </button>
        </div>

        {isLoading ? (
          <>
            {/* design placeholder cards  */}
            {renderPlaceholderCards(8)}
          </>
        ) : (

          products.length > 0 ?
            products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3 "
                >
                  <ProductCard product={product} />
                </div>
              );
            })
            : <div className="d-flex justify-content-center">
              <h4> There is no product match "{filterText}"!</h4>
            </div>
        )}

        {totalPage > 1 && (
          <div className="d-flex justify-content-center bg-light py-3">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={totalPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
