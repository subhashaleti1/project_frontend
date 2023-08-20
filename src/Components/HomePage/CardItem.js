import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetLikes } from "../Actions/GetLikes";
import Carousel from "./Carousel";
import LogInLikes from "./LogInLikes";
import LogOutLikes from "./LogoutLikes";
import MultiItemCarousel from "./MultiItemCarousel";
import "./CardItem.css";

const Card = () => {
  const login = useSelector((state) => state.LogIn);
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    GetLikes().then((data) => setLikes(data));
  }, []);
  return (
    <>
      {login.logedIn && (
        <div className="text-end mt-2">
          <h6 className="wd-welcome">
            {" "}
              Happy shopping, {JSON.parse(localStorage.getItem("LoggedIn"))?.firstName}
          </h6>
        </div>
      )}
      <div className="pt-2 wd-carousel">
        <Carousel />
      </div>
      <br />

      {!login.logedIn ? (
        <>
            {/*<div className="wd-multi-item-carousel border rounded border-4 border-light">
            <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
              <h4
                style={{ fontSize: "25px" }}
                className="w-100 wd-top-offers ps-5 pt-2 pb-2"
              >
                Wishlist
              </h4>
            </div>
            <LogOutLikes />
          </div>*/}
        </>
      ) : (
        <>
          <div className="wd-multi-item-carousel border rounded border-4 border-light">
            <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
              <h4
                style={{ fontSize: "25px" }}
                className="w-100 wd-top-offers ps-5 pt-2 pb-2"
              >
               Wishlist
              </h4>
            </div>
              <LogInLikes />
          </div>
        </>
        )}
          <div className="wd-multi-item-carousel border rounded border-4 border-light">
            <div className="border border-top-0 border-end-0 border-4 border-start-0 border-light d-inline d-flex">
              <h4
                style={{ fontSize: "25px" }}
                className="w-100 wd-top-offers ps-5 pt-2 pb-2"
              >
                Best Deals
              </h4>
            </div>
            {/* <MultiItemCarousel /> */}
          </div>
    </>
  );
};
export default Card;
