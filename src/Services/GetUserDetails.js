import axios from "axios";

const API_URL = process.env.REACT_APP_API_SVR || "http://localhost:4300/api";

const GET_USER_DETAILS_URL = `${API_URL}/logged-user`;

export const GetUserDetails=async()=>{
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const data = await axios.post(
        GET_USER_DETAILS_URL,
        {
            id: loginInfo._id,
        },
        {
            headers: {
                authorization: localStorage.getItem("LoginToken"),
            },
        }
    );
    console.log(data.data.user)
    return data.data.user;
}
