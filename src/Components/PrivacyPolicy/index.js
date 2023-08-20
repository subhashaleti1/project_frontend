import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ClosePrivacyPolicy } from "../Actions/PrivacyPolicy";
import "./index.css";

const PrivacyPolicy = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="wd-privacy">
      <div className="wd-privacy-content">
        <p>
          We value the trust you place in us and recognize the importance of
          secure transactions and information privacy. This Privacy Policy
          describes how SVR collect, use, share or otherwise process your
          personal information through the website.By visiting this Platform,
          providing your information or availing out product/service, you
          expressly agree to be bound by the terms and conditions of this
          Privacy Policy, the Terms of Use and the applicable service/product
          terms and conditions, and agree to be governed by the laws of xyz
          country including but not limited to the laws applicable to data
          protection and privacy. If you do not agree please do not use or
          access our Platform. &nbsp;
          <Link to="/privacy">Read More...</Link>
        </p>

        <i
          className="fa fa-times position-absolute top-0 end-0 p-3"
          aria-hidden="true"
          onClick={() => ClosePrivacyPolicy(dispatch)}
        ></i>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
