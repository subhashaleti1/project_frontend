import { FIND_ALL_LIKES } from "../Actions/Likes";
const LikesReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_LIKES:
      return action.likes;
    default:
      return state;
  }
};
export default LikesReducer;
