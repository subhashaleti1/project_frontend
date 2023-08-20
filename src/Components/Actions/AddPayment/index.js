import { getUserInfo } from "../../../Services/AddAddress";
import { addPayment, RemovePayment } from "../../../Services/AddPayment";

export const ADD_PAYMENT = "ADD_PAYMENT";

export const AddPaymentAction = async (address) => {
  const info = await addPayment(address);
  return info;
};
export const RemovePaymentAction = async (pid) => {
  const info = await RemovePayment(pid);
  return info;
};
export const getPaymentAction = async (dispatch) => {
  const info = await getUserInfo();
  dispatch({
    type: ADD_PAYMENT,
    paymentInfo: info.user.paymentInfo,
  });
  return info.user.paymentInfo;
};
