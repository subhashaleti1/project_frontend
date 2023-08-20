import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { CreateReviewAction } from "../Actions/Reviews";
import { Link } from "react-router-dom";
import { getProductAction } from "../Actions/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { isloggedinService } from "../../Services/LoginService";
import { DeleteReviewsAction } from "../Actions/GetReviews";
const CreateReviews = ({ productID }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const Review = {
    pid: "",
    review: "",
    rating: "",
  };
  const [initReview, setReview] = useState(Review);
  const [val, setVal] = useState(0);
  Review.rating = val;
  const [errors, updateErrors] = useState({});
  Review.pid = productID;
  const validation = (value) => {
    const errors = {};
    if (!value.review) {
      errors.review = "Reviews cannot be empty";
    }
    return errors;
  };
  const putData = (event) => {
    const { name, value } = event.target;
    setReview({ ...initReview, [name]: value });
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    updateErrors(validation(initReview));

    if (!errors.review && initReview.review !== "") {
      CreateReviewAction(initReview).then(() => {
        getProductAction(productID, dispatch);
      });
    }
  };
  const deleteReview = (id) => {
    DeleteReviewsAction(id).then((data) => {
      if (data.success){
        getProductAction(productID, dispatch);
      }
      console.log("Vishal from delete review",data);
    });
  };

  useEffect(() => {
    setReview({ ...initReview, rating: val });
    /* eslint-disable-next-line */
  }, [val]);
  return (
    <>
      {product.reviews && (
        <div className="list-group my-3">
          {product.reviews.map((element) => {
            return (
              <div className="list-group-item">
                <div className="row" style={{ alignItems: "center" }}>
                  <div className="col-2">
                    <div>
                      <Link
                        to={`/profile/${element.user._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="p-2 m-auto"
                          style={{
                            borderRadius: "50px",
                            backgroundColor: "gray",
                            width: "50px",
                            height: "50px",
                            textAlign: "center",
                          }}
                        >
                          <h4 style={{ color: "white" }}>
                            {element.user.firstName.charAt(0) +
                              element.user.lastName.charAt(0)}
                          </h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-10">
                    <div
                      className="position-absolute top-0 end-0"
                      onClick={() => {
                        deleteReview(element._id);
                      }}
                    >
                      <i class="m-3 fa-solid fa-xmark"></i>
                    </div>
                    <div className="p-3">
                      <Link
                        to={`/profile/${element.user._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <h4>
                          {element.user.firstName + " " + element.user.lastName}
                        </h4>
                      </Link>
                      <p>{element.review}</p>
                      <Rating
                        name="read-only"
                        value={element.rating}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {isloggedinService() && (
        <div className="form">
          <div class="form-group">
            <label for="review">Review</label>
            <textarea
              class="form-control"
              id="review"
              name="review"
              rows="4"
              onChange={(event) => putData(event)}
            ></textarea>
            <p className="text-danger">{errors.review ? errors.review : ""}</p>
          </div>
          <div className="row">
            <span>Rating&nbsp;&nbsp;</span>
            <Rating
              name="simple-controlled"
              value={val}
              onChange={(event, newValue) => {
                if (newValue) {
                  setVal(newValue);
                } else {
                  setVal(0);
                }
              }}
            />
          </div>
          <div className="row">
            <button
              type="button"
              class="btn btn-primary my-2"
              onClick={(event) => dataSubmit(event)}
            >
              Add Review
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default CreateReviews;
