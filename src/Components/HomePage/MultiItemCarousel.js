import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./multicarousel.css";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa-solid fa-angle-left" style={{ color: "blue" }}></i>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa-solid fa-angle-right" style={{ color: "blue" }}></i>
    </div>
  );
};

const MultiItemCarousel = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const SearchByTitle = () => {
    setLoading(true)
    var colors = [
      "apple",
      "bat",
      "green",
      "samsung",
      "glasses",
      "snacks",
      "chairs",
      "kitchen",
      "electronics",
    ];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    const options = {
      method: "GET",
      url: "https://amazon24.p.rapidapi.com/api/product",
      params: {
        categoryID: "aps",
        keyword: randColor,
        country: "US",
        page: "1",
      },
      headers: {
        'X-RapidAPI-Key': 'a04b30f033msh3604416a9b48d84p175864jsnf51561f385ff',
        'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setProduct(response.data.docs.slice(0, 20));
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    if(product.length<=0){
    SearchByTitle();
    }
  }, []);

  const Card = ({ p }) => {
    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        <img
          className="multi-image"
          src={p.product_main_image_url}
          style={{
            width: "100%",
            height: "210px",
            objectFit: "contain",
            marginBottom: "5px",
            marginTop: "5px",
          }}
          alt="Product Details"
        />

        <h5
          className="text"
          style={{ fontSize: "15px", padding: "5px 0", textDecoration: "none" }}
        >
          {p.product_title}
        </h5>
        <h5
          style={{ fontSize: "15px", padding: "5px 0", textDecoration: "none" }}
        >
          <span style={{ textDecoration: "line-through", color: "grey" }}>
            ${Number(p.app_sale_price) + 100}
          </span>
          <span style={{ color: "green", padding: "0px 2px" }}>
            ${p.app_sale_price}
          </span>
        </h5>
      </div>
    );
  };

  const properties = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: "150px",
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
    {loading ? (
          <div className="d-flex align-items-center bg-white justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        ):(
      <Slider {...properties}>
          { product.map((p) => {
            return (
              <Link
                to={`details/${p.product_id}`}
                state={{ productState: p }}
                style={{ textDecoration: "none", color: "black" }}
                key={"l" + p.product_id}
              >
                <Card p={p} key={p.product_id} />
              </Link>
            );
          })}
      </Slider>
     )}
    </>
  );
};
export default MultiItemCarousel;
