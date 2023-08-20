import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import "./index.css";
import { getProductAction } from "../Actions/AddProduct";
import { isloggedinService } from "../../Services/LoginService";
import Likes from "../Likes";
import CreateReviews from "../CreateReviews";
import { useDispatch, useSelector } from "react-redux";

const DetailsDB = () => {
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  const getProductsFromDB = async () => {
    await getProductAction(product_id, dispatch);
  };
  useEffect(() => {
    getProductsFromDB();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div>
      <br></br>
      <div>
        <h1>{product.name}</h1>
        <div className="row"></div>
        <div className="my-3 mx-auto" style={{ textAlign: "center" }}>
          <img src={product.imageUrl} height={300} alt="All product Details" />
        </div>
        {isloggedinService() && (
          <>
            <br />
            <div className="mt-4 mx-4" style={{ fontSize: "30px" }}>
              <div className="mx-auto">
                <Likes pid={product_id} />
              </div>
              <p style={{ fontSize: "14px" }}>Like</p>
            </div>
          </>
        )}

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>Name</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["name"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>asin</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["asin"]}</span>
              </div>
            </div>
          </li>
          {/* <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>imageUrl</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["imageUrl"]}</span>
              </div>
            </div>
          </li> */}
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>currency</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["currency"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>originalPrice</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["originalPrice"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>discount</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["discount"]}</span>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>discountPercentage</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["discountPercentage"]}</span>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>price</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>{product["price"]}</span>
              </div>
            </div>
          </li>
          {/* <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4">
                <span>
                  <b>Trusted User Rating</b>
                </span>{" "}
                :
              </div>
              <div className="col col-md-8">
                <span>
                  <StarRating />
                </span>
              </div>
            </div>
          </li> */}
        </ul>
        <div>
          <CreateReviews productID={product_id} product={product} />
        </div>
      </div>
    </div>
  );
};

export default DetailsDB;
