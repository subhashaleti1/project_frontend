import { SET_PRODUCT } from "../Actions/AddProduct";
import { CREATE_REVIEW } from "../Actions/Reviews";

const ProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      state?.reviews.push(action.data);
      return state;
    case SET_PRODUCT:
      return action.data;
    default:
      return state;
  }
};
export default ProductsReducer;
