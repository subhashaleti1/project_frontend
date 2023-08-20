import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { useSelector } from "react-redux";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} style={{backgroundColor:"#222f3e"}} onClick={onClick}>
      <i className="fa-solid fa-angle-left" style={{ color: "#ff9900" }}></i>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} style={{backgroundColor:"#222f3e"}} onClick={onClick}>
      <i className="fa-solid fa-angle-right" style={{ color: "#ff9900" }}></i>
    </div>
  );
};
const Carousel = () => {
  const login = useSelector((state) => state.LogIn);
  return (
    <>
    {login.logedIn ? (
      <Slider
        autoplay={true}
        autoplaySpeed={3000}
        dots={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        <div>
          <img
            src="https://www.warehouseanywhere.com/resources/history-future-and-trends-of-e-commerce/warehouse-anywhere-history-future-ecommerce-1.jpg"
            style={{ width: "100%", height: "70vh" }}
            alt="Profile Banners"
          />
        </div>

        <div>
          <img

            src="https://www.qed42.com/sites/default/files/styles/2640x1320/public/2022-02/Best%20Practices%20For%20eCommerce%20Website%20Design.webp?itok=xACdB2Ov"
            style={{ width: "100%", height: "70vh" }}
            alt="Profile Banners"
          />
        </div>
        <div>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-ecommerce-banner-planning-segmentation-selection-image_1375247.jpg"
            style={{ width: "100%", height: "70vh" }}
            alt="Profile Banners"
          />
        </div>
        <div>
          <img
            src="https://pbs.twimg.com/profile_banners/15087766/1621257879/1080x360"
            style={{ width: "100%", height: "70vh" }}
            alt="Profile Banners"
          />
        
        </div>
      </Slider>

    ) :(
      <Slider
        autoplay={true}
        autoplaySpeed={3000}
        dots={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        <div>
          <img

              src="https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-ecommerce-banner-planning-segmentation-selection-image_1375247.jpg"
              style={{ width: "100%", height: "70vh" }}
              alt="Profile Banners"
          />
        </div>

        <div>
          <img
              src="https://www.qed42.com/sites/default/files/styles/2640x1320/public/2022-02/Best%20Practices%20For%20eCommerce%20Website%20Design.webp?itok=xACdB2Ov"
              style={{ width: "100%", height: "70vh" }}
              alt="Profile Banners"
          />
        </div>
        <div>
          <img
              src="https://www.warehouseanywhere.com/resources/history-future-and-trends-of-e-commerce/warehouse-anywhere-history-future-ecommerce-1.jpg"
              style={{ width: "100%", height: "70vh" }}
              alt="Profile Banners"
          />
          </div>
      </Slider>
    )}
    </>
  );
};
export default Carousel;
