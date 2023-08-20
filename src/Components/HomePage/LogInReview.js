import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserPublicDetails} from "../Actions/GetUserPublicInformation";
import ReviewsList from "../ReviewsList";
const LogInReview = () => {
  const user = useSelector((state) => state.UserPublicDetails);
  const dispatch = useDispatch();
  const userID = useParams();
  useEffect(() => {
    UserPublicDetails(dispatch,userID.userID).catch(console.error);
  }, [dispatch,userID.userID]);
  return (
    <>
      <div className="row">
        <span style={{ fontSize: "3rem" }}>User Details:</span>
      </div>
      <div className="row" style={{ fontSize: "1.5rem" }}>
        <span>
          Name:&nbsp;&nbsp;&nbsp;{user.firstName}&nbsp;{user.lastName}
        </span>
      </div>
      <div className="row" style={{ fontSize: "1.5rem" }}>
        <span>User Type:&nbsp;&nbsp;{user.type}</span>
      </div>

      {user.reviews ? <ReviewsList Reviews={user.reviews}></ReviewsList> : ""}
    </>
  );
};
export default LogInReview;
