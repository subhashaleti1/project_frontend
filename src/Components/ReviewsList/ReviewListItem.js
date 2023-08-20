import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const ReviewsListItem = ({ pname, review, rating, pid }) => {
  return (
    <>
      <div className="list-group-item">
        <div className="row">
          <span style={{ fontSize: "0.9rem" }}>
            Product Name:&nbsp;&nbsp;
            <Link to={`/details_db/${pid}`}>{pname}</Link>
          </span>
        </div>
        <div className="row">
          <span style={{ fontSize: "1.5rem" }}>
            Review:&nbsp;&nbsp;{review}
          </span>
        </div>
        <div className="row">
          <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>
    </>
  );
};
export default ReviewsListItem;
