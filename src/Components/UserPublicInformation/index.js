import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserPublicDetails } from "../Actions/GetUserPublicInformation";
import ReviewsList from "../ReviewsList";
const UserPublicInformation = () => {
  const userData = useSelector((state) => state.UserPublicDetails);
  const dispatch = useDispatch();
  const userID = useParams();
  useEffect(() => {
    UserPublicDetails(dispatch, userID.userID).catch(console.error);
  }, [dispatch, userID.userID]);
  console.log(userData);

  return (
    <>
        {userData.length > 0 ? (
         <div>
         <div className="row mt-4" style={{fontSize: "1.5rem"}}>
        <span>
          Name:&nbsp;&nbsp;&nbsp;{userData[0].user.firstName}&nbsp;{userData[0].user.lastName}
        </span>

             <span>User Type:&nbsp;&nbsp;{userData[0].user.type}</span>
         </div>
         </div>
           ) : ""}

      {userData ? <ReviewsList Reviews={userData}></ReviewsList> : ""}
    </>
  );
};
export default UserPublicInformation;
