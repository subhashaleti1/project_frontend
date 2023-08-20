import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { OpenPrivacyPolicy } from "../Actions/PrivacyPolicy";
import { OpenContactUs } from "../Actions/ContactUs";
import PrivacyPolicy from "../PrivacyPolicy";
import ContactUs from "../ContactUs";

const Footer = () => {
  const privacy = useSelector((state) => state.PrivacyPolicy);
  const contactUs = useSelector((state) => state.ContactUs);
  const dispatch = useDispatch();
  return (
    <>
      <div className={`${!contactUs.display ? "d-none" : ""}`}>
        <ContactUs />
      </div>
      <div className={`${!privacy.display ? "d-none" : ""}`}>
        <PrivacyPolicy />
      </div>
      <footer className="row row-cols-5 py-5 my-5 border-top">
        <div className="col">
          <Link
            to="/"
            className="d-flex justify-content-center align-items-center mb-3 link-dark text-decoration-none"
          >
            EasyShop
          </Link>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <ul className="nav flex-column">
            <h5 className="mx-auto">Navigation</h5>
            <li className="nav-item mb-2 mx-auto">
              <Link to="/" className="nav-link p-0 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2 mx-auto">
              <Link
                to="#"
                onClick={() => OpenContactUs(dispatch)}
                className="nav-link p-0 text-muted"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item mb-2 mx-auto">
              <Link to="/privacy" className="nav-link p-0 text-muted">
                Privacy Page
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="nav flex-column">
            <h5 className="mx-auto">Links</h5>

            <li className="nav-item mb-2 mx-auto">
              <Link to="/search" className="nav-link p-0 text-muted">
                Search
              </Link>
            </li>
            <li className="nav-item mb-2 mx-auto">
              <Link
                to="#"
                onClick={() => OpenPrivacyPolicy(dispatch)}
                className="nav-link p-0 text-muted"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
