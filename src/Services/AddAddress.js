import axios from "axios";

const API_URL = process.env.REACT_APP_API_SVR || "http://localhost:4300/api";

const ADD_ADDRESS_URL = `${API_URL}/add-address`;
const REMOVE_ADDRESS_URL = `${API_URL}/remove-address`;
const LOGIN_USER_INFO = `${API_URL}/logged-user`;

export const addAddress = async (address) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.put(
    ADD_ADDRESS_URL,
    {
      uid: loginInfo._id,
      address,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data.error.length > 0;
};
export const RemoveAddress = async (aid) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.put(
    REMOVE_ADDRESS_URL,
    {
      uid: loginInfo._id,
      aid,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data.error.length > 0;
};

export const getUserInfo = async () => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const loginUserData = await axios.post(
    LOGIN_USER_INFO,
    { id: loginInfo._id },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  console.log(loginUserData.data)
  return loginUserData.data;
};
