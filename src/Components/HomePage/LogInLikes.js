import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./multicarousel.css";
import { GetLikes } from "../Actions/GetLikes";
import { Link } from "react-router-dom";
import {findLikesByUser} from "../Actions/Likes";

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

const LogInLikes = () => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
      findLikesByUser().then((data) => setLikes(data));
  }, []);
  const Card = ({ p }) => {
    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        <img
          className="multi-image"
          src={p.product.imageUrl}
          style={{
            width: "100%",
            height: "210px",
            objectFit: "contain",
            marginBottom: "5px",
            marginTop: "5px",
          }}
          alt="Product Details"
        />

        <h5 className="text" style={{ fontSize: "15px", padding: "5px 0" }}>
          {p.product.name}
        </h5>
        <h5 style={{ fontSize: "15px", padding: "5px 0" }}>
          <span style={{ color: "green", padding: "0px 2px" }}>
            ${p.product.price}
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
    slidesToShow: likes.length >= 4 ? 4 : 1,
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
  console.log(likes);
  return (
    <>
      <Slider {...properties}>
        {likes.length > 0 ? (
          likes.map((p) => {
            return (
              <Link
                to={`/details_db/${p.product._id}`}
                style={{ textDecoration: "none", color: "black" }}
                key={"l" + p._id}
              >
                <Card p={p} key={p._id} />
              </Link>
            );
          })):
          (
          <>
          </>
          )}
      </Slider>
    </>
  );
};
export default LogInLikes;
