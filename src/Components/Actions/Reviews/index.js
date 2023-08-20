import { CreateReview } from "../../../Services/Review";

export const CREATE_REVIEW = "CREATE_REVIEW";

export const CreateReviewAction = async (reviews) => {
  const createReview = await CreateReview(reviews);
  return createReview;
};
