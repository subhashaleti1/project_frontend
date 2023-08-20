import { ADD_PAYMENT } from "../Actions/AddPayment";
const AddPaymentReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      return action.paymentInfo;
    default:
      return state;
  }
};
export default AddPaymentReducer;
