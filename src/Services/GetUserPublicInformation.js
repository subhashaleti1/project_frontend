import axios from "axios";

const API_URL = process.env.REACT_APP_API_SVR || "http://localhost:4300/api";
let GET_USER_PUBLIC_DETAILS_URL = `${API_URL}/users/`;
const FIND_REVIEWS_URL = `${API_URL}/find-reviews`;
export const GetUserPublicInformation = async (id) => {
  //const data = await axios.get(`${GET_USER_PUBLIC_DETAILS_URL}${id}`);
  const data = await axios.post(
      FIND_REVIEWS_URL,
      {
        id: id,
      },
      {
        headers: {
          authorization: localStorage.getItem("LoginToken"),
        },
      }
  );
  return data.data;
  //return data.data.user;
};
