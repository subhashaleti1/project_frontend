import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { isDealerService } from "../../Services/LoginService";
import { AddProductAction } from "../Actions/AddProduct";
import "./index.css";
import Spinner from 'react-bootstrap/Spinner';

import CreateReviews from "../CreateReviews";
import Likes from "../Likes";

const Details = () => {
  const [productTitle, setproductTitle] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading,setLoading] = useState(false);
  const [priceInfo, setPriceInfo] = useState([]);
  const [productAllDetails, setProductAllDetails] = useState([]);
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
    price: 0,
    manufacturer: "",
    asin: "",
    country: "",
    originalPrice: 0,
    discount: 0,
    discountPercentage: 0,
    currency: "",
    vid: "",
  });
  const location = useLocation();
  const { productState } = location.state;
  const product_id = productState.asin;
  const login = useSelector((state) => state.LogIn);

  const addToCart = (response) => {
    const productData = {
      name: productState.title,
      asin: product_id,
      imageUrl: response.data.result[0].main_image,
      manufacturer: response.data.result[0].product_information.manufacturer,
      originalPrice: Number(
          response.data.result[0].price["before_price"]),
      price: Number(response.data.result[0].price["current_price"]),
      currency: response.data.result[0].price["currency"],
      discount: Number(response.data.result[0].price["savings_amount"]),
      discountPercentage: Number(response.data.result[0].price["savings_percent"]),
    }
    console.log("Product data   ",response);
    AddProductAction(productData);
  };
  const productDetails = () => {
    setLoading(true);
    console.log(product_id)
    const options = {
      method: "GET",
      url: 'https://amazon23.p.rapidapi.com/product-details',
      params: { country: "US" , asin:product_id},
      headers: {
        'X-RapidAPI-Key': 'a04b30f033msh3604416a9b48d84p175864jsnf51561f385ff',
        'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result[0].asin)
        addToCart(response);
        setproductTitle(productState.title);
        setProduct(response.data.result[0].product_information);
        setPriceInfo(response.data.result[0].price);
        setProductAllDetails(response.data.result[0]);
        setData({
          ...data,
          name: productState.title,
          asin: product_id,
          imageUrl: response.data.result[0].main_image,
          manufacturer: response.data.result[0].product_information.manufacturer,
          originalPrice: Number(
              response.data.result[0].price["before_price"]),
          price: Number(response.data.result[0].price["current_price"]),
          currency: response.data.result[0].price["currency"],
          discount: Number(response.data.result[0].price["savings_amount"]),
          discountPercentage: Number(response.data.result[0].price["savings_percent"])
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    productDetails();
    /* eslint-disable-next-line */
  }, []);

  return (
    loading === true ? (
      <div className="d-flex flex-column align-items-center bg-white justify-content-center">
        <Spinner animation="border" role="status" style={{marginTop:"300px"}}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      ):(
      <div>
        <h1>{productTitle}</h1>
        {login.logedIn && (
          <div className="mt-4 mx-4" style={{ fontSize: "30px" }}>
              <div className="mx-auto">
                <Likes pid={product_id} />
              </div>
            {/*<p style={{ fontSize: "14px" }}>Like</p>*/}
          </div>
        )}
        <div className="my-3 mx-auto" style={{ textAlign: "center" }}>
          <img
            src={productAllDetails.main_image}
            height={300}
            alt="All product Details"
          />
        </div>
        <ul className="list-group mt-5">
          {Object.keys(product).map((prod) => (
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-4 ">
                  <span>
                    <b>{prod.replaceAll("_", " ").trim()}</b>
                  </span>{" "}
                  :
                </div>
                <div className="col-md-8 ">
                  <span>{product[prod]}</span>
                </div>
              </div>
            </li>
          ))}
          {Object.keys(priceInfo).map((prod) => (
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-4">
                  <span>
                    <b>{prod.replaceAll("_", " ").trim()}</b>
                  </span>{" "}
                  :
                </div>
                <div className="col-md-8">
                  <span>{priceInfo[prod]}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/*<div>*/}
        {/*  <CreateReviews productID={product_id} product={product} />*/}
        {/*</div>*/}
      </div>
      )
  );
};

export default Details;
