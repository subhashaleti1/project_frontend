import axios from "axios";

const API_URL = process.env.REACT_APP_API_SVR || "http://localhost:4300/api";
const UPDATE_USER_DETAILS_URL = `${API_URL}/updateusers`;
export const UpdateUsers = async (user) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.put(UPDATE_USER_DETAILS_URL, {
    _id: loginInfo._id,
    firstName: user.firstName,
    lastName: user.lastName,
    dateOfBirth: user.dateOfBirth,
    phone: user.phone,
    password: user.password,
  });
  return data.data;
};
