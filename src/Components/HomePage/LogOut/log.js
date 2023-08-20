// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import {findAllLikes} from "../../Actions/Likes";
// import Index from "./Index";
// const Log = () => {
//   const user = useSelector((state) => state.findAllLikes);
//   const dispatch = useDispatch();
//   const userID = useParams();
//   useEffect(() => {
//     findAllLikes(dispatch,userID.userID).catch(console.error);
//   }, [dispatch,userID.userID]);
//   return (
//     <>
//       {user? <Index Reviews={user}></Index> : ""}
//     </>
//   );
// };
// export default Log;