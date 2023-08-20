import axios from "axios";

const API_URL = process.env.REACT_APP_API_SVR || "http://localhost:4300/api";

const ADD_PAYMENT_URL = `${API_URL}/add-payment`;
const REMOVE_PAYMENT_URL = `${API_URL}/remove-payment`;

export const addPayment = async (payment) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.put(
    ADD_PAYMENT_URL,
    {
      uid: loginInfo._id,
      payment,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data.error.length > 0;
};
export const RemovePayment = async (pid) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.put(
    REMOVE_PAYMENT_URL,
    {
      uid: loginInfo._id,
      pid,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data.error.length > 0;
};
