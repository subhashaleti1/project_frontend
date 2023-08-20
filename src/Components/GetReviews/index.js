import { useEffect, useState } from "react";
import {GetReviewsAction, GetReviewsByUserAction} from "../Actions/GetReviews";
import ReviewsList from "../ReviewsList";
const GetReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    GetReviewsByUserAction().then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-4">
      <ReviewsList Reviews={reviews} />
    </div>
  );
};
export default GetReviews;
