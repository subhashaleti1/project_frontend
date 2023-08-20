import { useDispatch } from "react-redux";
import { CloseContactUs } from "../Actions/ContactUs";
import "./index.css";

const ContactUs = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="wd-privacy">
      <div className="wd-privacy-content">
        <div>
          <h5>Mail us at:</h5>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Subhash Aleti</span>&nbsp;
            <a href="mailto:aleti.s@northeastern.edu">
              (aleti.s@northeastern.edu)
            </a>
          </p>


          <br></br>

          <h5>Contact us at:</h5>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Subhash Aleti</span>&nbsp;
            <a href="tel:+8574372221">(+18576938501)</a>
          </p>

        </div>
        <i
          className="fa fa-times position-absolute top-0 end-0 p-3"
          aria-hidden="true"
          onClick={() => CloseContactUs(dispatch)}
        ></i>
      </div>
    </div>
  );
};

export default ContactUs;
