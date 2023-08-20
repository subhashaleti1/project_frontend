import {GetUserPublicInformation} from "../../../Services/GetUserPublicInformation";

export const GET_USER_PUBLIC_DETAILS = "GET_USER_PUBLIC_DETAILS"

export const UserPublicDetails = async (dispatch,id) => {
    const user_info = await GetUserPublicInformation(id);
    dispatch({
        type: GET_USER_PUBLIC_DETAILS,
        user:user_info,
    });
    return user_info;
}