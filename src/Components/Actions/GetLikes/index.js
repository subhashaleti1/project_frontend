import { getUserInfo } from "../../../Services/AddAddress";

export const GetLikes = async (dispatch) => {
  const likes = await getUserInfo();
  return likes.user.likes;
};
