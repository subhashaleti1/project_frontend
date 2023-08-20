import axios from "axios";

const API_URL = process.env.REACT_APP_API_SVR || "http://localhost:4300/api";
const IS_LIKED_URL = `${API_URL}/liked`;
const ADD_LIKE_URL = `${API_URL}/add-like`;
const REMOVE_LIKE_URL = `${API_URL}/remove-like`;
const FIND_LIKE_URL = `${API_URL}/likes-by-user`;

export const IsLikedService = async (productId) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    IS_LIKED_URL,
    {
      id: loginInfo._id,
      productId,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};

export const AddLikeService = async (productId) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    ADD_LIKE_URL,
    {
      id: loginInfo._id,
      productId,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};

export const RemoveLikeService = async (productId) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    REMOVE_LIKE_URL,
    {
      id: loginInfo._id,
      productId,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};

export const FindLikesService = async() => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
      FIND_LIKE_URL,
      {
        id: loginInfo._id,
      },
      {
        headers: {
          authorization: localStorage.getItem("LoginToken"),
        },
      }
  );
  return data.data;
}