import {GetUserDetails} from "../../../Services/GetUserDetails";

export const GET_USER_DETAILS = "GET_USER_DETAILS"

export const user_details = async (dispatch) => {
    const user_info = await GetUserDetails();
    dispatch({
        type: GET_USER_DETAILS,
        user:user_info,
    });
    return user_info;
}



