import { getUserInfo } from "../../../Services/AddAddress";
import {DeleteReview, FindReviewsService} from "../../../Services/Review";

export const GetReviewsAction = async () => {
  const likes = await getUserInfo();
  return likes.user.reviews;
};

export const GetReviewsByUserAction = async () => {
  const reviews = await FindReviewsService();
  return reviews;
};

export const DeleteReviewsAction = async (id) => {
  const data = await DeleteReview(id);
  return data;
};
